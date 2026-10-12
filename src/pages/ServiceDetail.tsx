import { ArrowRight } from "lucide-react";
import type { Page } from "@/shared/constants";
import { services } from "@/shared/services";
import { useSEO } from "@/shared/useSEO";

const serviceImage =
  "/images/Three_trucks_parked_warehouse_su…_202607101545 1.png";

export function ServiceDetail({
  slug,
  onNavigate,
}: {
  slug: string;
  onNavigate: (page: Page) => void;
}) {
  const service = services.find(({ id }) => id === slug);

  useSEO({
    title: service
      ? `${service.title} | Rayto Prolog`
      : "Logistics Services | Rayto Prolog",
    description:
      service?.description ??
      "Explore logistics solutions from Rayto Prolog.",
    keywords: service
      ? `${service.title.toLowerCase()}, logistics, Rayto Prolog`
      : "logistics services, Rayto Prolog",
    ogTitle: service ? `${service.title} | Rayto Prolog` : "Our Services",
    ogDescription: service?.description ?? "Explore our logistics services.",
    ogUrl: `https://raytoprolog.com/#/services/${slug}`,
    canonical: `https://raytoprolog.com/#/services/${slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service?.title ?? "Logistics Services",
      description: service?.description ?? "Logistics services from Rayto Prolog",
      provider: {
        "@type": "Organization",
        name: "Rayto Prolog",
      },
    },
  });

  if (!service) return null;

  const imageOnLeft = service.id !== "supply-chain-solutions";

  return (
    <>
      <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
          <img
            src={serviceImage}
            alt={`Rayto Prolog freight trucks for ${service.title.toLowerCase()}`}
            className={`h-[420px] w-full rounded-3xl object-cover shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:h-[520px] lg:h-[658px] ${
              imageOnLeft ? "lg:order-1" : "lg:order-2"
            }`}
          />
          <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
            <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] sm:text-5xl lg:text-[64px] lg:leading-[1.25]">
              {service.title}
            </h1>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-3xl lg:mt-5 lg:text-[36px] lg:leading-[1.4]">
              {service.subtitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-[30px]">
              {service.description}
            </p>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-black lg:text-[30px]">
                What We Offer
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-7 text-[#1A1A1A] marker:text-[#D44300] sm:text-lg sm:leading-[30px]">
                {service.offers.map((offer) => (
                  <li key={offer}>{offer}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-black lg:text-[30px]">
                Why Businesses Choose This Service
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-7 text-[#1A1A1A] marker:text-[#D44300] sm:text-lg sm:leading-[30px]">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-black lg:text-[30px]">
                Best For
              </h3>
              <p className="mt-3 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-[30px]">
                {service.bestFor}
              </p>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className="group mt-7 inline-flex min-h-[60px] items-center justify-center gap-2 rounded-[12px] bg-[#11409e] px-7 py-4 text-base font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:bg-[#0b3f93]"
            >
              {service.action}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
