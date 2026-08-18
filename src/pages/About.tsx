import { Check } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const missionVision: [string, string][] = [
  ['Our Mission', 'Our mission is to provide reliable, efficient, and customer-focused logistics solutions that empower businesses to operate more effectively.'],
  ['Our Vision', 'We envision a future where businesses across Nigeria and beyond can rely on Rayto Prolog for their logistics needs.'],
];

const values = [
  ['01', 'Reliability', 'Our clients trust us because every delivery, shipment, and operation is handled with care and consistency.'],
  ['02', 'Integrity', 'We build trust through honest communication, accountability, and doing what we say we will do.'],
  ['03', 'Excellence', 'We strive to deliver quality service that reduces risk, improves flow, and supports long-term growth.'],
  ['04', 'Innovation', 'We adapt to changing needs with practical solutions and modern systems that improve operational efficiency.'],
  ['05', 'Customer Partnership', 'We work alongside our clients as a true business partner, focused on shared success.'],
];

export function About({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const intro = useReveal<HTMLDivElement>();
  const story = useReveal<HTMLDivElement>();
  const storyImg = useReveal<HTMLImageElement>();
  const introImg = useReveal<HTMLImageElement>();
  const mv = useReveal<HTMLDivElement>();

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
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div ref={intro.ref} className={`reveal reveal-left ${intro.visible ? 'is-visible' : ''}`}>
            <Eyebrow>About Rayto Prolog</Eyebrow>
            <h1 className="display-title max-w-[560px] text-slate-900">
              More Than a Logistics
              <br />
              Company. A Partner in
              <br />
              Your Growth.
            </h1>
            <p className="mt-6 max-w-[540px] text-base leading-8 text-slate-600">
              Behind every successful business is a logistics partner that keeps operations moving, customers satisfied,
              and promises fulfilled. At Rayto Prolog, we go beyond transporting goods. We partner with businesses to
              provide dependable logistics solutions that improve efficiency, reduce operational challenges, and support
              sustainable growth.
            </p>
            <p className="mt-4 max-w-[540px] text-base leading-8 text-slate-600">
              From transportation and fleet management to warehousing and supply chain support, our focus is simple:
              helping businesses move forward with confidence.
            </p>
            <div className="mt-8">
              <Button onClick={() => onNavigate('contact')}>Get in Touch</Button>
            </div>
          </div>
          <img
            ref={introImg.ref}
            src="/images/Warehouse_staff_moving_goods_for…_202607191205.png"
            alt="Warehouse team moving goods in Rayto Prolog logistics operations"
            className="h-[380px] w-full rounded-[22px] object-cover shadow-[0_22px_50px_rgba(15,28,48,0.10)]"
            style={{ transform: introImg.visible ? 'translateX(0)' : 'translateX(24px)', opacity: introImg.visible ? 1 : 0 }}
          />
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-18 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <img
            ref={storyImg.ref}
            src="/images/Three_trucks_parked_warehouse_su…_202607101545 1 (3).png"
            alt="Highway logistics and transport operations"
            className="h-[330px] w-full rounded-[22px] object-cover"
            style={{ transform: storyImg.visible ? 'translateX(0)' : 'translateX(-24px)', opacity: storyImg.visible ? 1 : 0 }}
          />
          <div ref={story.ref} className={`reveal reveal-right ${story.visible ? 'is-visible' : ''}`}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="section-title max-w-[450px]">
              Built to Solve Real Logistics Challenges
            </h2>
            <p className="mt-6 section-body">
              Every business depends on movement. Raw materials must arrive on time. Products must reach customers
              safely. Operations must continue without unnecessary delays. Rayto Prolog exists to make that movement
              easier.
            </p>
            <p className="mt-4 section-body">
              That is why we built our services around reliability, accountability, and practical solutions that work in
              the real world.
            </p>
            <div className="mt-8">
              <Button onClick={() => onNavigate('contact')}>Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell text-center">
          <Eyebrow>Our mission &amp; vision</Eyebrow>
          <h2 className="section-title mx-auto max-w-[650px]">What Drives Rayto Prolog Forward</h2>
          <div ref={mv.ref} className="mt-12 grid gap-5 text-left md:grid-cols-2">
            {missionVision.map(([title, text], i) => (
              <div
                key={title}
                className={`rounded-[18px] border border-slate-200 bg-[#f8f9fb] p-7 transition-all duration-700 ${mv.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#104aaf] text-white">
                  <Check size={16} />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell text-center">
          <Eyebrow>Our core values</Eyebrow>
          <h2 className="section-title mx-auto max-w-[700px]">The Principles That Drive Everything We Do</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {values.map(([number, title, desc], i) => (
              <div key={title} className="rounded-[18px] border border-slate-200 bg-[#f8f9fb] p-5 text-left transition-all duration-300 hover:-translate-y-1">
                <span className="text-2xl font-extrabold tracking-[-0.08em] text-[#e74608]">{number}</span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                <div className="mt-4 h-px w-full bg-slate-200" />
                <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-[#0f4aad]">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}

