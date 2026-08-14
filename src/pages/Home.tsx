import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { images, type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

const services = [
  'Transportation & Freight',
  'Fleet Management',
  'Warehousing & Storage',
  'Supply Chain Solutions',
];

const pillars = ['Reliable Delivery', 'Transparent Process', 'Customer Focus', 'Built to Adapt'];

const reasons = ['Reliability', 'Customer-Focused Solutions', 'Professional', 'Modern Approach'];

const steps = ['Understand Your Needs', 'Plan the Right Solution', 'Execute With Precision', 'Deliver With Confidence'];

export function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const about = useReveal<HTMLDivElement>();
  const servicesReveal = useReveal<HTMLDivElement>();
  const why = useReveal<HTMLDivElement>();
  const how = useReveal<HTMLDivElement>();
  const pillarsReveal = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#09285d] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 animate-slow-zoom"
          style={{ backgroundImage: `url(${images.truck})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d4b] via-[#0a2d67]/85 to-transparent" />
        <div className="relative mx-auto flex min-h-[650px] max-w-[1240px] items-center px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 animate-fade-in-up text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#e74608] [animation-delay:100ms]">
              Reliable logistics. Real results.
            </p>
            <h1
              className="max-w-2xl animate-fade-in-up text-5xl font-extrabold leading-[1.03] tracking-[-0.06em] sm:text-7xl [animation-delay:200ms]"
            >
              Logistics That Keeps
              <br />
              <span className="text-[#ff5417]">Your Business</span> Moving.
            </h1>
            <p className="mt-7 max-w-lg animate-fade-in-up text-base leading-7 text-white/80 [animation-delay:400ms]">
              Dependable transportation, warehousing, and freight solutions that help your business keep moving.
              Wherever you need to go, Rayto Prolog is ready to move with you.
            </p>
            <div className="mt-9 flex animate-fade-in-up flex-wrap gap-3 [animation-delay:600ms]">
              <Button onClick={() => onNavigate('contact')}>Request Quote</Button>
              <Button secondary onClick={() => onNavigate('about')}>
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-slate-200 bg-[#f0f1f2] px-6 py-10">
        <div
          ref={pillarsReveal.ref}
          className={`mx-auto grid max-w-[1160px] gap-8 sm:grid-cols-2 lg:grid-cols-4 ${
            pillarsReveal.visible ? 'is-visible' : ''
          } reveal`}
        >
          {pillars.map((item, i) => (
            <div
              key={item}
              className={`flex gap-3 transition-all duration-700 ${
                pillarsReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#104aaf] text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1 text-xs font-bold">{item}</h3>
                <p className="text-[11px] leading-5 text-slate-500">Consistent, reliable solutions that keep operations moving.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto grid max-w-[1160px] gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
        <div ref={about.ref} className={`order-2 reveal reveal-left ${about.visible ? 'is-visible' : ''} lg:order-1`}>
          <Eyebrow>About Rayto Prolog</Eyebrow>
          <h2 className="max-w-lg text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-5xl">
            Your Logistics Partner for Sustainable Business Growth
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
            Rayto Prolog provides reliable transportation, warehousing, and supply chain solutions designed to help your
            business operate better, scale smarter, and grow with confidence.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            From first mile to last mile, we connect every part of your operation with dependable service and practical
            expertise.
          </p>
          <Button onClick={() => onNavigate('about')}>Learn More About Us</Button>
        </div>
        <img
          className="order-1 h-[360px] w-full rounded-xl object-cover shadow-lg transition-all duration-700 lg:order-2"
          src={images.loading}
          alt="Workers loading packages"
          style={{
            transform: about.visible ? 'translateX(0)' : 'translateX(32px)',
            opacity: about.visible ? 1 : 0,
          }}
        />
      </section>

      {/* Services grid */}
      <section className="bg-[#f1f2f3] px-6 py-20">
        <div className="mx-auto max-w-[1160px] text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Complete Logistics
            <br />
            Solutions Under One Partner
          </h2>
          <div
            ref={servicesReveal.ref}
            className="mt-12 grid gap-4 text-left md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, i) => (
              <div
                key={service}
                className={`rounded-lg bg-white p-6 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                  servicesReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#124aaa] text-xs font-bold text-white">
                  0{i + 1}
                </span>
                <h3 className="mb-2 text-sm font-extrabold">{service}</h3>
                <p className="text-xs leading-5 text-slate-500">
                  Flexible, dependable support tailored to the way your business works.
                </p>
                <button onClick={() => onNavigate('services')} className="mt-4 text-[11px] font-bold text-[#0d49ae]">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto grid max-w-[1160px] gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div ref={why.ref} className={`reveal ${why.visible ? 'is-visible' : ''}`}>
          <Eyebrow>Why choose rayto</Eyebrow>
          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
            Why Businesses
            <br />
            Choose Rayto Prolog
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600">
            We combine reliable service with thoughtful solutions, so your logistics never becomes the thing holding your
            business back.
          </p>
          <img
            src={images.highway}
            alt="Trucks on a highway"
            className="mt-8 h-52 w-full rounded-xl object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 self-end">
          {reasons.map((item, i) => (
            <div
              key={item}
              className={`rounded-lg bg-[#f1f2f3] p-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                why.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="text-xs font-extrabold text-[#e74608]">0{i + 1}</span>
              <h3 className="mt-3 text-sm font-extrabold">{item}</h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-500">Solutions built around your goals and delivered with care.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#f1f2f3] px-6 py-20 text-center">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
          We Keep Logistics
          <br />
          Simple.
        </h2>
        <div ref={how.ref} className="mx-auto mt-12 grid max-w-[1160px] gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div
              key={item}
              className={`transition-all duration-700 ${how.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#114bae] text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-sm font-extrabold">{item}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Clear communication and dependable execution from start to finish.
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
