import { ArrowRight, Check, Quote } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { Partners } from '@/components/Partners';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const companyValues = [
  'Reliability',
  'Integrity',
  'Professionalism',
  'Safety',
  'Efficiency',
  'Innovation',
  'Emotional Intelligence',
];

const leadership = [
  {
    name: 'Fatimat Ismail Ajibola',
    role: 'Director of Finance',
    location: '',
    image: '/images/team/IMG-20260827-WA0009.jpg',
  },
  {
    name: 'GODWIN MAJIYEBO OLOKUN',
    role: 'Operation Manager',
    location: 'Raytoprolog Ltd, Kano',
    image: '/images/team/IMG-20260826-WA0010.jpg',
  },
  {
    name: 'Ewoma David Tobi',
    role: 'Operation Manager',
    location: 'Raytoprolog Ltd, Abuja Office',
    image: '/images/team/IMG-20260826-WA0009.jpg',
  },
  {
    name: 'Amb. Otu Ubi Dennis',
    role: 'FICMC',
    location: 'HR/Financial Consultant\nRaytoprolog Ltd',
    image: '/images/African_professional_overlooking…_2K_202607191200 1.png',
  },
];

export function About({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const intro = useReveal<HTMLDivElement>();
  const company = useReveal<HTMLDivElement>();
  const chairman = useReveal<HTMLDivElement>();
  const leadershipReveal = useReveal<HTMLDivElement>();
  const valuesReveal = useReveal<HTMLDivElement>();

  useSEO({
    title: 'About Rayto Prolog | Logistics Partner in Nigeria',
    description: 'Learn about Rayto Prolog - a trusted logistics and supply chain partner dedicated to helping businesses across Nigeria operate with confidence and efficiency.',
    keywords: 'about Rayto Prolog, logistics company Nigeria, supply chain partner, transportation partner',
    ogTitle: 'About Rayto Prolog | Your Logistics Partner for Growth',
    ogDescription: 'Discover how Rayto Prolog delivers reliable logistics and supply chain solutions for sustainable business growth.',
    ogImage: 'https://raytoprolog.com/og-image.jpg',
    ogUrl: 'https://raytoprolog.com/#/about',
    canonical: 'https://raytoprolog.com/#/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Rayto Prolog',
      description: 'Learn about Rayto Prolog - a trusted logistics and supply chain partner',
      url: 'https://raytoprolog.com/#/about',
    },
  });

  return (
    <>
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_1fr] lg:items-center">
          <div ref={intro.ref} className={`reveal reveal-left ${intro.visible ? 'is-visible' : ''}`}>
            <Eyebrow>About Rayto Prolog</Eyebrow>
            <h1 className="display-title max-w-[560px] text-slate-900">
              Nigerian Logistics
              <br />
              Built on Trust,
              <br />
              Speed and Reliability.
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-600">
              Raytoprolog connects people, products and opportunities through dependable transportation and logistics
              solutions that keep businesses moving across Nigeria.
            </p>
            <p className="mt-4 max-w-[560px] text-base leading-8 text-slate-600">
              From fleet deployment and cargo movement to last-mile delivery and field operations support, we provide
              practical service that helps our clients deliver on time and with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => onNavigate('contact')}>Request Quote</Button>
              <Button secondary onClick={() => onNavigate('services')}>Our Services</Button>
            </div>
          </div>

          <div className="h-[380px] w-full overflow-hidden rounded-[24px] shadow-[0_22px_50px_rgba(15,28,48,0.12)] sm:h-[430px] lg:h-[500px]">
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1 (2).png"
              alt="Raytoprolog truck fleet in a warehouse compound"
              className="h-full w-full rounded-[24px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-18 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="h-[330px] w-full overflow-hidden rounded-[22px] shadow-[0_22px_50px_rgba(15,28,48,0.10)] sm:h-[380px] lg:h-[440px]">
            <img
              src="/images/Forklift_carrying_goods_warehouse_2K_202607101553 1.png"
              alt="Warehouse forklift operations and cargo handling"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div ref={company.ref} className={`reveal reveal-right ${company.visible ? 'is-visible' : ''}`}>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="section-title max-w-[440px]">Connecting Businesses to Reliable Movement</h2>
            <p className="mt-6 section-body">
              Raytoprolog Ltd is a Nigerian logistics and transportation company committed to supporting businesses with
              dependable movement of goods, people, and resources across the country.
            </p>
            <p className="mt-4 section-body">
              We deliver solutions in transportation, fleet deployment, last-mile delivery, cargo movement, field
              operations support, and customised logistics strategies built around the realities of our clients and
              partners. Our approach is designed to reduce delays, strengthen supply chain performance, and help
              organisations operate with confidence across Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <div ref={chairman.ref} className={`mx-auto max-w-[1200px] rounded-[26px] border border-slate-200 bg-[#f8f9fb] p-6 shadow-[0_18px_40px_rgba(15,28,48,0.04)] sm:p-8 lg:p-10 ${chairman.visible ? 'is-visible' : ''} reveal`}>
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <Eyebrow className="mb-0">Chairman’s Welcome Address</Eyebrow>
              <span className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#0f4aad] text-white sm:flex">
                <Quote className="h-4 w-4" />
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
              <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-3 shadow-sm">
                <div className="h-[340px] w-full overflow-hidden rounded-[16px] sm:h-[360px] lg:h-[420px]">
                  <img
                    src="/images/team/IMG-20260826-WA0008.jpg"
                    alt="Chairman Abdulfatai Muyideen Akinwumi"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <div className="space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    <span className="block font-extrabold text-slate-900">Welcome to Raytoprolog Ltd.</span>
                  </p>
                  <p>
                    It is my great pleasure to welcome you to Raytoprolog Ltd, a proudly Nigerian logistics and
                    transportation company committed to moving people, products, and possibilities with reliability,
                    safety, efficiency, and professionalism.
                  </p>
                  <p>
                    At Raytoprolog, we understand that logistics is more than moving goods from one location to another.
                    It is about connecting businesses to opportunities, supporting communities, and ensuring that our
                    clients can deliver on their promises.
                  </p>
                  <p>
                    Our services cover fleet deployment, transportation, last-mile delivery, cargo movement, field
                    operations support, and customised logistics solutions across Nigeria. We continually invest in
                    people, processes, and operational capacity to provide dependable solutions that meet the changing
                    needs of our clients and partners.
                  </p>
                  <p>
                    Our vision is simple: to become a trusted and leading logistics partner, recognised for reliability,
                    integrity, innovation, and exceptional service delivery.
                  </p>
                  <p>
                    As we grow, we remain committed to building lasting partnerships and creating value for our clients,
                    employees, communities, and stakeholders.
                  </p>
                  <p>
                    On behalf of the Board and Management of Raytoprolog Ltd, I invite you to explore our services and
                    discover how we can move your business forward.
                  </p>
                  <p>
                    Welcome to Raytoprolog Ltd — where reliability moves business forward.
                  </p>
                </div>

                <div className="mt-10 border-t border-slate-200 pt-6">
                  <p className="text-base font-extrabold tracking-[-0.02em] text-slate-900">Abdulfatai MUYIDEEN Akinwumi</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#e74608]">MCILSCM</p>
                  <p className="mt-4 text-base font-semibold text-slate-700">Chairman and CEO</p>
                  <p className="text-base text-slate-700">Raytoprolog Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-20">
        <div className="container-shell text-center">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="section-title mx-auto max-w-[700px]">Our Leadership</h2>
          <div ref={leadershipReveal.ref} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {leadership.map(({ name, role, location, image }, i) => (
              <div
                key={name}
                className={`overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm transition-all duration-700 ${leadershipReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-64 w-full overflow-hidden sm:h-72">
                  <img src={image} alt={name} className="h-full w-full object-cover object-center" />
                </div>
                <div className="p-5 text-left">
                  <h3 className="text-lg font-extrabold leading-tight tracking-[-0.03em] text-slate-900">{name}</h3>
                  <p className="mt-3 text-sm font-semibold text-[#0f4aad]">{role}</p>
                  {location && (
                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <div ref={valuesReveal.ref} className={`mx-auto max-w-[900px] rounded-[22px] border border-slate-200 bg-[#f8f9fb] p-6 sm:p-8 ${valuesReveal.visible ? 'is-visible' : ''} reveal`}>
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="section-title max-w-[500px]">Reliable, Professional, Human-Centred Logistics</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {companyValues.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-left">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                    <Check size={14} />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <section className="bg-[#0f172a] py-20 text-white">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/5 p-8 text-center shadow-[0_18px_40px_rgba(15,28,48,0.16)] sm:p-10">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#f7a35c]">
              <Quote className="h-5 w-5" />
            </div>
            <p className="text-lg font-medium leading-8 text-white/90 sm:text-xl sm:leading-9">
              “You may not control every situation, but you control your response.
              <br />
              Never let anger make decisions for you. Pause and ask:
              <br />
              Will this bring me peace?
              <br />
              Will I regret it later?
              <br />
              Will it solve the problem?
              <br />
              If the answer is no, stay calm and choose silence.
              <br />
              Master your emotions, protect your peace, and never let a temporary storm destroy a permanent blessing.
              <br />
              Good Morning To The Emotionally Intelligent You.”
            </p>
          </div>
        </div>
      </section>

      <div className="container-shell py-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-5">
          <Button onClick={() => onNavigate('contact')}>Request a Logistics Consultation</Button>
          <button onClick={() => onNavigate('services')} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#0f4aad] transition hover:text-[#0b3f93]">
            Explore Our Solutions <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}

