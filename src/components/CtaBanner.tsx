import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { images, type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

export function CtaBanner({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative mx-2 overflow-hidden rounded-[24px] bg-[#102b5c] px-6 py-16 text-center text-white sm:mx-6 lg:mx-auto lg:max-w-[1320px]"
      style={{
        backgroundImage: `linear-gradient(rgba(5,20,40,.68),rgba(5,20,40,.72)),url(${images.warehouse})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto max-w-2xl ${visible ? 'is-visible' : ''} reveal`}
      >
        <Eyebrow>Ready to move?</Eyebrow>
        <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
          Ready for a Logistics
          <br />
          Partner You Can Trust?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-white/80">
          Every successful partnership starts with the right logistics partner. Whether you need transportation,
          warehousing, or supply chain support, Rayto Prolog is ready to help your business operate more efficiently.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={() => onNavigate('contact')}>Request Quote</Button>
          <Button secondary onClick={() => onNavigate('contact')}>
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
