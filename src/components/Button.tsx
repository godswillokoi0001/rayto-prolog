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
      className={`group inline-flex items-center gap-2 rounded-md px-5 py-3 text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        secondary
          ? 'border border-white/70 text-white hover:bg-white hover:text-[#102b5c]'
          : 'bg-[#0d49ae] text-white hover:bg-[#0a3886]'
      }`}
    >
      {children}
      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
