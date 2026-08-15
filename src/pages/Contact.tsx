import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

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
      'name': 'Contact Rayto Prolog',
      'description': 'Contact us for logistics and supply chain solutions',
      'url': 'https://raytoprolog.com/#/contact'
    }
  });

  return (
    <>
      <section className="relative flex min-h-[570px] items-center justify-center overflow-hidden px-6 py-20 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: 'url(/images/Warehouse_staff_moving_goods_for…_202607191205 (1) 1.png)' }}
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 animate-fade-in-up text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#e74608]">
            Contact us
          </p>
          <h1 className="animate-fade-in-up text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] sm:text-7xl [animation-delay:150ms]">
            Let's Move Your
            <br />
            Business Forward
          </h1>
          <p className="mx-auto mt-7 max-w-2xl animate-fade-in-up text-base leading-7 text-white/85 [animation-delay:300ms]">
            Every successful partnership starts with a conversation. Whether you're looking for reliable transportation,
            warehousing, fleet management, or a complete logistics solution, our team is ready to understand your needs.
          </p>
          <a
            href="#contact-form"
            className="mt-9 inline-flex animate-fade-in-up rounded-md bg-[#0d49ae] px-6 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a3886] hover:shadow-lg [animation-delay:450ms]"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <section id="contact-form" className="mx-auto grid max-w-[1160px] gap-14 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div ref={info.ref} className={`reveal reveal-left ${info.visible ? 'is-visible' : ''}`}>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Let's talk about
            <br />
            your logistics.
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            Tell us what you need and a member of our team will get back to you with the right next step.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <p className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
              <MapPin className="text-[#e74608]" size={18} /> Lagos, Nigeria
            </p>
            <p className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
              <Phone className="text-[#e74608]" size={18} /> +234 800 000 0000
            </p>
            <p className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
              <Mail className="text-[#e74608]" size={18} /> hello@raytoprolog.com
            </p>
          </div>
        </div>

        <form
          ref={form.ref}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className={`rounded-xl bg-[#f1f2f3] p-6 transition-all duration-700 sm:p-9 ${
            form.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="group text-xs font-bold">
              Your name
              <input
                required
                className="mt-2 w-full rounded-md border-0 bg-white px-4 py-3 text-sm font-normal outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-2 focus:ring-[#0d49ae] group-focus-within:translate-x-1"
                placeholder="Enter your name"
              />
            </label>
            <label className="group text-xs font-bold">
              Email address
              <input
                required
                type="email"
                className="mt-2 w-full rounded-md border-0 bg-white px-4 py-3 text-sm font-normal outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-2 focus:ring-[#0d49ae] group-focus-within:translate-x-1"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="group mt-5 block text-xs font-bold">
            Company
            <input
              className="mt-2 w-full rounded-md border-0 bg-white px-4 py-3 text-sm font-normal outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-2 focus:ring-[#0d49ae] group-focus-within:translate-x-1"
              placeholder="Your company name"
            />
          </label>
          <label className="group mt-5 block text-xs font-bold">
            How can we help?
            <textarea
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-md border-0 bg-white px-4 py-3 text-sm font-normal outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-2 focus:ring-[#0d49ae] group-focus-within:translate-x-1"
              placeholder="Tell us a little about what you need"
            />
          </label>
          <button className="mt-6 rounded-md bg-[#e74608] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c93804] hover:shadow-lg">
            {sent ? 'Message sent' : 'Send message'}
          </button>
          {sent && (
            <p className="mt-3 animate-fade-in text-sm font-medium text-green-700">
              Thanks — our team will be in touch shortly.
            </p>
          )}
        </form>
      </section>

      <CtaBanner onNavigate={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
}
