import { Eyebrow } from './Eyebrow';
import type { Page } from '@/shared/constants';
import { useReveal } from '@/shared/useReveal';

export function CtaBanner({
  onNavigate,
  eyebrow = 'Ready to move?',
  title,
  description,
}: {
  onNavigate: (page: Page) => void;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
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
          <Eyebrow className="text-white">{eyebrow}</Eyebrow>
          <h2 className="mx-auto max-w-[688px] text-[1.9rem] font-bold leading-[1.29] tracking-[-0.04em] text-white sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.9vw,3.5rem)]">
            {title ?? (
              <>
                Ready for a Logistics
                <br />
                Partner You Can Trust?
              </>
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-[688px] text-base leading-7 text-white sm:text-lg sm:leading-[27px]">
            {description ??
              'Every successful delivery starts with the right logistics partner. Whether you need transportation, fleet management, warehousing, or complete supply chain support, Rayto Prolog is ready to help your business operate more efficiently and deliver with confidence.'}
          </p>
          <div className="mt-5 flex w-full flex-row justify-center gap-2 sm:mt-8 sm:w-auto sm:flex-wrap sm:gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[44px] min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-[12px] bg-[#d44300] px-1 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-[#bd3b00] sm:min-h-[60px] sm:flex-none sm:px-7 sm:py-4 sm:text-base"
            >
              Request Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[44px] min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-[12px] border-[1.5px] border-white px-1 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-white/10 sm:min-h-[60px] sm:flex-none sm:px-7 sm:py-4 sm:text-base"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
