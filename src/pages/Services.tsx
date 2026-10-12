import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { type Page } from "@/shared/constants";
import { services } from "@/shared/services";
import { useSEO } from "@/shared/useSEO";

const heroImage =
  "/images/Forklift_carrying_goods_warehouse_2K_202607101553 1.png";
const introImage =
  "/images/Shipping_container_lifted_by_crane_202607191226 (1) 1.png";

export function Services({
  onNavigate,
}: {
  onNavigate: (page: Page) => void;
}) {
  useSEO({
    title: "Logistics Services | Transportation, Warehousing & Supply Chain",
    description:
      "Complete logistics solutions - transportation, fleet management, warehousing, supply chain, e-commerce logistics, and last-mile delivery services in Nigeria.",
    keywords:
      "logistics services, transportation, fleet management, warehousing, supply chain solutions, last-mile delivery, e-commerce logistics",
    ogTitle: "Our Services | Complete Logistics Solutions",
    ogDescription:
      "Explore our comprehensive logistics services - from transportation to supply chain management.",
    ogUrl: "https://raytoprolog.com/#/services",
    canonical: "https://raytoprolog.com/#/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Our Services",
      description: "Complete logistics and supply chain solutions",
      url: "https://raytoprolog.com/#/services",
    },
  });

  const viewAllServices = () => {
    document
      .getElementById("services-overview")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#1a1a1a] px-6 py-20 text-center text-white lg:min-h-[693px] lg:px-20 lg:py-24"
        style={{
          backgroundImage: `url("${heroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex max-w-[900px] flex-col items-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-white">
            Our Services
          </p>
          <h1 className="max-w-[780px] text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.29]">
            Logistics Solutions Built Around Your Business
          </h1>
          <p className="mt-6 max-w-[780px] text-base leading-7 text-[#EDEDED] sm:text-lg sm:leading-[30px]">
            Every business has unique logistics challenges. Whether you&apos;re
            transporting goods across the country, managing a fleet, storing
            inventory, or coordinating complex supply chains, Rayto Prolog
            delivers practical solutions designed to keep your operations
            running smoothly. Our services are built on reliability,
            efficiency, and a commitment to helping your business move forward
            with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex min-h-[60px] w-full items-center justify-center rounded-[12px] bg-[#11409e] px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#0b3f93] sm:w-auto"
            >
              Request Quote
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex min-h-[60px] w-full items-center justify-center rounded-[12px] border-[1.5px] border-white px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Speak With Our Team
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-14">
          <div className="max-w-[522px]">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl lg:text-[52px] lg:leading-[1.38]">
              One Partner. Complete Logistics Solutions.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5D5D5D] sm:text-lg sm:leading-[30px]">
              Managing logistics shouldn&apos;t require coordinating multiple
              service providers. At Rayto Prolog, we bring transportation,
              fleet management, warehousing, supply chain coordination, and
              last-mile delivery together under one trusted partner. By
              understanding your operations and tailoring our services to your
              needs, we help reduce delays, improve efficiency, and simplify the
              way your business moves.
            </p>
          </div>
          <img
            src={introImage}
            alt="Logistics team coordinating a shipping container in a warehouse"
            className="h-[420px] w-full rounded-3xl object-cover shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:h-[560px] lg:h-[700px]"
          />
        </div>
      </section>

      <section
        id="services-overview"
        className="scroll-mt-24 bg-[#EDEDED] px-6 py-16 sm:px-10 lg:px-10 lg:py-20"
      >
        <div className="mx-auto flex max-w-[1320px] flex-col items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#D44300]">
            Our Services
          </p>
          <h2 className="mt-3 max-w-[780px] text-center text-3xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl lg:text-[56px] lg:leading-[1.29]">
            Complete Logistics Solutions Under One Partner
          </h2>

          <div className="mt-12 flex w-full flex-wrap justify-center gap-6 lg:mt-16 lg:gap-8">
            {services.map(({ id, title, summary, icon: Icon }) => (
              <article
                key={id}
                className="flex min-h-[280px] w-full max-w-[301px] flex-col items-center rounded-[11px] border border-[#D8D8D8] bg-white p-6 text-center sm:min-h-[300px] sm:items-start sm:p-8 sm:text-left lg:min-h-[335px]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#0051FF] to-[#000F4D] text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-black">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#333333]">
                  {summary}
                </p>
                <button
                  onClick={() => onNavigate(`services/${id}`)}
                  className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-[#D44300]"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </article>
            ))}
          </div>

          <button
            onClick={viewAllServices}
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#11409e] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b3f93]"
          >
            View All Services
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
