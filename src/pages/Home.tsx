import { Truck } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { images, type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const pillars = ['Reliable Delivery', 'Transparent Process', 'Customer Focus', 'Built to Adapt'];

const services = [
  'Transportation & Freight',
  'Fleet Management',
  'Warehousing & Storage',
  'Supply Chain Solutions',
  'E-commerce Logistics',
  'Last-Mile Delivery',
  'Corporate Logistics Support',
];

const reasons = [
  {
    title: 'Reliable Operations',
    desc: 'Consistency is the foundation of everything we do. We work to ensure your goods move safely, efficiently, and on schedule.',
  },
  {
    title: 'Customer-Focused Solutions',
    desc: 'We take time to understand your business before recommending logistics solutions, ensuring every service fits your operational needs.',
  },
  {
    title: 'Professional Partnership',
    desc: 'We believe successful logistics is built on communication, accountability, and long-term relationships—not one-time transactions.',
  },
  {
    title: 'Modern Approach',
    desc: 'By combining operational experience with modern logistics practices, we help businesses improve efficiency and reduce unnecessary complexity.',
  },
];

const steps = ['Understand Your Needs', 'Plan the Right Solution', 'Execute With Precision', 'Deliver With Confidence'];

const stepCopy = [
  'We start by understanding your requirements, timelines, destinations, and operational priorities.',
  'We develop a practical logistics approach tailored to your shipment, route, and delivery requirements.',
  'Our team coordinates the movement of your goods while keeping communication clear throughout the process.',
  'Your shipment reaches its destination safely and efficiently, with the support you need from start to finish.',
];

const industries = [
  'Manufacturing',
  'Retail & Distribution',
  'E-commerce',
  'Agriculture',
  'Construction',
  'NGOs & Development Organizations',
  'Renewable Energy',
  'Corporate Organizations',
];

function IconCircle() {
  return (
    <span className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f4aad] text-white">
      <Truck className="h-6 w-6" strokeWidth={2} />
    </span>
  );
}

