import {
  ArrowRight,
  Truck,
} from "lucide-react";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Eyebrow } from "@/components/Eyebrow";
import { Partners } from "@/components/Partners";
import type { Page } from "@/shared/constants";
import { useReveal } from "@/shared/useReveal";
import { useSEO } from "@/shared/useSEO";

const trustFeatures = [
  {
    title: "Reliable Delivery",
    copy: "Move goods safely and on schedule with dependable transportation.",
  },
  {
    title: "Transparent Process",
    copy: "Get clear communication and updates throughout every delivery.",
  },
  {
    title: "Customer-Focused Support",
    copy: "Logistics solutions shaped around your needs and priorities.",
  },
  {
    title: "Operational Excellence",
    copy: "Experienced teams coordinate every stage with care.",
  },
];

const services = [
  "Reliable Delivery",
  "Reliable Delivery",
  "Reliable Delivery",
  "Reliable Delivery",
  "Reliable Delivery",
  "Reliable Delivery",
  "Reliable Delivery",
];

const reasons = [
  {
    title: "Reliable Operations",
    desc: "Consistency is the foundation of everything we do. We work to ensure your goods move safely, efficiently, and on schedule.",
  },
  {
    title: "Customer-Focused Solutions",
    desc: "We take time to understand your business before recommending logistics solutions, ensuring every service fits your operational needs.",
  },
  {
    title: "Professional Partnership",
    desc: "We believe successful logistics is built on communication, accountability, and long-term relationships—not one-time transactions.",
  },
  {
    title: "Modern Approach",
    desc: "By combining operational experience with modern logistics practices, we help businesses improve efficiency and reduce unnecessary complexity.",
  },
];

const steps = [
  "Understand Your Needs",
  "Plan the Right Solution",
  "Execute With Precision",
  "Deliver With Confidence",
];
const stepCopy = [
  "We start by understanding your requirements, timelines, destinations, and operational priorities.",
  "We develop a practical logistics approach tailored to your shipment, route, and delivery requirements.",
  "Our team coordinates the movement of your goods while keeping communication clear throughout the process.",
  "Your shipment reaches its destination safely and efficiently, with the support you need from start to finish.",
];

const industries = [
  "Manufacturing",
  "Retail & Distribution",
  "E-commerce",
  "Agriculture",
  "Construction",
  "NGOs & Development Organizations",
  "Renewable Energy",
  "Corporate Organizations",
];

