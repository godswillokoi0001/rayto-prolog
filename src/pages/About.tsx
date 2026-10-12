import { Eye, Quote, Target } from "lucide-react";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Eyebrow } from "@/components/Eyebrow";
import { Partners } from "@/components/Partners";
import type { Page } from "@/shared/constants";
import { useReveal } from "@/shared/useReveal";
import { useSEO } from "@/shared/useSEO";

const coreValues = [
  {
    title: "Reliability",
    description:
      "Our clients trust us because we understand that every delivery represents a commitment. We work hard to ensure every shipment is handled with care, professionalism, and consistency.",
  },
  {
    title: "Integrity",
    description:
      "We believe strong partnerships are built on honesty, transparency, and accountability. We communicate clearly and always strive to deliver on our promises.",
  },
  {
    title: "Excellence",
    description:
      "We continuously improve our operations, systems, and service standards to ensure our clients receive dependable logistics solutions every time.",
  },
  {
    title: "Innovation",
    description:
      "The logistics industry is constantly evolving. We embrace better processes, modern technology, and smarter ways of serving our clients.",
  },
  {
    title: "Customer Partnership",
    description:
      "We build lasting relationships by understanding each client's needs and working together to deliver practical logistics solutions.",
  },
];

const leadership = [
  {
    name: "Babatunde Fatai",
    role: "Managing Director",
    location: "",
    image: "/images/team/image.jpg",
  },
  {
    name: "Fatimat Ismail Ajibola",
    role: "Director of Finance",
    location: "",
    image: "/images/team/IMG-20260827-WA0009.jpg",
  },
  {
    name: "GODWIN MAJIYEBO OLOKUN",
    role: "Operation Manager",
    location: "Raytoprolog Ltd, Kano",
    image: "/images/team/IMG-20260826-WA0010.jpg",
  },
  {
    name: "Ewoma David Tobi",
    role: "Operation Manager",
    location: "Raytoprolog Ltd, Abuja Office",
    image: "/images/team/IMG-20260826-WA0009.jpg",
  },
  {
    name: "Amb. Otu Ubi Dennis FICMC",
    role: "HR/Financial Consultant",
    location: "",
    image: "/images/team/IMG-20260831-WA0000.jpg",
  },
];

