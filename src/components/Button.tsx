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
      className={`group inline-flex shrink-0 items-center justify-center gap-1 sm:gap-1.5 rounded-[8px] px-2.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold tracking-[-0.01em] transition-all duration-200 ${
        secondary
          ? 'border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50'
          : 'bg-[#0f4aad] text-white shadow-sm hover:bg-[#0b3f93]'
      }`}
    >
      {children}
      <ArrowRight size={12} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:w-3.5 sm:h-3.5" />
    </button>
  );
}
