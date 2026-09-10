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
      className={`group inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-[8px] px-4 py-3 text-xs font-bold tracking-[-0.01em] transition-all duration-200 sm:px-5 sm:py-3.5 sm:text-sm ${
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
