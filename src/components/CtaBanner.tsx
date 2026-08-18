import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

export function CtaBanner({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto my-16 max-w-[1200px] overflow-hidden rounded-[28px] px-4 md:px-0">
      <div
        className="relative overflow-hidden rounded-[28px] bg-[#0f172a] px-6 py-16 text-center text-white md:px-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.62), rgba(15, 23, 42, 0.62)), url(/images/Warehouse_staff_moving_goods_for…_202607191205.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div ref={ref} className={`relative mx-auto max-w-3xl ${visible ? 'is-visible' : ''} reveal`}>
          <Eyebrow>Ready for a Logistics Partner You Can Trust?</Eyebrow>
          <h2 className="display-title text-white">
            Ready for a Logistics
            <br />
            Partner You Can Trust?
          </h2>
          <p className="mx-auto mb-8 mt-6 max-w-2xl text-base leading-8 text-white/85">
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
      </div>
    </section>
  );
}
