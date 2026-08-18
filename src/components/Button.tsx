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
      className={`group inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-bold tracking-[-0.01em] transition-all duration-200 ${
        secondary
          ? 'border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50'
          : 'bg-[#0f4aad] text-white shadow-sm hover:bg-[#0b3f93]'
      }`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}
