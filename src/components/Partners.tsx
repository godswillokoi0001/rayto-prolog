import { Eyebrow } from "./Eyebrow";

export type Partner = {
  name: string;
  logo?: string;
  website?: string;
};

export const partners: Partner[] = [
  { name: "Burn Stoves Nigeria Limited", logo: "/partners/p%20(4).jpg" },
  { name: "Solar Sister", logo: "/partners/p%20(1).jpg" },
  { name: "EOV Logistics", logo: "/partners/p%20(1).png" },
  { name: "FDA Logistics", logo: "/partners/p%20(2).jpg" },
  { name: "Boswells Logistics", logo: "/partners/p%20(2).png" },
  { name: "Libra Circle", logo: "/partners/p%20(3).png" },
  { name: "South Field Communication", logo: "/partners/p%20(1).webp" },
  { name: "Sun King", logo: "/partners/p%20(3).jpg" },
];

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "RP";

export function Partners() {
  const groups = [partners, partners];

  return (
    <section className="bg-[#f3f4f6] px-2 py-8 sm:px-0 md:py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 text-center">
            <Eyebrow>Trusted partnerships</Eyebrow>
            <h2 className="section-title mx-auto max-w-[700px]">
              Some of Our Partners
            </h2>
          </div>

          <div className="partners-marquee">
            <div className="partners-track">
              {groups.map((group, groupIndex) => (
                <div key={groupIndex} className="partners-group">
                  {group.map((partner, index) => {
                    const logoClassName = partner.logo?.endsWith("p%20(4).jpg")
                      ? "mix-blend-screen"
                      : "mix-blend-multiply";
                    const content = partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`h-full w-full object-contain ${logoClassName}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-[12px] border border-slate-200 bg-white px-3 py-2 text-center shadow-[0_8px_20px_rgba(15,28,48,0.04)]">
                        <span className="text-[0.62rem] font-extrabold tracking-[0.16em] text-[#0f4aad] sm:text-[0.7rem]">
                          {getInitials(partner.name)}
                        </span>
                      </div>
                    );

                    const card = (
                      <div
                        key={`${groupIndex}-${partner.name}-${index}`}
                        className="flex h-[110px] w-[190px] shrink-0 items-center justify-center px-4 py-3 sm:h-[120px] sm:w-[220px]"
                      >
                        <div className="flex h-full w-full items-center justify-center overflow-hidden px-3 py-2">
                          {content}
                        </div>
                      </div>
                    );

                    return partner.website ? (
                      <a
                        key={`${groupIndex}-${partner.name}-${index}-link`}
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                        aria-label={`Visit ${partner.name}`}
                      >
                        {card}
                      </a>
                    ) : (
                      <div
                        key={`${groupIndex}-${partner.name}-${index}-static`}
                      >
                        {card}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
