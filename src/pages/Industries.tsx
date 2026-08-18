import { ArrowRight, Building2, Factory, Leaf, ShieldCheck, ShoppingBag, Truck, Warehouse } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const industryEntries = [
  {
    title: 'Manufacturing',
    summary: 'Reliable logistics solutions for raw materials, finished goods, and time-sensitive production cycles.',
    points: ['Inbound material movement', 'Production support', 'On-time dispatch'],
    image: '/images/Forklift_carrying_goods_warehouse_2K_202607101553 4.png',
    icon: Factory,
    reverse: false,
  },
  {
    title: 'Retail & Distribution',
    summary: 'Fast, flexible support for product movement from warehouse to storefront and everywhere in between.',
    points: ['Inventory planning', 'Route coordination', 'Demand-driven delivery'],
    image: '/images/Three_trucks_parked_warehouse_su…_202607101545 1 (5).png',
    icon: ShoppingBag,
    reverse: true,
  },
  {
    title: 'E-Commerce',
    summary: 'Efficient fulfillment and last-mile support that keep your customers satisfied and your operation moving.',
    points: ['Pick-up coordination', 'Parcel dispatch', 'Delivery reliability'],
    image: '/images/Three_trucks_parked_warehouse_su…_202607101545 1 (4).png',
    icon: Truck,
    reverse: false,
  },
  {
    title: 'Agriculture',
    summary: 'Dependable transport and storage support designed for fertilizer, produce, and farm-based supply chains.',
    points: ['Farm gate collection', 'Cold-chain support', 'Consistent rural routing'],
    image: '/images/Three_trucks_parked_warehouse_su…_202607101545 1 (1).png',
    icon: Leaf,
    reverse: true,
  },
  {
    title: 'Construction',
    summary: 'Material and equipment logistics support that keeps projects moving safely and on schedule.',
    points: ['Site delivery', 'Heavy materials', 'Time-critical coordination'],
    image: '/images/Three_trucks_parked_warehouse_su…_202607101545 1 (2).png',
    icon: Warehouse,
    reverse: false,
  },
  {
    title: 'NGOs & Humanitarian Organizations',
    summary: 'Responsive logistics backing for aid programs, emergency operations, and field-based delivery requirements.',
    points: ['Disaster response', 'Cross-border support', 'Last-mile access'],
    image: '/images/Forklift_carrying_goods_warehouse_2K_202607101553 1.png',
    icon: ShieldCheck,
    reverse: true,
  },
  {
    title: 'Renewable Energy',
    summary: 'Movement and supply support for clean energy infrastructure, equipment, and project logistics.',
    points: ['Equipment transport', 'Site coordination', 'Project timing'],
    image: '/images/Three_trucks_parked_warehouse_su…_202607101545 1 (3).png',
    icon: Leaf,
    reverse: false,
  },
  {
    title: 'Corporate Organizations',
    summary: 'Professional logistics operations that keep teams productive, compliant, and prepared for scale.',
    points: ['Fleet coordination', 'Operational planning', 'Business continuity'],
    image: '/images/Warehouse_staff_moving_goods_for…_202607191205.png',
    icon: Building2,
    reverse: true,
  },
];

export function Industries({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const intro = useReveal<HTMLDivElement>();

  useSEO({
    title: 'Industries We Serve | Logistics Solutions for All Sectors',
    description: 'Rayto Prolog provides tailored logistics solutions for manufacturing, retail, e-commerce, agriculture, construction, healthcare, renewable energy, and corporate operations.',
    keywords: 'logistics manufacturing, e-commerce logistics, agriculture logistics, retail distribution, construction logistics, healthcare logistics',
    ogTitle: 'Industries We Serve | Tailored Logistics Solutions',
    ogDescription: 'Discover how Rayto Prolog serves various industries with customized logistics solutions.',
    ogUrl: 'https://raytoprolog.com/#/industries',
    canonical: 'https://raytoprolog.com/#/industries',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Industries We Serve',
      description: 'Tailored logistics solutions for multiple industries',
      url: 'https://raytoprolog.com/#/industries',
    },
  });

  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: 'url(/images/Forklift_carrying_goods_warehouse_2K_202607101553 4.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
        <div className="container-shell relative py-20 md:py-24">
          <p className="eyebrow mb-4 text-[#e74608]">Who we serve</p>
          <h1 className="display-title max-w-[720px] text-white">
            Logistics Built Around Your Industry.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200">
            Every industry moves differently. Our approach adapts to the demands, timelines, and opportunities that
            make your business unique.
          </p>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div ref={intro.ref} className={`reveal reveal-left ${intro.visible ? 'is-visible' : ''}`}>
            <Eyebrow>Supporting businesses across multiple industries</Eyebrow>
            <h2 className="section-title max-w-[420px]">Solutions That Fit the Way You Work</h2>
            <p className="mt-6 section-body max-w-[480px]">
              Whether you are manufacturing products, serving customers online, or managing a growing distribution
              operation, Rayto Prolog brings the planning and reliability to keep your business moving.
            </p>
            <div className="mt-8">
              <Button onClick={() => onNavigate('contact')}>Talk to our team</Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industryEntries.slice(0, 4).map(({ title, summary, icon: Icon }, i) => (
              <div key={title} className="rounded-[18px] border border-slate-200 bg-[#f8f9fb] p-5">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {industryEntries.map(({ title, summary, points, image, icon: Icon, reverse }, index) => (
        <section key={title} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f6]'} py-18 md:py-20`}>
          <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center">
            {reverse ? (
              <>
                <img src={image} alt={title} className="h-[260px] w-full rounded-[22px] object-cover" />
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-[-0.06em] text-slate-900">{title}</h3>
                  <p className="text-base leading-8 text-slate-600">{summary}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    {points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#e74608]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4aad]">
                    We help with this <ArrowRight size={14} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f4aad] text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-[-0.06em] text-slate-900">{title}</h3>
                  <p className="text-base leading-8 text-slate-600">{summary}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    {points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#e74608]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4aad]">
                    We help with this <ArrowRight size={14} />
                  </button>
                </div>
                <img src={image} alt={title} className="h-[260px] w-full rounded-[22px] object-cover" />
              </>
            )}
          </div>
        </section>
      ))}

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}

