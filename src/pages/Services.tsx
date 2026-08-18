import { ArrowRight, ClipboardList, PackageCheck, Route, ShipWheel, Truck, Warehouse } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';
import { useSEO } from '@/shared/useSEO';

const services: { title: string; text: string; icon: typeof Truck }[] = [
  { title: 'Transportation & Freight', text: 'Dependable road transportation that gets goods where they need to go.', icon: Truck },
  { title: 'Fleet Management', text: 'Better visibility, coordination, and care across your fleet.', icon: ShipWheel },
  { title: 'Warehousing & Storage', text: 'Secure, organized storage that helps your inventory work harder.', icon: Warehouse },
  { title: 'Supply Chain Solutions', text: 'Practical support that connects every step of your operation.', icon: Route },
  { title: 'E-commerce Logistics', text: 'Flexible fulfillment and delivery support for growing brands.', icon: PackageCheck },
  { title: 'Last-Mile Delivery', text: 'Consistent final-mile delivery that keeps customers satisfied.', icon: ClipboardList },
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
      name: 'Our Services',
      description: 'Complete logistics and supply chain solutions',
      url: 'https://raytoprolog.com/#/services',
    },
  });

  return (
    <>
      <section className="bg-[#0c2347] px-5 py-16 text-white md:py-20">
        <div className="container-shell">
          <p className="eyebrow mb-4 text-[#e74608]">What we do</p>
          <h1 className="display-title max-w-[760px] text-white">Complete Logistics Solutions Under One Partner.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200">
            From the road to the warehouse and everywhere in between, we help businesses move with confidence.
          </p>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div ref={grid.ref} className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, text, icon: Icon }, i) => (
            <article
              key={title}
              className={`group rounded-[18px] border border-slate-200 bg-[#f8f9fb] p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${grid.visible || i !== 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#104aaf] text-white">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h2 className="mt-6 text-xl font-extrabold tracking-[-0.04em] text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              <button onClick={() => onNavigate('contact')} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#0d49ae]">
                Discuss your needs <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={12} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
