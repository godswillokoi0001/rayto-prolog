import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  X,
} from 'lucide-react';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const contactNumbers = [
  { label: 'Main Line', number: '08036492744', href: 'tel:+2348036492744', primary: true },
  { label: 'Alternative Line', number: '08076489927', href: 'tel:+2348076489927', primary: false },
  { label: 'Alternative Line 2', number: '09032617555', href: 'tel:+2349032617555', primary: false },
  { label: 'WhatsApp Only', number: '09160600899', href: 'https://wa.me/2349160600899', primary: false, whatsapp: true },
];
export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const info = useReveal<HTMLDivElement>();
  const form = useReveal<HTMLFormElement>();

  useEffect(() => {
    if (!sent) return;

    const timeout = window.setTimeout(() => setSent(false), 6000);
    return () => window.clearTimeout(timeout);
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);
    setIsSubmitting(true);

    const formData = new FormData(form.ref?.current as HTMLFormElement);
    const payload: Record<string, string> = {
      'Full Name': String(formData.get('name') || ''),
      'Email Address': String(formData.get('email') || ''),
      Company: String(formData.get('company') || 'Not provided'),
      Message: String(formData.get('message') || ''),
    };
    payload._replyto = payload['Email Address'];
    payload._subject = 'New Rayto Prolog contact enquiry';
    payload._template = 'table';
    payload._captcha = 'false';

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@raytoprolog.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { success?: boolean | string; message?: string };

      if (response.ok && result.success !== false) {
        setSent(true);
        form.ref?.current?.reset();
      } else {
        setSubmissionError(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmissionError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useSEO({
    title: 'Contact Rayto Prolog | Get a Logistics Quote Today',
    description: 'Contact Rayto Prolog for reliable logistics solutions. Request a quote or speak with our team about your transportation, warehousing, and supply chain needs.',
    keywords: 'contact logistics company, request logistics quote, transportation quote, warehousing services',
    ogTitle: 'Contact Us | Request a Logistics Quote',
    ogDescription: 'Get in touch with Rayto Prolog for professional logistics solutions.',
    ogUrl: 'https://raytoprolog.com/#/contact',
    canonical: 'https://raytoprolog.com/#/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Contact Rayto Prolog',
      description: 'Contact us for logistics and supply chain solutions',
      url: 'https://raytoprolog.com/#/contact',
    },
  });

  return (
    <>
      <section
        className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#EDEDED] px-6 py-20 text-center text-white lg:min-h-[690px] lg:px-20 lg:py-24"
        style={{
          backgroundImage:
            "url('/images/Forklift_carrying_goods_warehouse_2K_202607101553 1 (1).png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 p-2.5">
            <p className="text-sm font-semibold uppercase leading-7 tracking-[0.08em] text-white">
              Contact Us
            </p>
            <h1 className="max-w-[804px] text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px] lg:leading-[72px]">
              Let&apos;s Move Your Business Forward
            </h1>
          </div>
          <p className="max-w-[780px] text-base leading-7 text-[#EDEDED] sm:text-lg sm:leading-[30px]">
            Every successful partnership starts with a conversation. Whether
            you&apos;re looking for reliable transportation, warehousing, fleet
            management, or a complete logistics solution, our team is ready to
            understand your needs and recommend the right approach for your
            business. Let&apos;s discuss how Rayto Prolog can help keep your
            operations moving efficiently and your customers satisfied.
          </p>
          <div className="py-4">
            <a
              href="#contact-form"
              className="inline-flex min-h-[60px] min-w-[183px] items-center justify-center rounded-[12px] bg-[#11409E] px-7 py-4 text-base font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:bg-[#0b3f93]"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-[680px] sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D44300]">
              Let&apos;s get started
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] sm:text-4xl lg:text-[48px]">
              Tell us what your business needs to move.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5D6572] sm:text-lg sm:leading-8">
              Share a little about your logistics needs and our team will help
              you find a practical solution, built around the way your business
              works.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div
              ref={info.ref}
              className={`reveal reveal-left flex flex-col overflow-hidden rounded-[24px] bg-[#102B5C] p-6 text-white shadow-[0_20px_50px_rgba(16,43,92,0.16)] sm:p-8 lg:p-10 ${
                info.visible ? 'is-visible' : ''
              }`}
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#FF8B55]">
                  <MessageCircle size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Talk to our team
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                  Prefer a direct conversation? Call or message us. We&apos;re
                  ready to learn about your delivery, fleet, or supply chain
                  requirements.
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                  Phone &amp; WhatsApp
                </p>
                <div className="space-y-2">
                  {contactNumbers.map(({ label, number, href, primary, whatsapp }) => (
                    <a
                      key={label}
                      href={href}
                      target={whatsapp ? '_blank' : undefined}
                      rel={whatsapp ? 'noreferrer' : undefined}
                      className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                        primary
                          ? 'border-white/25 bg-white/10 hover:bg-white/15'
                          : 'border-white/10 bg-[#0C244E] hover:border-white/25 hover:bg-white/10'
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block text-[11px] font-medium uppercase tracking-[0.1em] text-blue-200">
                          {whatsapp ? 'WhatsApp' : label}
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-white sm:text-base">
                          {number}
                        </span>
                      </span>
                      {whatsapp ? (
                        <MessageCircle className="h-4 w-4 shrink-0 text-[#FF8B55]" />
                      ) : (
                        <Phone className="h-4 w-4 shrink-0 text-[#FF8B55]" />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#FF8B55]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-blue-200">
                      Address
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:info@raytoprolog.com"
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 text-[#FF8B55]">
                    <Mail size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-[0.1em] text-blue-200">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-white group-hover:text-[#FFB28B]">
                      info@raytoprolog.com
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <form
              id="contact-form"
              ref={form.ref}
              onSubmit={handleSubmit}
              className={`rounded-[24px] border border-[#E7EAF0] bg-white p-6 shadow-[0_20px_50px_rgba(20,35,60,0.08)] transition-all duration-700 sm:p-8 lg:p-10 ${
                form.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="mb-7 border-b border-[#E9ECF1] pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D44300]">
                  Request a quote
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#1A1A1A] sm:text-3xl">
                  How can we help?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#687180]">
                  Complete the form and we&apos;ll be in touch to discuss your
                  requirements.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#303846]">
                  Your name <span className="text-[#D44300]">*</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-2.5 min-h-12 w-full rounded-xl border border-[#DCE1E9] bg-[#FAFBFC] px-4 py-3 text-sm font-normal text-[#1A1A1A] outline-none transition placeholder:text-[#9AA3B1] hover:border-[#AEB9C9] focus:border-[#11409E] focus:bg-white focus:ring-4 focus:ring-[#11409E]/10"
                    placeholder="Enter your name"
                  />
                </label>
                <label className="text-sm font-semibold text-[#303846]">
                  Email address <span className="text-[#D44300]">*</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-2.5 min-h-12 w-full rounded-xl border border-[#DCE1E9] bg-[#FAFBFC] px-4 py-3 text-sm font-normal text-[#1A1A1A] outline-none transition placeholder:text-[#9AA3B1] hover:border-[#AEB9C9] focus:border-[#11409E] focus:bg-white focus:ring-4 focus:ring-[#11409E]/10"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold text-[#303846]">
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  className="mt-2.5 min-h-12 w-full rounded-xl border border-[#DCE1E9] bg-[#FAFBFC] px-4 py-3 text-sm font-normal text-[#1A1A1A] outline-none transition placeholder:text-[#9AA3B1] hover:border-[#AEB9C9] focus:border-[#11409E] focus:bg-white focus:ring-4 focus:ring-[#11409E]/10"
                  placeholder="Your company name"
                />
              </label>
              <label className="mt-5 block text-sm font-semibold text-[#303846]">
                Tell us about your logistics needs{' '}
                <span className="text-[#D44300]">*</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2.5 w-full resize-y rounded-xl border border-[#DCE1E9] bg-[#FAFBFC] px-4 py-3 text-sm font-normal leading-6 text-[#1A1A1A] outline-none transition placeholder:text-[#9AA3B1] hover:border-[#AEB9C9] focus:border-[#11409E] focus:bg-white focus:ring-4 focus:ring-[#11409E]/10"
                  placeholder="What do you need help moving, storing, or managing?"
                />
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#11409E] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(17,64,158,0.18)] transition hover:bg-[#0B3485] disabled:cursor-wait disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send enquiry'}
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <p className="text-xs leading-5 text-[#737D8C]">
                  <span className="text-[#D44300]">*</span> Required fields
                </p>
              </div>
              {submissionError && (
                <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submissionError}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {sent && (
        <div className="fixed inset-x-4 top-5 z-[60] mx-auto flex max-w-md items-start gap-3 rounded-[14px] border border-emerald-200 bg-white p-4 text-slate-900 shadow-[0_18px_45px_rgba(15,28,48,0.18)] animate-fade-in-up sm:left-auto sm:right-6 sm:inset-x-auto sm:top-6">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={22} aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="font-bold">Message sent successfully</p>
            <p className="mt-1 text-sm leading-5 text-slate-600">Thanks for reaching out. Our team will get back to you shortly.</p>
          </div>
          <button type="button" onClick={() => setSent(false)} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" aria-label="Dismiss success message">
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
