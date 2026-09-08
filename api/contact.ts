import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const emailDomain = process.env.RESEND_EMAIL_DOMAIN?.replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!apiKey || !emailDomain) {
    return response.status(500).json({ error: 'Email service is not configured' });
  }

  const resend = new Resend(apiKey);
  const fromEmail = `Rayto Prolog <noreply@${emailDomain}>`;

  const { name, email, company, message } = request.body as ContactPayload;
  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: ['info@raytoprolog.com'],
      replyTo: email,
      subject: `New contact enquiry from ${name}`,
      html: `
        <h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend rejected contact email:', error);
      return response.status(502).json({ error: 'Email provider rejected the message' });
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend request failed:', error);
    return response.status(502).json({ error: 'Unable to send email right now' });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character);
}