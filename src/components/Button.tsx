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
      className={`group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 ${
        secondary
          ? 'border border-white/60 text-white hover:bg-white hover:text-[#102b5c]'
          : 'bg-[#0d49ae] text-white hover:bg-[#0a3886]'
      }`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
