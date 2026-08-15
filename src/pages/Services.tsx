import { ArrowRight } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const services: [string, string][] = [
  ['Transportation & Freight', 'Dependable road transportation that gets goods where they need to go.'],
  ['Fleet Management', 'Better visibility, coordination, and care across your fleet.'],
  ['Warehousing & Storage', 'Secure, organized storage that helps your inventory work harder.'],
  ['Supply Chain Solutions', 'Practical support that connects every step of your operation.'],
  ['E-commerce Logistics', 'Flexible fulfillment and delivery support for growing brands.'],
  ['Last-Mile Delivery', 'Consistent final-mile delivery that keeps customers satisfied.'],
];

export function Services({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const grid = useReveal<HTMLDivElement>();

  useSEO({
    title: 'Logistics Services | Transportation, Warehousing & Supply Chain',
    description: 'Complete logistics solutions - transportation, fleet management, warehousing, supply chain, e-commerce logistics, and last-mile delivery services in Nigeria.',
    keywords: 'logistics services, transportation, fleet management, warehousing, supply chain solutions, last-mile delivery, e-commerce logistics',
    ogTitle: 'Our Services | Complete Logistics Solutions',
    ogDescription: 'Explore our comprehensive logistics services - from transportation to supply chain management.',
    ogUrl: 'https://raytoprolog.com/#/services',
    canonical: 'https://raytoprolog.com/#/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Our Services',
      'description': 'Complete logistics and supply chain solutions',
      'url': 'https://raytoprolog.com/#/services'
    }
  });

  return (
    <>
      <section className="relative px-6 py-24 text-white bg-cover bg-center" style={{backgroundImage: 'url("images/Forklift_carrying_goods_warehouse_2K_202607101553 1.png")'}}>
       
        <div className="relative mx-auto max-w-[1160px]">
          <p className="mb-4 animate-fade-in-up text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#e74608]">
            What we do
          </p>
          <h1 className="max-w-3xl animate-fade-in-up text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl [animation-delay:150ms]">
            Complete Logistics Solutions Under One Partner.
          </h1>
          <p className="mt-7 max-w-xl animate-fade-in-up text-base leading-7 text-white/75 [animation-delay:300ms]">
            From the road to the warehouse and everywhere in between, we help businesses move with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1160px] gap-5 px-6 py-20 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, text], i) => (
          <article
            key={title}
            ref={i === 0 ? grid.ref : undefined}
            className={`group rounded-xl border border-slate-200 p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
              grid.visible || i !== 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#104aaf] text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
              0{i + 1}
            </span>
            <h2 className="mt-7 text-xl font-extrabold tracking-tight">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            <button onClick={() => onNavigate('contact')} className="mt-6 text-xs font-bold text-[#0d49ae]">
              Discuss your needs <ArrowRight className="ml-1 inline transition-transform duration-300 group-hover:translate-x-1" size={12} />
            </button>
          </article>
        ))}
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
