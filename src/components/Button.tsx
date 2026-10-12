import { ArrowRight } from 'lucide-react';

export function Button({
  children,
  onClick,
  secondary = false,
  large = false,
  compactOnMobile = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  large?: boolean;
  compactOnMobile?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex shrink-0 items-center justify-center gap-1.5 font-bold tracking-[-0.01em] transition-all duration-200 ${
        large
          ? `min-h-[60px] w-full rounded-[12px] px-7 py-4 text-base sm:w-auto ${
              compactOnMobile
                ? 'min-h-[44px] min-w-0 flex-1 whitespace-nowrap px-1 py-3 text-xs sm:min-h-[60px] sm:flex-none sm:px-7 sm:py-4 sm:text-base'
                : ''
            }`
          : 'min-h-11 rounded-[8px] px-4 py-3 text-xs sm:px-5 sm:py-3.5 sm:text-sm'
      } ${
        secondary
          ? `border bg-white text-slate-900 hover:bg-slate-50 ${
              large
                ? 'border-[#1a1a1a] hover:border-[#1a1a1a]'
                : 'border-slate-200 hover:border-slate-300'
            }`
          : 'bg-[#11409e] text-white shadow-sm hover:bg-[#0b3f93]'
      }`}
    >
      {children}
      {!large && (
        <ArrowRight
          size={12}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:w-3.5 sm:h-3.5"
        />
      )}
    </button>
  );
}
