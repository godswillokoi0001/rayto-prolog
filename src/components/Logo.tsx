export function Logo({ light = false }: { light?: boolean }) {
  const src = light ? '/logo/Rayto_prolog_logo_2_new 1.png' : '/logo/Rayto_prolog_logo_1_new 1.png';

  return (
    <img
      src={src}
      alt="Rayto Prolog logo"
      className="h-7 sm:h-8 w-auto object-contain"
    />
  );
}
