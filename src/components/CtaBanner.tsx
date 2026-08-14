import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { images, type Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

export function CtaBanner({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative my-16 mx-auto overflow-hidden rounded-3xl bg-[#102b5c] px-8 py-20 text-center text-white lg:max-w-6xl"
      style={{
        backgroundImage: `linear-gradient(rgba(5,20,40,.75),rgba(5,20,40,.75)),url(${images.warehouse})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl ${visible ? 'is-visible' : ''} reveal`}
      >
        <Eyebrow>Ready for a Logistics Partner You Can Trust?</Eyebrow>
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Ready for a Logistics
          <br />
          Partner You Can Trust?
        </h2>
        <p className="mx-auto mb-10 mt-6 max-w-2xl text-base leading-8 text-white/90">
          Every successful partnership starts with the right logistics partner. Whether you need transportation,
          warehousing, or supply chain support, Rayto Prolog is ready to help your business operate more efficiently.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => onNavigate('contact')}>Request Quote</Button>
          <Button secondary onClick={() => onNavigate('contact')}>
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
