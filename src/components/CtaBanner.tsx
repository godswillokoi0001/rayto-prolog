import { Eyebrow } from './Eyebrow';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

export function CtaBanner({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[10px] py-[10px] lg:min-h-[671px]">
      <div
        className="relative flex min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-transparent px-6 py-16 text-center text-white lg:min-h-[651px] lg:rounded-[48px]"
        style={{
          backgroundImage: 'url(/images/Warehouse_staff_moving_goods_for…_202607191205.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div ref={ref} className={`relative mx-auto max-w-[708px] ${visible ? 'is-visible' : ''} reveal`}>
          <Eyebrow className="text-white">Ready to move?</Eyebrow>
          <h2 className="mx-auto max-w-[688px] text-[clamp(2.5rem,3.9vw,3.5rem)] font-bold leading-[1.29] tracking-[-0.04em] text-white">
            Ready for a Logistics
            <br />
            Partner You Can Trust?
          </h2>
          <p className="mx-auto mt-6 max-w-[688px] text-lg leading-[27px] text-white">
            Every successful delivery starts with the right logistics partner.
            Whether you need transportation, fleet management, warehousing, or
            complete supply chain support, Rayto Prolog is ready to help your
            business operate more efficiently and deliver with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[60px] min-w-[171px] items-center justify-center rounded-[12px] bg-[#d44300] px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#bd3b00]"
            >
              Request Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[60px] min-w-[200px] items-center justify-center rounded-[12px] border-[1.5px] border-white px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
