import { ArrowRight } from 'lucide-react';

export function Button({
  children,
  onClick,
  secondary = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-[10px] px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-[-0.01em] transition-all duration-200 ${
        secondary
          ? 'border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50'
          : 'bg-[#0f4aad] text-white shadow-sm hover:bg-[#0b3f93]'
      }`}
    >
      {children}
      <ArrowRight size={14} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:w-4 sm:h-4" />
    </button>
  );
}
