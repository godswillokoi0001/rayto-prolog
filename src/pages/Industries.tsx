import { Check } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { images, type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

const industries = [
  'Manufacturing',
  'Retail & Distribution',
  'E-commerce',
  'Agriculture',
  'Construction',
  'Healthcare',
  'Renewable Energy',
  'Corporate Operations',
];

export function Industries({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const intro = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="relative overflow-hidden bg-[#102b5c] px-6 py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-slow-zoom"
          style={{ backgroundImage: `url(${images.shelves})` }}
        />
        <div className="relative mx-auto max-w-[1160px]">
          <p className="mb-4 animate-fade-in-up text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#e74608]">
            Who we serve
          </p>
          <h1 className="max-w-3xl animate-fade-in-up text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl [animation-delay:150ms]">
            Logistics Built Around Your Industry.
          </h1>
          <p className="mt-7 max-w-xl animate-fade-in-up text-base leading-7 text-white/75 [animation-delay:300ms]">
            Every industry moves differently. Our approach adapts to the demands, timelines, and opportunities that make
            your business unique.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1160px] gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div ref={intro.ref} className={`reveal reveal-left ${intro.visible ? 'is-visible' : ''}`}>
          <Eyebrow>Supporting businesses across multiple industries</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">Solutions That Fit the Way You Work</h2>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            Whether you are manufacturing products, serving customers online, or managing a growing distribution
            operation, Rayto Prolog brings the planning and reliability to keep your business moving.
          </p>
          <Button onClick={() => onNavigate('contact')}>Talk to our team</Button>
        </div>
        <div ref={grid.ref} className="grid grid-cols-2 gap-4">
          {industries.map((item, i) => (
            <div
              key={item}
              className={`group rounded-lg bg-[#f1f2f3] p-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                grid.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#104aaf] text-white transition-transform duration-300 group-hover:scale-110">
                <Check size={14} />
              </span>
              <h3 className="text-sm font-bold">{item}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">Focused logistics support for your next stage.</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
