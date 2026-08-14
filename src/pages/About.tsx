import { Check } from 'lucide-react';
import { Button } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Eyebrow } from '@/components/Eyebrow';
import { images, type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

const missionVision: [string, string][] = [
  ['Our Mission', 'Our mission is to provide reliable, efficient, and customer-focused logistics solutions that empower businesses to operate more effectively.'],
  ['Our Vision', 'We envision a future where businesses across Nigeria and beyond can rely on Rayto Prolog for their logistics needs.'],
];

export function About({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const intro = useReveal<HTMLDivElement>();
  const story = useReveal<HTMLDivElement>();
  const storyImg = useReveal<HTMLImageElement>();
  const introImg = useReveal<HTMLImageElement>();
  const mv = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="mx-auto max-w-[1160px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div ref={intro.ref} className={`reveal reveal-left ${intro.visible ? 'is-visible' : ''}`}>
            <Eyebrow>About Rayto Prolog</Eyebrow>
            <h1 className="text-5xl font-extrabold leading-[1.03] tracking-[-0.06em] sm:text-6xl">
              More Than a Logistics Company. A Partner in Your Growth.
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              Behind every successful business is a logistics partner that keeps operations moving, customers satisfied,
              and promises fulfilled. At Rayto Prolog, we go beyond transporting goods. We partner with businesses to
              provide dependable logistics solutions that improve efficiency, reduce operational challenges, and support
              sustainable growth.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              From transportation and fleet management to warehousing and supply chain support, our focus is simple:
              helping businesses move forward with confidence.
            </p>
            <Button onClick={() => onNavigate('contact')}>Get in Touch</Button>
          </div>
          <img
            ref={introImg.ref}
            src={images.warehouse}
            alt="Warehouse team"
            className="h-[420px] w-full rounded-xl object-cover shadow-lg transition-all duration-700"
            style={{ transform: introImg.visible ? 'translateX(0)' : 'translateX(32px)', opacity: introImg.visible ? 1 : 0 }}
          />
        </div>
      </section>

      <section className="bg-[#f1f2f3] px-6 py-20">
        <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <img
            ref={storyImg.ref}
            src={images.highway}
            alt="Aerial highway"
            className="h-[410px] w-full rounded-xl object-cover transition-all duration-700"
            style={{ transform: storyImg.visible ? 'translateX(0)' : 'translateX(-32px)', opacity: storyImg.visible ? 1 : 0 }}
          />
          <div ref={story.ref} className={`reveal reveal-right ${story.visible ? 'is-visible' : ''}`}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
              Built to Solve Real Logistics Challenges
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              Every business depends on movement. Raw materials must arrive on time. Products must reach customers
              safely. Operations must continue without unnecessary delays. Rayto Prolog exists to make that movement
              easier.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              That is why we built our services around reliability, accountability, and practical solutions that work in
              the real world.
            </p>
            <Button onClick={() => onNavigate('contact')}>Get in Touch</Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1160px] text-center">
          <Eyebrow>Our mission & vision</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            What Drives Rayto
            <br />
            Prolog Forward
          </h2>
          <div ref={mv.ref} className="mt-12 grid gap-5 text-left md:grid-cols-2">
            {missionVision.map(([title, text], i) => (
              <div
                key={title}
                className={`rounded-xl border border-slate-300 p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
                  mv.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#104aaf] text-white">
                  <Check size={16} />
                </div>
                <h3 className="text-sm font-extrabold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
