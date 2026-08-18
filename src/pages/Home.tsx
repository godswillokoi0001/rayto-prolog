import { ArrowRight, Building2, ClipboardCheck, Handshake, Route, Truck } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const pillars = ['Reliable Delivery', 'Transparent Process', 'Customer Focus', 'Built to Adapt'];

const featureCards = [
  { title: 'Customer Focus', copy: 'Flexible solutions built around your priorities and operational realities.', icon: Handshake },
  { title: 'Built to Adapt', copy: 'Scalable logistics support designed to grow with your business.', icon: Route },
];

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
  { title: 'Reliable Operations', desc: 'Consistency is the foundation of everything we do. We work to ensure your goods move safely, efficiently, and on schedule.' },
  { title: 'Customer-Focused Solutions', desc: 'We take time to understand your business before recommending logistics solutions, ensuring every service fits your operational needs.' },
  { title: 'Professional Partnership', desc: 'We believe successful logistics is built on communication, accountability, and long-term relationships—not one-time transactions.' },
  { title: 'Modern Approach', desc: 'By combining operational experience with modern logistics practices, we help businesses improve efficiency and reduce unnecessary complexity.' },
];

const steps = ['Understand Your Needs', 'Plan the Right Solution', 'Execute With Precision', 'Deliver With Confidence'];
const stepCopy = [
  'We start by understanding your requirements, timelines, destinations, and operational priorities.',
  'We develop a practical logistics approach tailored to your shipment, route, and delivery requirements.',
  'Our team coordinates the movement of your goods while keeping communication clear throughout the process.',
  'Your shipment reaches its destination safely and efficiently, with the support you need from start to finish.',
];

