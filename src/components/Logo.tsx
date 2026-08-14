export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 font-extrabold tracking-[-0.06em] text-[20px] ${light ? 'text-white' : 'text-[#0b3b91]'}`}>
      <span className="relative inline-block h-7 w-8 text-[#e74608]" aria-hidden="true">
        <span className="absolute left-0 top-1 h-2 w-7 -skew-x-[28deg] bg-current" />
        <span className="absolute left-1 top-3 h-2 w-6 skew-x-[28deg] bg-current" />
        <span className="absolute left-2 top-5 h-2 w-5 -skew-x-[28deg] bg-current" />
      </span>
      Rayto Prolog<span className="self-start text-[7px] tracking-normal">™</span>
    </div>
  );
}
