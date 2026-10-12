import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import type { Page } from "@/shared/constants";
import { useReveal } from "@/shared/useReveal";

const industries = [
  {
    title: "Manufacturing",
    subtitle: "Reliable Logistics for Manufacturing Operations",
    description:
      "Manufacturing depends on consistency. Production slows when raw materials arrive late, and finished goods lose value when they don't reach distributors or customers on time. Rayto Prolog helps manufacturers maintain efficient production by providing dependable transportation, warehousing, and supply chain support that keeps operations running without unnecessary interruptions.",
    supportTitle: "We Support You With:",
    support: [
      "Raw material transportation",
      "Finished goods distribution",
      "Warehouse support",
      "Supply chain coordination",
      "Scheduled deliveries",
    ],
  },
  {
    title: "Retail & Distribution",
    subtitle: "Keeping Products Where Customers Need Them",
    description:
      "Retail success depends on product availability. Empty shelves, delayed replenishment, and inventory shortages affect customer satisfaction and sales. We help retailers and distributors maintain a steady flow of inventory through reliable transportation, warehousing, and distribution solutions.",
    supportTitle: "We Help You:",
    support: [
      "Move inventory efficiently",
      "Reduce stock shortages",
      "Improve distribution planning",
      "Deliver products on schedule",
    ],
  },
  {
    title: "E-Commerce",
    subtitle: "Fast Logistics for Growing Online Businesses",
    description:
      "Today's online customers expect speed, transparency, and reliable delivery. Your logistics partner plays a major role in your customer experience. Rayto Prolog helps e-commerce businesses fulfill orders efficiently, improve delivery performance, and support business growth through dependable logistics solutions.",
    supportTitle: "Our Support Includes:",
    support: [
      "Order fulfillment",
      "Inventory movement",
      "Last-mile delivery",
      "Delivery coordination",
      "Business growth support",
    ],
  },
  {
    title: "Agriculture",
    subtitle: "Moving Agricultural Products with Care",
    description:
      "Agricultural products often require timely transportation and careful handling. Whether you're moving farm produce, agricultural supplies, or processed products, our logistics solutions help reduce delays, minimize losses, and support efficient distribution.",
    supportTitle: "We Support:",
    support: [
      "Farm produce transportation",
      "Agricultural supply movement",
      "Distribution logistics",
      "Storage support",
    ],
  },
  {
    title: "Construction",
    subtitle: "Logistics That Keep Projects Moving",
    description:
      "Construction projects rely on timely delivery of equipment, tools, and building materials. Delays can affect schedules, increase costs, and slow progress. Rayto Prolog provides dependable logistics support that helps construction companies keep projects on track.",
    supportTitle: "We Help With:",
    support: [
      "Equipment transportation",
      "Building material delivery",
      "Scheduled site deliveries",
      "Project logistics planning",
    ],
  },
  {
    title: "NGOs & Humanitarian Organizations",
    subtitle: "Delivering Support Where It Matters Most",
    description:
      "Non-governmental organisations often operate under tight timelines and in challenging environments. Reliable logistics is essential to ensuring aid, supplies, and resources reach communities when they're needed. Rayto Prolog provides dependable logistics support that helps humanitarian organisations deliver with confidence.",
    supportTitle: "Services Include:",
    support: [
      "Distribution planning",
      "Relief supply transportation",
      "Logistics coordination",
      "Scheduled deliveries",
    ],
  },
  {
    title: "Renewable Energy",
    subtitle: "Supporting Sustainable Development Through Reliable Logistics",
    description:
      "Renewable energy projects involve transporting valuable equipment that requires careful handling and coordinated delivery. Rayto Prolog helps renewable energy companies move materials and equipment safely while supporting project timelines.",
    supportTitle: "We Support:",
    support: [
      "Equipment transportation",
      "Project logistics",
      "Storage solutions",
      "Delivery coordination",
    ],
  },
  {
    title: "Corporate Organizations",
    subtitle: "Professional Logistics for Business Operations",
    description:
      "Large organisations require logistics partners that understand professionalism, accountability, and operational excellence. Rayto Prolog provides tailored logistics solutions that support daily operations while maintaining the service standards corporate organisations expect.",
    supportTitle: "We Help Corporate Clients With:",
    support: [
      "Dedicated logistics planning",
      "Business transportation",
      "Fleet support",
      "Warehousing",
      "Supply chain coordination",
    ],
  },
];