export function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const about = useReveal<HTMLDivElement>();
  const servicesReveal = useReveal<HTMLDivElement>();
  const why = useReveal<HTMLDivElement>();
  const how = useReveal<HTMLDivElement>();
  const pillarsReveal = useReveal<HTMLDivElement>();
  const industriesReveal = useReveal<HTMLDivElement>();

  useSEO({
    title: 'Rayto Prolog | Logistics & Supply Chain Solutions in Nigeria',
    description: 'Reliable logistics, transportation, warehousing, and supply chain solutions for businesses across Nigeria. Professional fleet management and last-mile delivery services.',
    keywords: 'logistics Nigeria, transportation, warehousing, supply chain, fleet management, freight, last-mile delivery, Rayto Prolog',
    ogTitle: 'Rayto Prolog | Logistics That Keeps Your Business Moving',
    ogDescription: 'Reliable logistics and supply chain solutions for sustainable business growth across Nigeria.',
    ogImage: 'https://raytoprolog.com/og-image.jpg',
    ogUrl: 'https://raytoprolog.com/',
    canonical: 'https://raytoprolog.com/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://raytoprolog.com/',
      'name': 'Rayto Prolog - Home',
      'description': 'Professional logistics and supply chain solutions for businesses in Nigeria',
      'url': 'https://raytoprolog.com/',
      'isPartOf': {
        '@id': 'https://raytoprolog.com/'
      },
      'inLanguage': 'en-NG',
      'primaryImageOfPage': {
        '@type': 'ImageObject',
        'url': 'https://raytoprolog.com/og-image.jpg'
      }
    }
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 animate-fade-in-up text-xs font-bold uppercase tracking-wider text-[#e74608] [animation-delay:100ms]">
              Trusted Logistics &amp; Supply Chain Partner
            </p>
            <h1 className="animate-fade-in-up text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl [animation-delay:200ms]">
              Logistics That Keeps
              <br />
              Your Business Moving.
            </h1>
            <p className="mt-6 max-w-lg animate-fade-in-up text-base leading-8 text-slate-600 [animation-delay:400ms]">
              Dependable transportation, warehousing, fleet management, and supply chain solutions that help
              businesses across Nigeria operate with confidence.
            </p>
            <div className="mt-10 flex animate-fade-in-up flex-wrap gap-4 [animation-delay:600ms]">
              <Button onClick={() => onNavigate('contact')}>Request Quote</Button>
              <Button secondary onClick={() => onNavigate('services')}>
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="relative h-96 w-full sm:h-[440px] lg:h-96">
            <img
              src={images.truck}
              alt="Rayto Prolog red logistics delivery truck on highway - professional transportation and freight services"
              className="absolute right-0 top-0 h-full w-4/5 rounded-2xl object-cover shadow-xl"
            />
            <img
              src={images.loading}
              alt="Warehouse worker using forklift to load and organize logistics packages for supply chain management"
              className="absolute bottom-0 left-0 h-2/5 w-2/5 rounded-xl border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div
          ref={pillarsReveal.ref}
          className={`mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4 ${
            pillarsReveal.visible ? 'is-visible' : ''
          } reveal`}
        >
          {pillars.map((item, i) => (
            <div
              key={item}
              className={`transition-all duration-700 ${
                pillarsReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <IconCircle />
              <h3 className="text-base font-bold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Committed to safe, timely, and dependable logistics operations.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
        <div ref={about.ref} className={`order-2 reveal reveal-left ${about.visible ? 'is-visible' : ''} lg:order-1`}>
          <Eyebrow>About Rayto Prolog</Eyebrow>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Your Logistics Partner for Sustainable Business Growth
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Running a successful business requires more than moving goods from one location to another. It requires
            a logistics partner who understands deadlines, operational efficiency, customer expectations, and the
            importance of consistency.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Rayto Prolog Ltd was established to provide businesses with reliable logistics and transportation
            solutions that simplify operations and support long-term growth. Through professional service, strategic
            planning, and customer-focused execution, we help businesses move with confidence every day.
          </p>
          <div className="mt-8">
            <Button onClick={() => onNavigate('about')}>Learn More About Us →</Button>
          </div>
        </div>
        <img
          className="order-1 h-96 w-full rounded-2xl object-cover shadow-lg transition-all duration-700 lg:order-2"
          src={images.loading}
          alt="Professional warehouse workers organizing logistics packages and managing supply chain operations"
          style={{
            transform: about.visible ? 'translateX(0)' : 'translateX(32px)',
            opacity: about.visible ? 1 : 0,
          }}
        />
      </section>

      {/* Services grid */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Complete Logistics
            <br />
            Solutions Under One Partner
          </h2>
          <div
            ref={servicesReveal.ref}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {services.map((service, i) => (
              <div
                key={service}
                className={`w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-72 ${
                  servicesReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <IconCircle />
                <h3 className="text-base font-bold text-slate-900">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Committed to safe, timely, and dependable logistics operations.
                </p>
                <button onClick={() => onNavigate('services')} className="mt-6 text-xs font-bold text-[#e74608] transition hover:text-[#d63f04]">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button onClick={() => onNavigate('services')}>View All Services →</Button>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div ref={why.ref} className={`reveal ${why.visible ? 'is-visible' : ''}`}>
          <Eyebrow>Why choose rayto</Eyebrow>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Why Businesses
            <br />
            Choose Rayto Prolog
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Businesses don&apos;t simply need transportation. They need confidence that every shipment, every
            delivery, and every logistics operation will be handled professionally from start to finish. That&apos;s
            exactly what we deliver.
          </p>
          <img
            src={images.highway}
            alt="Multiple logistics trucks traveling on highway - Rayto Prolog professional transportation and freight services"
            className="mt-10 h-64 w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-xl bg-slate-50 p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-md ${
                why.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="text-2xl font-bold text-[#e74608]">0{i + 1}</span>
              <h3 className="mt-4 text-base font-bold leading-tight text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-slate-50 px-6 py-24 text-center">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          We Keep Logistics
          <br />
          Simple.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          From the first conversation to final delivery, our process is designed to keep your operations clear,
          efficient, and under control.
        </p>
        <div ref={how.ref} className="relative mx-auto mt-16 grid max-w-6xl gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-[42px] hidden h-px bg-slate-300 lg:block" />
          {steps.map((item, i) => (
            <div
              key={item}
              className={`relative transition-all duration-700 ${how.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f4aad] text-sm font-bold text-white">
                0{i + 1}
              </span>
              <h3 className="text-base font-bold text-slate-900">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stepCopy[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Supporting Businesses Across Multiple Industries
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Rayto Prolog proudly provides logistics solutions for businesses operating in diverse sectors across
              Nigeria.
            </p>
          </div>
          <div>
            <div ref={industriesReveal.ref} className="grid grid-cols-2 gap-x-12 gap-y-10">
              {industries.map((item, i) => (
                <div
                  key={item}
                  className={`transition-all duration-700 ${
                    industriesReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <IconCircle />
                  <h3 className="text-base font-bold text-slate-900">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Committed to safe, timely, and dependable logistics operations.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button onClick={() => onNavigate('industries')}>Explore Industries →</Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}