export function About({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const intro = useReveal<HTMLDivElement>();
  const company = useReveal<HTMLDivElement>();
  const chairman = useReveal<HTMLDivElement>();
  const leadershipReveal = useReveal<HTMLDivElement>();

  useSEO({
    title: "About Rayto Prolog | Logistics Partner in Nigeria",
    description:
      "Learn about Rayto Prolog - a trusted logistics and supply chain partner dedicated to helping businesses across Nigeria operate with confidence and efficiency.",
    keywords:
      "about Rayto Prolog, logistics company Nigeria, supply chain partner, transportation partner",
    ogTitle: "About Rayto Prolog | Your Logistics Partner for Growth",
    ogDescription:
      "Discover how Rayto Prolog delivers reliable logistics and supply chain solutions for sustainable business growth.",
    ogImage: "https://raytoprolog.com/og-image.jpg",
    ogUrl: "https://raytoprolog.com/#/about",
    canonical: "https://raytoprolog.com/#/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Rayto Prolog",
      description:
        "Learn about Rayto Prolog - a trusted logistics and supply chain partner",
      url: "https://raytoprolog.com/#/about",
    },
  });

  return (
    <>
      <section className="bg-white px-5 py-12 md:px-10 lg:min-h-[902px] lg:px-20 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div
            ref={intro.ref}
            className={`reveal reveal-left ${intro.visible ? "is-visible" : ""}`}
          >
            <Eyebrow>About Rayto Prolog</Eyebrow>
            <h1 className="max-w-[660px] text-[2rem] font-bold leading-[1.25] tracking-[-0.04em] text-[#1a1a1a] sm:text-[2.75rem] lg:text-[clamp(2.5rem,4.45vw,4rem)]">
              More Than a Logistics Company. A Partner in Your Growth.
            </h1>
            <p className="mt-6 max-w-[544px] text-base font-medium leading-7 text-[#1a1a1a] sm:text-lg sm:leading-[30px]">
              Behind every successful business is a logistics partner that
              keeps operations moving, customers satisfied, and promises
              fulfilled. At Rayto Prolog Ltd, we go beyond transporting goods.
              We partner with businesses to provide dependable logistics
              solutions that improve efficiency, reduce operational challenges,
              and support sustainable growth.
            </p>
            <p className="mt-4 max-w-[544px] text-base font-medium leading-7 text-[#1a1a1a] sm:text-lg sm:leading-[30px]">
              From transportation and fleet management to warehousing and
              supply chain support, our focus is simple: helping businesses
              move forward with confidence.
            </p>
            <div className="mt-8">
              <Button large onClick={() => onNavigate("contact")}>
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="h-[420px] w-full overflow-hidden rounded-[24px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:h-[560px] lg:h-[758px]">
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1 (2).png"
              alt="Warehouse team coordinating forklift operations"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 lg:min-h-[972px] lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,660px)] lg:gap-20">
          <div className="h-[420px] w-full overflow-hidden rounded-[24px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:h-[560px] lg:h-[828px]">
            <img
              src="/images/Three_trucks_parked_warehouse_su…_202607101545 1 (4).png"
              alt="Freight trucks travelling along a Nigerian highway"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            ref={company.ref}
            className={`reveal reveal-right ${company.visible ? "is-visible" : ""}`}
          >
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="max-w-[660px] text-[2rem] font-bold leading-[1.25] tracking-[-0.04em] text-[#1a1a1a] sm:text-[2.75rem] lg:text-[clamp(2.5rem,4.45vw,4rem)]">
              Built to Solve Real Logistics Challenges
            </h2>
            <p className="mt-6 text-base font-medium leading-7 text-[#1a1a1a] sm:text-lg sm:leading-[30px]">
              Every business depends on movement. Raw materials must arrive on
              time. Products must reach customers safely. Operations must
              continue without unnecessary delays. Yet for many businesses,
              logistics remains one of the biggest operational challenges.
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#1a1a1a] sm:text-lg sm:leading-[30px]">
              Rayto Prolog Ltd was established to change that. We saw the need
              for a logistics company that doesn&apos;t simply transport goods
              but understands the impact logistics has on business performance.
              Logistics is a primary need in the business world, and we built a
              company to help fill that need.
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-[#1a1a1a] sm:text-lg sm:leading-[30px]">
              That&apos;s why we&apos;ve built our services around reliability,
              accountability, operational excellence, and long-term
              partnerships. Our goal isn&apos;t just to deliver shipments. Our
              goal is to become the logistics partner businesses can depend on
              every single day.
            </p>
            <div className="mt-8">
              <Button large onClick={() => onNavigate("contact")}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ededed] px-5 py-20 md:px-10 lg:min-h-[742px] lg:px-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
          <div className="mb-10 max-w-[708px] text-center">
            <Eyebrow>Our Mission &amp; Vision</Eyebrow>
            <h2 className="mx-auto max-w-[688px] text-[1.9rem] font-bold leading-[1.29] tracking-[-0.04em] text-black sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.9vw,3.5rem)]">
              What Drives Rayto Prolog Forward
            </h2>
          </div>
          <div className="grid w-full gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="rounded-[24px] border border-[#5d5d5d] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:p-8">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#11409e] text-white">
                <Target className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold leading-8 text-black">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-6 text-black">
                Our mission is to provide reliable, efficient, and
                customer-focused logistics solutions that empower businesses to
                operate more effectively. By combining professional service,
                thoughtful planning, and dependable execution, we help our
                clients overcome logistics challenges and achieve greater
                operational efficiency.
              </p>
            </article>
            <article className="rounded-[24px] border border-[#5d5d5d] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:p-8">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#11409e] text-white">
                <Eye className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold leading-8 text-black">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-6 text-black">
                We envision a future where businesses across Nigeria and beyond
                can rely on Rayto Prolog as their preferred logistics partner:
                a company recognised for professionalism, innovation,
                operational excellence, and an unwavering commitment to
                customer success.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 lg:min-h-[1116px] lg:px-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
          <div className="mb-12 max-w-[708px] text-center">
            <Eyebrow>Our Core Values</Eyebrow>
            <h2 className="mx-auto max-w-[688px] text-[1.9rem] font-bold leading-[1.29] tracking-[-0.04em] text-black sm:text-[2.4rem] lg:text-[clamp(2.5rem,3.9vw,3.5rem)]">
              The Principles That Drive Everything We Do
            </h2>
          </div>
          <div className="grid w-full max-w-[1120px] gap-6 md:grid-cols-2 xl:grid-cols-6">
            {coreValues.map(({ title, description }, index) => (
              <article
                key={title}
                className={`rounded-[16px] border border-[#d8d8d8] bg-[#ededed] p-6 xl:col-span-2 ${index > 2 ? "xl:col-span-3" : ""}`}
              >
                <span className="text-4xl font-semibold leading-[44px] text-[#d44300]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold leading-8 text-black">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-6 text-black">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div
            ref={chairman.ref}
            className={`mx-auto max-w-[1200px] rounded-[24px] border border-[#d8d8d8] bg-[#ededed] p-6 sm:p-8 lg:p-10 ${chairman.visible ? "is-visible" : ""} reveal`}
          >
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-300 pb-5">
              <Eyebrow className="mb-0">Chairman’s Welcome Address</Eyebrow>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#11409e] text-white sm:flex">
                <Quote className="h-4 w-4" />
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
              <div className="overflow-hidden rounded-[20px] bg-white p-2">
                <div className="h-[340px] w-full overflow-hidden rounded-[16px] sm:h-[360px] lg:h-[420px]">
                  <img
                    src="/images/team/IMG-20260826-WA0008.jpg"
                    alt="Chairman Abdulfatai Muyideen Akinwumi"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <div className="space-y-5 text-base leading-7 text-[#292828] sm:text-lg sm:leading-[30px]">
                  <p>
                    <span className="block font-bold text-black">
                      Welcome to Raytoprolog Ltd.
                    </span>
                  </p>
                  <p>
                    It is my great pleasure to welcome you to Raytoprolog Ltd, a
                    proudly Nigerian logistics and transportation company
                    committed to moving people, products, and possibilities with
                    reliability, safety, efficiency, and professionalism.
                  </p>
                  <p>
                    At Raytoprolog, we understand that logistics is more than
                    moving goods from one location to another. It is about
                    connecting businesses to opportunities, supporting
                    communities, and ensuring that our clients can deliver on
                    their promises.
                  </p>
                  <p>
                    Our services cover fleet deployment, transportation,
                    last-mile delivery, cargo movement, field operations
                    support, and customised logistics solutions across Nigeria.
                    We continually invest in people, processes, and operational
                    capacity to provide dependable solutions that meet the
                    changing needs of our clients and partners.
                  </p>
                  <p>
                    Our vision is simple: to become a trusted and leading
                    logistics partner, recognised for reliability, integrity,
                    innovation, and exceptional service delivery.
                  </p>
                  <p>
                    As we grow, we remain committed to building lasting
                    partnerships and creating value for our clients, employees,
                    communities, and stakeholders.
                  </p>
                  <p>
                    On behalf of the Board and Management of Raytoprolog Ltd, I
                    invite you to explore our services and discover how we can
                    move your business forward.
                  </p>
                  <p>
                    Welcome to Raytoprolog Ltd — where reliability moves
                    business forward.
                  </p>
                </div>

                <div className="mt-10 border-t border-slate-300 pt-6">
                  <p className="text-lg font-bold tracking-[-0.02em] text-black">
                    Abdulfatai MUYIDEEN Akinwumi
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#d44300]">
                    MCILSCM
                  </p>
                  <p className="mt-4 text-base font-semibold text-[#292828]">
                    Chairman and CEO
                  </p>
                  <p className="text-base text-[#5d5d5d]">Raytoprolog Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ededed] px-5 py-20 md:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] text-center">
          <Eyebrow>Board of Trustees</Eyebrow>

          <div
            ref={leadershipReveal.ref}
            className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5"
          >
            {leadership.map(({ name, role, location, image }, i) => {
              const formattedName = name.includes("FICMC")
                ? name.replace("FICMC", '<span class="italic">FICMC</span>')
                : name;

              return (
                <div
                  key={name}
                  className={`overflow-hidden rounded-[16px] border border-[#d8d8d8] bg-white text-left transition-all duration-700 ${leadershipReveal.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="h-64 w-full overflow-hidden sm:h-72">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="min-h-[150px] p-5">
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.03em] text-black">
                      {formattedName.includes("<span") ? (
                        <>
                          {formattedName.replace(
                            /<span class="italic">FICMC<\/span>/,
                            "",
                          )}
                          <span className="italic">FICMC</span>
                        </>
                      ) : (
                        name
                      )}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-[#11409e]">
                      {role}
                    </p>
                    {location && (
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-[#5d5d5d]">
                        {location}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Partners />

      {/*
      <section className="bg-[#ededed] px-5 py-20 md:px-10 lg:px-20 lg:py-24">
        <div
          ref={valuesReveal.ref}
          className={`mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 ${valuesReveal.visible ? "is-visible" : ""} reveal`}
        >
          <div>
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="max-w-[520px] text-[clamp(2.25rem,3.9vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.04em] text-black">
              Reliable, Professional, Human-Centred Logistics
            </h2>
            <p className="mt-5 max-w-[480px] text-lg leading-[30px] text-[#5d5d5d]">
              The way we work is guided by a simple promise: treat every
              shipment and every partnership with care, accountability, and
              respect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {companyValues.map((value, index) => (
              <div
                key={value}
                className={`flex min-h-[92px] items-center gap-4 rounded-[16px] border border-[#d8d8d8] bg-white p-5 ${index === companyValues.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#11409e] text-white">
                  <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-base font-semibold text-[#292828] sm:text-lg">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <CtaBanner onNavigate={onNavigate} />
    </>
  );
}
