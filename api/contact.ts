import type { VercelRequest, VercelResponse } from '@vercel/node';

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
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    return response.status(500).json({ error: 'Email service is not configured' });
  }

  const { name, email, company, message } = request.body as ContactPayload;
  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Name, email, and message are required' });
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ['info@raytoprolog.com'],
      reply_to: email,
      subject: `New contact enquiry from ${name}`,
      html: `
        <h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    }),
  });

  if (!resendResponse.ok) {
    return response.status(502).json({ error: 'Email provider rejected the message' });
  }

  return response.status(200).json({ success: true });
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