export function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const about = useReveal<HTMLDivElement>();
  const servicesReveal = useReveal<HTMLDivElement>();
  const why = useReveal<HTMLDivElement>();
  const how = useReveal<HTMLDivElement>();
  const industriesReveal = useReveal<HTMLDivElement>();

  useSEO({
    title: "Rayto Prolog | Logistics & Supply Chain Solutions in Nigeria",
    description:
      "Reliable logistics, transportation, warehousing, and supply chain solutions for businesses across Nigeria. Professional fleet management and last-mile delivery services.",
    keywords:
      "logistics Nigeria, transportation, warehousing, supply chain, fleet management, freight, last-mile delivery, Rayto Prolog",
    ogTitle: "Rayto Prolog | Logistics That Keeps Your Business Moving",
    ogDescription:
      "Reliable logistics and supply chain solutions for sustainable business growth across Nigeria.",
    ogImage: "https://raytoprolog.com/og-image.jpg",
    ogUrl: "https://raytoprolog.com/",
    canonical: "https://raytoprolog.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://raytoprolog.com/",
      name: "Rayto Prolog - Home",
      description:
        "Professional logistics and supply chain solutions for businesses in Nigeria",
      url: "https://raytoprolog.com/",
      isPartOf: { "@id": "https://raytoprolog.com/" },
      inLanguage: "en-NG",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://raytoprolog.com/og-image.jpg",
      },
    },
  });

  return (
    <>
      <section className="bg-white px-5 pb-12 pt-8 md:px-10 lg:min-h-[760px] lg:px-20 lg:pb-16 lg:pt-14">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,1.31fr)_minmax(0,1fr)] lg:gap-[clamp(2rem,5.55vw,5rem)]">
          <div className="max-w-[702px]">
            <p className="eyebrow mb-0 text-xm leading-7 tracking-[0.08em] text-[#d44300]">
              Trusted Logistics &amp; Supply Chain Partner
            </p>
            <h1 className="mt-2 text-[1.75rem] font-bold leading-[1.25] tracking-[-0.04em] text-[#1a1a1a] sm:text-[2.75rem] lg:text-[clamp(2.5rem,4.45vw,4rem)]">
              Logistics That Keeps
              <br />
              Your Business Moving.
            </h1>
            <p className="mt-6 max-w-[560px] text-base font-medium leading-7 text-[#1a1a1a] sm:text-lg sm:leading-[30px]">
              Dependable transportation, warehousing, fleet management, and
              supply chain solutions that help businesses across Nigeria operate
              with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:gap-8">
              <Button large onClick={() => onNavigate("contact")}>
                Request Quote
              </Button>
              <Button large secondary onClick={() => onNavigate("services")}>
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[480px] lg:h-[480px] xl:h-[616px]">
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1.png"
              alt="Red Rayto Prolog truck on the road"
              className="absolute inset-0 h-full w-full rounded-[24px] object-cover shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
            />
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1 (1).png"
              alt="Forklift moving goods in a warehouse"
              className="absolute bottom-0 left-0 hidden h-[28%] w-[34%] rounded-[24px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:block lg:bottom-[13%] lg:left-[20px] lg:h-[170px] lg:w-[172px] xl:bottom-auto xl:left-[-146px] xl:top-[374px]"
            />
          </div>
        </div>
      </section>

      <Partners />

      <section className="border-y border-slate-200 bg-[#ededed] px-5 py-14 lg:min-h-[420px] lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustFeatures.map(({ title, copy }) => (
            <div
              key={title}
              className="flex min-h-[224px] flex-col items-start justify-center rounded-[11px] p-6 lg:p-8"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#0051ff] to-[#000f4d] text-white">
                <Truck className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="text-xl font-semibold leading-7 text-black">{title}</h3>
              <p className="mt-2 max-w-[235px] text-base leading-6 text-black">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 lg:min-h-[966px] lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20">
          <div
            ref={about.ref}
            className={`reveal reveal-left ${about.visible ? "is-visible" : ""}`}
          >
            <Eyebrow>About Rayto Prolog</Eyebrow>
            <h2 className="max-w-[620px] text-[1.75rem] font-bold leading-[1.29] tracking-[-0.04em] text-black sm:text-[2.25rem] lg:text-[clamp(2.25rem,3.9vw,3.5rem)]">
              Your Logistics Partner for Sustainable Business Growth
            </h2>
            <p className="mt-6 max-w-[632px] text-base leading-7 text-[#5d5d5d] sm:text-lg sm:leading-[30px]">
              Running a successful business requires more than moving goods from
              one location to another. It requires a logistics partner who
              understands deadlines, operational efficiency, customer
              expectations, and the importance of consistency.
            </p>
            <p className="mt-4 max-w-[632px] text-base leading-7 text-[#5d5d5d] sm:text-lg sm:leading-[30px]">
              Rayto Prolog Ltd was established to provide businesses with
              reliable logistics and transportation solutions that simplify
              operations and support long-term growth. Through professional
              service, strategic planning, and customer-focused execution, we
              help businesses move with confidence every day.
            </p>
            <div className="mt-8">
              <Button large onClick={() => onNavigate("about")}>
                Learn More About Us
              </Button>
            </div>
          </div>
          <img
            src="/images/Shipping_container_lifted_by_crane_202607191226 (1) 1.png"
            alt="Shipping container being lifted by a crane in a warehouse"
            className="h-[420px] w-full rounded-[24px] object-cover shadow-[0_16px_48px_rgba(0,0,0,0.1)] lg:h-[520px]"
            style={{
              transform: about.visible ? "translateX(0)" : "translateX(24px)",
              opacity: about.visible ? 1 : 0,
            }}
          />
        </div>
      </section>

      <section className="bg-[#ededed] px-5 py-20 md:px-10 lg:min-h-[1450px] lg:px-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="mx-auto max-w-[779px] text-[1.9rem] font-bold leading-[1.29] tracking-[-0.04em] text-black sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.9vw,3.5rem)]">
            Complete Logistics Solutions Under One Partner
          </h2>
          <div
            ref={servicesReveal.ref}
            className="mt-14 flex w-full flex-wrap justify-center gap-8"
          >
            {services.map((service, i) => (
              <div
                key={`${service}-${i}`}
                className={`min-h-[335px] w-full rounded-[11px] border border-[#d8d8d8] bg-white p-6 text-left transition-all duration-700 md:w-[calc(50%-16px)] xl:w-[calc(25%-24px)] lg:p-8 ${servicesReveal.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#0051ff] to-[#000f4d] text-white">
                  <Truck className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="text-xl font-semibold leading-8 text-black">
                  {service}
                </h3>
                <p className="mt-2 text-base leading-6 text-black">
                  Committed to safe, timely, and dependable logistics
                  operations.
                </p>
                <button
                  onClick={() => onNavigate("services")}
                  className="mt-5 inline-flex items-center gap-2 text-base font-medium text-[#d44300]"
                >
                  Learn More <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button large onClick={() => onNavigate("services")}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 lg:min-h-[1092px] lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <div
            ref={why.ref}
            className={`reveal ${why.visible ? "is-visible" : ""}`}
          >
            <Eyebrow>Why choose rayto</Eyebrow>
            <h2 className="max-w-[534px] text-[1.9rem] font-bold leading-[1.38] tracking-[-0.04em] text-black sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.62vw,3.25rem)]">
              Why Businesses Choose Rayto Prolog
            </h2>
            <p className="mt-6 max-w-[522px] text-base leading-7 text-[#5d5d5d] sm:text-lg sm:leading-[30px]">
              Businesses don&apos;t simply need transportation. They need
              confidence that every shipment, every delivery, and every
              logistics operation will be handled professionally from start to
              finish. That&apos;s exactly what we deliver.
            </p>
            <img
              src="/images/African_professional_overlooking…_2K_202607191200 1.png"
              alt="Logistics operations on the highway"
              className="mt-8 h-[300px] w-full max-w-[540px] rounded-[32px] object-cover lg:h-[376px]"
            />
          </div>

          <div className="mx-auto grid w-full max-w-[480px] gap-6 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <div
                key={item.title}
                className={`min-h-[300px] rounded-[16px] border border-[#d8d8d8] bg-[#ededed] p-6 transition-all duration-700 lg:min-h-[358px] ${why.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-4xl font-semibold leading-[44px] text-[#d44300]">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-black">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ededed] px-5 py-20 md:px-10 lg:min-h-[740px] lg:px-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mx-auto max-w-[688px] text-[1.9rem] font-bold leading-[1.29] tracking-[-0.04em] text-black sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.9vw,3.5rem)]">
            We Keep Logistics Simple.
          </h2>
          <p className="mx-auto mt-4 max-w-[688px] text-base leading-7 text-[#5d5d5d] sm:text-lg sm:leading-[30px]">
            From the first conversation to final delivery, our process is
            designed to keep your operations clear, efficient, and under
            control.
          </p>
          <div
            ref={how.ref}
            className="relative mx-auto mt-12 grid w-full gap-8 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {steps.map((item, i) => (
              <div
                key={item}
                className={`relative transition-all duration-700 after:absolute after:left-6 after:top-6 after:hidden after:h-0 after:w-[calc(100%+2rem)] after:border-t-2 after:border-[#09255c]/40 lg:after:block last:lg:after:hidden ${how.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#11409e] text-xl font-semibold text-white">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-semibold leading-8 text-black">{item}</h3>
                <p className="mt-3 text-base leading-6 text-black">
                  {stepCopy[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 lg:min-h-[1378px] lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-[clamp(2rem,5.55vw,5rem)]">
          <div>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="max-w-[534px] text-[1.9rem] font-bold leading-[1.38] tracking-[-0.04em] text-black sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.62vw,3.25rem)]">
              Supporting Businesses Across Multiple Industries
            </h2>
            <p className="mt-6 max-w-[522px] text-base leading-7 text-[#5d5d5d] sm:text-lg sm:leading-[30px]">
              Rayto Prolog proudly provides logistics solutions for businesses
              operating in diverse sectors across Nigeria.
            </p>
          </div>
          <div>
            <div
              ref={industriesReveal.ref}
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2"
            >
              {industries.map((item, i) => (
                <div
                  key={item}
                  className={`flex flex-col items-start transition-all duration-700 ${industriesReveal.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#0051ff] to-[#000f4d] text-white">
                    <Truck className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-8 text-black">
                      {item}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-black">
                      Committed to safe, timely, and dependable logistics operations.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button large onClick={() => onNavigate("industries")}>
                Explore Industries
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
