import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
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
  const info = useReveal<HTMLDivElement>();
  const form = useReveal<HTMLFormElement>();

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
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-5 py-16 text-center text-white md:min-h-[520px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/images/Warehouse_staff_moving_goods_for…_202607191205.png)' }} />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-[#e74608]">Contact us</p>
          <h1 className="display-title text-white">
            Let&apos;s Move Your
            <br />
            Business Forward
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-200">
            Every successful partnership starts with a conversation. Whether you&apos;re looking for reliable transportation,
            warehousing, fleet management, or a complete logistics solution, our team is ready to understand your needs.
          </p>
          <a href="#contact-form" className="mt-8 inline-flex rounded-[10px] bg-[#0f4aad] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b3f93]">
            Request a Quote
          </a>
        </div>
      </section>

      <section id="contact-form" className="container-shell grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div ref={info.ref} className={`reveal reveal-left ${info.visible ? 'is-visible' : ''}`}>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 className="section-title max-w-[420px]">
            Let&apos;s talk about your logistics.
          </h2>
          <p className="mt-6 section-body max-w-[420px]">
            Tell us what you need and a member of our team will get back to you with the right next step.
          </p>

          <div className="mt-8 rounded-[22px] border border-slate-200 bg-[#f8f9fb] p-4 shadow-[0_14px_32px_rgba(15,28,48,0.04)] sm:p-5">
            <div className="flex items-center gap-3 pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                <Phone className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e74608]">Contact information</p>
                <h3 className="mt-1 text-lg font-extrabold tracking-[-0.03em] text-slate-900">Speak with our team</h3>
              </div>
            </div>

            <div className="space-y-3">
              {contactNumbers.map(({ label, number, href, primary, whatsapp }) => (
                <a
                  key={label}
                  href={href}
                  target={whatsapp ? '_blank' : undefined}
                  rel={whatsapp ? 'noreferrer' : undefined}
                  className={`flex items-center justify-between gap-3 rounded-[14px] border px-4 py-3 text-left transition hover:border-[#0f4aad] hover:bg-white ${primary ? 'border-[#0f4aad] bg-[#0f4aad] text-white shadow-[0_10px_24px_rgba(15,74,173,0.15)]' : 'border-slate-200 bg-white text-slate-800'}`}
                >
                  <div className="min-w-0">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.12em] ${primary ? 'text-white/80' : 'text-slate-500'}`}>
                      {label}
                    </p>
                    <p className="mt-1 text-base font-bold tracking-[-0.03em] sm:text-lg">{number}</p>
                  </div>
                  {whatsapp ? (
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${primary ? 'bg-white/10 text-white' : 'bg-[#ecfdf5] text-[#0f4aad]'}`}>
                      <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  ) : (
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${primary ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Phone className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-5 text-sm text-slate-700">
            <p className="flex items-center gap-3"><MapPin className="text-[#e74608]" size={18} /> Abuja, Nigeria</p>
            <p className="flex items-center gap-3"><Mail className="text-[#e74608]" size={18} /> info@raytoprolog.com</p>
          </div>
        </div>

        <form
          ref={form.ref}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className={`rounded-[20px] bg-[#f3f4f6] p-6 transition-all duration-700 sm:p-8 ${form.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-bold uppercase tracking-[0.08em] text-slate-700">
              Your name
              <input required className="mt-2 w-full rounded-[10px] border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none ring-0 transition focus:border-[#0f4aad]" placeholder="Enter your name" />
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.08em] text-slate-700">
              Email address
              <input required type="email" className="mt-2 w-full rounded-[10px] border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none ring-0 transition focus:border-[#0f4aad]" placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-5 block text-xs font-bold uppercase tracking-[0.08em] text-slate-700">
            Company
            <input className="mt-2 w-full rounded-[10px] border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none ring-0 transition focus:border-[#0f4aad]" placeholder="Your company name" />
          </label>
          <label className="mt-5 block text-xs font-bold uppercase tracking-[0.08em] text-slate-700">
            How can we help?
            <textarea required rows={5} className="mt-2 w-full resize-none rounded-[10px] border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none ring-0 transition focus:border-[#0f4aad]" placeholder="Tell us a little about what you need" />
          </label>
          <button className="mt-6 rounded-[10px] bg-[#e74608] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d63f04]">
            {sent ? 'Message sent' : 'Send message'}
          </button>
          {sent && <p className="mt-3 text-sm font-medium text-green-700">Thanks — our team will be in touch shortly.</p>}
        </form>
      </section>

      <CtaBanner onNavigate={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
}

