import {
  Building2,
  ClipboardList,
  PackageCheck,
  Route,
  ShipWheel,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  subtitle: string;
  description: string;
  offers: string[];
  benefits: string[];
  bestFor: string;
  action: string;
};

export const services: Service[] = [
  {
    id: "transportation-freight",
    title: "Transportation & Freight",
    summary: "Dependable transportation that keeps goods moving safely and on schedule.",
    icon: Truck,
    subtitle: "Reliable Transportation That Keeps Your Business Moving",
    description:
      "When products don't arrive on time, businesses lose more than money—they lose customer confidence. Our transportation and freight services are designed to ensure your goods move safely, efficiently, and on schedule. Whether you're moving raw materials, finished products, or commercial cargo, we provide dependable logistics support tailored to your operational needs.",
    offers: [
      "Nationwide transportation",
      "Scheduled freight movement",
      "Commercial goods transportation",
      "Time-sensitive deliveries",
      "Flexible logistics planning",
    ],
    benefits: [
      "Reduced delivery delays",
      "Safe handling of goods",
      "Reliable delivery schedules",
      "Improved operational efficiency",
      "Greater confidence in every shipment",
    ],
    bestFor:
      "Manufacturers, distributors, retailers, agricultural businesses, wholesalers, and corporate organizations.",
    action: "Request a Freight Quote",
  },
  {
    id: "fleet-management",
    title: "Fleet Management",
    summary: "Structured fleet support that improves visibility, performance, and control.",
    icon: ShipWheel,
    subtitle: "Smarter Fleet Management for Better Performance",
    description:
      "Managing a fleet involves more than keeping vehicles on the road. It requires visibility, planning, maintenance, and operational control. Rayto Prolog helps businesses optimize fleet performance through structured management solutions that improve efficiency, reduce downtime, and support better decision-making.",
    offers: [
      "Fleet monitoring",
      "Maintenance coordination",
      "Vehicle performance oversight",
      "Fleet planning and reporting",
      "Operational support",
    ],
    benefits: [
      "Improved vehicle utilization",
      "Reduced operating costs",
      "Better maintenance planning",
      "Increased fleet reliability",
      "Greater operational visibility",
    ],
    bestFor:
      "Businesses operating multiple commercial vehicles, logistics companies, corporate organizations, and distribution businesses.",
    action: "Talk to a Fleet Specialist",
  },
  {
    id: "warehousing-storage",
    title: "Warehousing & Storage",
    summary: "Secure, organized storage that keeps inventory ready for distribution.",
    icon: Warehouse,
    subtitle: "Secure Storage That Supports Efficient Distribution",
    description:
      "Inventory is one of your business's most valuable assets. Keeping it secure, organized, and ready for distribution is essential to maintaining efficient operations. Rayto Prolog provides warehousing and storage solutions designed to protect your inventory while supporting faster and more organized order fulfillment.",
    offers: [
      "Secure inventory storage",
      "Organized warehouse management",
      "Inventory handling",
      "Distribution support",
      "Short and long-term storage",
    ],
    benefits: [
      "Improved inventory organization",
      "Reduced product damage",
      "Faster dispatch",
      "Better inventory control",
      "Increased operational efficiency",
    ],
    bestFor:
      "Manufacturers, wholesalers, retailers, and e-commerce businesses.",
    action: "Learn About Our Storage Solutions",
  },
  {
    id: "supply-chain-solutions",
    title: "Supply Chain Solutions",
    summary: "Connected logistics planning from procurement through final delivery.",
    icon: Route,
    subtitle: "Connecting Every Stage of Your Operations",
    description:
      "A supply chain is only as strong as its weakest link. Our supply chain solutions help businesses improve coordination between procurement, storage, transportation, and delivery, ensuring products move efficiently from origin to destination.",
    offers: [
      "Logistics planning",
      "Distribution coordination",
      "Supply chain optimization",
      "Operational support",
      "End-to-end logistics management",
    ],
    benefits: [
      "Better coordination",
      "Fewer operational delays",
      "Improved productivity",
      "Reduced logistics complexity",
      "Scalable logistics support",
    ],
    bestFor:
      "Manufacturers, corporate organizations, distributors, and businesses with multi-stage operations.",
    action: "Let's Optimize Your Supply Chain",
  },
  {
    id: "e-commerce-logistics",
    title: "E-Commerce & Logistics",
    summary: "Fulfillment and delivery support built around online customer expectations.",
    icon: PackageCheck,
    subtitle: "Logistics Built for Growing Online Businesses",
    description:
      "In e-commerce, delivery is part of the customer experience. Fast, reliable fulfillment helps businesses build trust, encourage repeat purchases, and strengthen their reputation. Rayto Prolog supports online businesses with logistics solutions designed to keep orders moving quickly and efficiently.",
    offers: [
      "Order fulfillment support",
      "Inventory movement",
      "Delivery coordination",
      "Business logistics support",
    ],
    benefits: [
      "Faster deliveries",
      "Better customer satisfaction",
      "Scalable logistics",
      "Improved operational efficiency",
    ],
    bestFor:
      "Online retailers, e-commerce brands, marketplaces, and digital businesses.",
    action: "Support My Online Business",
  },
  {
    id: "last-mile-delivery",
    title: "Last-Mile Delivery",
    summary: "Professional final-mile delivery from warehouse to customer doorstep.",
    icon: ClipboardList,
    subtitle: "The Delivery Your Customers Remember Most",
    description:
      "The final stage of delivery often shapes the customer's entire experience. Our last-mile delivery service focuses on accuracy, professionalism, and timely delivery, helping businesses create positive customer experiences from warehouse to doorstep.",
    offers: [
      "Residential delivery",
      "Commercial delivery",
      "Scheduled deliveries",
      "Customer-focused logistics",
    ],
    benefits: [
      "Improved customer satisfaction",
      "Reliable delivery experience",
      "Better brand reputation",
      "Reduced delivery issues",
    ],
    bestFor:
      "Retailers, e-commerce businesses, distributors, and corporate organizations.",
    action: "Improve My Deliveries",
  },
  {
    id: "corporate-logistics",
    title: "Corporate Logistics & Support",
    summary: "Dedicated logistics support designed for enterprise operations.",
    icon: Building2,
    subtitle: "Logistics Solutions Designed for Enterprise Operations",
    description:
      "Large organizations require logistics partners who understand planning, coordination, accountability, and consistency. Rayto Prolog provides dedicated logistics support for corporate organizations with solutions designed around operational standards, business continuity, and long-term partnerships.",
    offers: [
      "Dedicated logistics planning",
      "Corporate transportation support",
      "Operational coordination",
      "Long-term logistics partnership",
    ],
    benefits: [
      "Consistent service delivery",
      "Professional communication",
      "Scalable logistics support",
      "Greater operational efficiency",
    ],
    bestFor:
      "Corporate organizations, institutions, manufacturers, and large-scale enterprises.",
    action: "Speak With Our Corporate Team",
  },
];