const industries = ['Manufacturing', 'Retail & Distribution', 'E-commerce', 'Agriculture', 'Construction', 'NGOs & Development Organizations', 'Renewable Energy', 'Corporate Organizations'];

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
      name: 'Rayto Prolog - Home',
      description: 'Professional logistics and supply chain solutions for businesses in Nigeria',
      url: 'https://raytoprolog.com/',
      isPartOf: { '@id': 'https://raytoprolog.com/' },
      inLanguage: 'en-NG',
      primaryImageOfPage: { '@type': 'ImageObject', url: 'https://raytoprolog.com/og-image.jpg' },
    },
  });

  return (
    <>
      <section className="bg-white px-5 pb-14 pt-10 md:pb-20 md:pt-14 lg:pb-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Trusted Logistics &amp; Supply Chain Partner</p>
            <h1 className="display-title text-slate-900">
              Logistics That Keeps
              <br />
              Your Business Moving.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Dependable transportation, warehousing, fleet management, and supply chain solutions that help
              businesses across Nigeria operate with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => onNavigate('contact')}>Request Quote</Button>
              <Button secondary onClick={() => onNavigate('services')}>Explore Our Services</Button>
            </div>
          </div>

          <div className="relative h-[330px] w-full sm:h-[400px] lg:h-[420px]">
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1.png"
              alt="Rayto Prolog truck fleet parked in a warehouse"
              className="absolute right-0 top-0 h-full w-[78%] rounded-[24px] object-cover shadow-[0_22px_50px_rgba(15,28,48,0.12)]"
            />
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1 (1).png"
              alt="Warehouse staff handling logistics loading operations"
              className="absolute bottom-0 left-0 h-[42%] w-[38%] rounded-[18px] border-[4px] border-white object-cover shadow-[0_18px_30px_rgba(15,28,48,0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef1f3] py-16">
        <div ref={pillarsReveal.ref} className={`container-shell grid gap-10 lg:grid-cols-2 ${pillarsReveal.visible ? 'is-visible' : ''} reveal`}>
          {featureCards.map(({ title, copy, icon: Icon }, i) => (
            <div
              key={title}
              className={`flex min-h-[180px] flex-col items-start justify-start rounded-[18px] bg-transparent p-6 transition-all duration-700 ${pillarsReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="mb-6 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#0f4aad] text-white shadow-[0_8px_18px_rgba(15,74,173,0.24)]">
                <Icon className="h-8 w-8" strokeWidth={2.2} />
              </span>
              <h3 className="text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900">{title}</h3>
              <p className="mt-3 max-w-[560px] text-[1.03rem] leading-[1.75rem] text-slate-700">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div ref={about.ref} className={`reveal reveal-left ${about.visible ? 'is-visible' : ''}`}>
            <Eyebrow>About Rayto Prolog</Eyebrow>
            <h2 className="section-title max-w-[520px]">Your Logistics Partner for Sustainable Business Growth</h2>
            <p className="mt-6 section-body">
              Running a successful business requires more than moving goods from one location to another. It requires
              a logistics partner who understands deadlines, operational efficiency, customer expectations, and the
              importance of consistency.
            </p>
            <p className="mt-4 section-body">
              Rayto Prolog Ltd was established to provide businesses with reliable logistics and transportation
              solutions that simplify operations and support long-term growth.
            </p>
            <div className="mt-8">
              <Button onClick={() => onNavigate('about')}>Learn More About Us</Button>
            </div>
          </div>
          <img
            src="/images/Warehouse_staff_moving_goods_for…_202607191205.png"
            alt="Warehouse operations and goods movement"
            className="h-[360px] w-full rounded-[22px] object-cover shadow-[0_22px_50px_rgba(15,28,48,0.10)]"
            style={{ transform: about.visible ? 'translateX(0)' : 'translateX(24px)', opacity: about.visible ? 1 : 0 }}
          />
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-20">
        <div className="container-shell text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="section-title mx-auto max-w-[760px]">Complete Logistics Solutions Under One Partner</h2>
          <div ref={servicesReveal.ref} className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={service}
                className={`rounded-[18px] border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-700 ${servicesReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                  <Truck className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="text-base font-bold text-slate-900">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Committed to safe, timely, and dependable logistics operations.</p>
                <button onClick={() => onNavigate('services')} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#e74608]">
                  Learn More <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button onClick={() => onNavigate('services')}>View All Services</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div ref={why.ref} className={`reveal ${why.visible ? 'is-visible' : ''}`}>
            <Eyebrow>Why choose rayto</Eyebrow>
            <h2 className="section-title max-w-[430px]">Why Businesses Choose Rayto Prolog</h2>
            <p className="mt-6 section-body max-w-[500px]">
              Businesses don&apos;t simply need transportation. They need confidence that every shipment, every delivery,
              and every logistics operation will be handled professionally from start to finish.
            </p>
            <img
              src="/images/African_professional_overlooking…_2K_202607191200 1.png"
              alt="Logistics operations on the highway"
              className="mt-8 h-[270px] w-full rounded-[22px] object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-[18px] bg-[#f3f4f6] p-6 transition-all duration-700 ${why.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-2xl font-extrabold tracking-[-0.08em] text-[#e74608]">0{i + 1}</span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-20">
        <div className="container-shell text-center">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="section-title mx-auto max-w-[650px]">We Keep Logistics Simple.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            From the first conversation to final delivery, our process is designed to keep your operations clear,
            efficient, and under control.
          </p>
          <div ref={how.ref} className="relative mx-auto mt-14 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-[20px] hidden h-px bg-slate-300 lg:block" />
            {steps.map((item, i) => (
              <div
                key={item}
                className={`relative transition-all duration-700 ${how.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f4aad] text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{stepCopy[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="section-title max-w-[420px]">Supporting Businesses Across Multiple Industries</h2>
            <p className="mt-6 section-body max-w-[430px]">
              Rayto Prolog proudly provides logistics solutions for businesses operating in diverse sectors across Nigeria.
            </p>
          </div>
          <div>
            <div ref={industriesReveal.ref} className="grid gap-5 sm:grid-cols-2">
              {industries.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-[16px] border border-slate-200 bg-[#f8f8f9] p-4 transition-all duration-700 ${industriesReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                    <Building2 className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{item}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Tailored logistics support for your next stage.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button onClick={() => onNavigate('industries')}>Explore Industries</Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}