const industriesHeroImage =
  "/images/Forklift_carrying_goods_warehouse_2K_202607101553 4.png";
const industryImage =
  "/images/Three_trucks_parked_warehouse_su…_202607101545 1 (3).png";
const expertiseImage =
  "/images/Shipping_container_lifted_by_crane_202607191226 (1) 1.png";

export function Industries({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const expertiseReveal = useReveal<HTMLDivElement>();

  const showIndustries = () => {
    document
      .getElementById("industry-sectors")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="relative isolate flex min-h-[620px] items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 text-center text-white lg:min-h-[720px] lg:px-20"
        style={{
          backgroundImage: `url("${industriesHeroImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
            Industries We Serve
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-[56px] lg:leading-[1.29]">
            Logistics Solutions Designed for Every Industry
          </h1>
          <p className="max-w-[780px] text-base leading-7 text-gray-100 sm:text-lg sm:leading-[30px]">
            No two industries move the same way. A manufacturer has different
            logistics needs than an e-commerce business. A construction company
            faces different delivery challenges than a retailer. At Rayto
            Prolog, we understand these differences. That&apos;s why we tailor
            our logistics solutions to meet the operational demands of each
            industry we serve—helping businesses improve efficiency, reduce
            delays, and keep operations moving.
          </p>
          <Button large onClick={showIndustries}>
            Discover How We Help Businesses
          </Button>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <div
          ref={expertiseReveal.ref}
          className={`reveal mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 ${expertiseReveal.visible ? "is-visible" : ""}`}
        >
          <div className="max-w-[540px]">
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-black sm:text-5xl lg:text-[52px] lg:leading-[1.38]">
              Industry Expertise That Delivers Results
            </h2>
            <p className="text-lg leading-[30px] text-[#5D5D5D]">
              Every industry has unique operational requirements, delivery
              schedules, compliance expectations, and customer demands. Our
              experience across multiple sectors allows us to provide logistics
              solutions that are practical, dependable, and aligned with how
              your business operates. Whether you&apos;re moving raw materials,
              finished products, equipment, or customer orders, Rayto Prolog
              provides the support you need to operate with confidence.
            </p>
          </div>
          <img
            src={expertiseImage}
            alt="A shipping container being lifted inside a logistics warehouse"
            className="h-[420px] w-full rounded-3xl object-cover shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:h-[560px] lg:h-[700px]"
          />
        </div>
      </section>

      <div id="industry-sectors">
        {industries.map((industry, index) => {
          const imageOnLeft = index % 2 === 0;

          return (
            <section
              key={industry.title}
              className={`px-6 py-16 sm:px-10 lg:px-20 lg:py-24 ${
                imageOnLeft ? "bg-[#EDEDED]" : "bg-white"
              }`}
            >
              <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
                <img
                  src={industryImage}
                  alt={`Logistics transportation serving the ${industry.title.toLowerCase()} industry`}
                  loading="lazy"
                  className={`h-[420px] w-full rounded-3xl object-cover shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:h-[540px] lg:h-[658px] ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                />
                <div
                  className={`lg:py-8 ${
                    imageOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h2 className="mb-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] sm:text-5xl lg:text-[64px] lg:leading-[1.25]">
                    {industry.title}
                  </h2>
                  <h3 className="mb-6 text-2xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-3xl lg:text-4xl lg:leading-[1.4]">
                    {industry.subtitle}
                  </h3>
                  <p className="mb-7 text-lg leading-[30px] text-[#1A1A1A]">
                    {industry.description}
                  </p>
                  <h4 className="mb-3 text-xl font-semibold text-black sm:text-2xl">
                    {industry.supportTitle}
                  </h4>
                  <ul className="list-disc space-y-1 pl-6 text-lg leading-[30px] text-[#1A1A1A] marker:text-[#D44300]">
                    {industry.support.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner
        onNavigate={onNavigate}
        eyebrow="Ready to Move?"
        title="Ready to Strengthen Your Logistics Operations?"
        description="Whether you need transportation, warehousing, fleet management, or end-to-end logistics support, we're ready to help. Let's discuss your logistics needs and build a solution that supports your business today—and as it grows tomorrow."
      />
    </>
  );
}
