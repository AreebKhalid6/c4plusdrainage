import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  Rat,
  Search,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { servicePageTestimonials } from "@/data/serviceTestimonials";

export const metadata: Metadata = {
  title: "Rodent Infestation | Expert Rat Removal & Prevention Service",
  description:
    "Expert rodent infestation solutions from C4 Plus Drainage Ltd — detection, humane removal, drain proofing, and prevention across Surrey, London, and the South East.",
};

const whyChoose = [
  {
    title: "Expert Detection",
    text: "Pinpoint infestations and entry points with precision.",
    Icon: Search,
  },
  {
    title: "Humane Removal",
    text: "Safe, effective methods to eliminate rodents.",
    Icon: HeartHandshake,
  },
  {
    title: "Prevention Strategies",
    text: "Seal entry points and rat-proof drains.",
    Icon: ShieldCheck,
  },
  {
    title: "Compliance",
    text: "Solutions aligned with UK health and safety standards.",
    Icon: Check,
  },
  {
    title: "24/7 Emergency Service",
    text: "Rapid response to urgent infestations.",
    Icon: Clock3,
  },
];

const processSteps = [
  {
    title: "Inspection",
    text: "Use CCTV cameras and thermal imaging to locate nests, entry points, and activity trails.",
  },
  {
    title: "Identification",
    text: "Determine the species, scale, and root cause of the infestation.",
  },
  {
    title: "Removal",
    text: "Deploy traps, baits, or eco-friendly deterrents to eliminate rodents.",
  },
  {
    title: "Proofing",
    text: "Seal gaps in drains, walls, and foundations to block re-entry.",
  },
  {
    title: "Prevention",
    text: "Provide ongoing monitoring and maintenance advice.",
  },
];

const signs = [
  {
    title: "Droppings",
    text: "Small, dark pellets near food sources or nesting areas.",
  },
  {
    title: "Grease Marks",
    text: "Smudges along walls or floorboards from rodent fur.",
  },
  {
    title: "Bite Marks",
    text: "Gnawed wires, pipes, or furniture.",
  },
  {
    title: "Scratching Noises",
    text: "Sounds in walls, ceilings, or under floors.",
  },
  {
    title: "Debris in Drains",
    text: "Nests or food remnants in drainage systems.",
  },
];

const benefits = [
  {
    title: "Health Protection",
    text: "Reduce disease risks for your family or employees.",
  },
  {
    title: "Property Safety",
    text: "Prevent damage to wiring, insulation, and plumbing.",
  },
  {
    title: "Cost Savings",
    text: "Avoid expensive repairs from gnawing or contamination.",
  },
  {
    title: "Eco-Friendly",
    text: "Humane methods with minimal environmental impact.",
  },
];

const faqs = [
  {
    question: "How do rodents enter properties?",
    answer:
      "Rodents exploit gaps as small as 15mm (50p coin size), including drains, vents, cracks in walls, or damaged roofing.",
  },
  {
    question: "Are DIY rodent control methods effective?",
    answer:
      "Temporary fixes often fail. Professional services address root causes like entry points and nesting sites.",
  },
  {
    question: "Can rats spread diseases?",
    answer:
      "Yes. Rats carry hantavirus, leptospirosis, and salmonella, posing serious health risks.",
  },
  {
    question: "How quickly can you respond to infestations?",
    answer:
      "We offer 24/7 emergency services, with teams deployed within 2 hours.",
  },
  {
    question: "Do you provide prevention plans?",
    answer:
      "Yes. We seal entry points, rat-proof drains, and offer maintenance advice to prevent reinfestation.",
  },
];

export default function RodentInfestationPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Rodent Infestation"
        eyebrow="C4 Plus Drainage Ltd — Pest Control"
        title="Rodent Infestation | Expert Rat Removal & Prevention Service"
        description="C4 Plus Drainage specialists are trained in rodent infestation — expert detection, removal, and prevention for homes and businesses."
        backgroundImage="/images/Home/rodent-infestation.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/rodent-infestation.webp"
                alt="Rodent infestation in a dark enclosed space — expert rat removal and prevention"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
              <Rat className="size-3.5" />
              Rodent Infestation Solutions
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                Rodent infestations pose serious risks to your health, property,
                and peace of mind. At{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  C4 Plus Drainage
                </strong>
                , we specialize in rodent infestation solutions, combining
                expert detection, removal, and prevention to safeguard your home
                or business.
              </p>
              <p>
                Rats and mice are more than a nuisance—they carry diseases like
                hantavirus, salmonella, and leptospirosis, contaminating food and
                surfaces with droppings, fur, and saliva. They can also gnaw
                through wiring, insulation, and pipes, causing costly structural
                damage. Worse, rodents can squeeze through gaps as small as 50
                pence (15mm) and infiltrate properties via drains, sewers, or
                cracks in foundations.
              </p>
              <p>
                Our trained specialists use advanced techniques to locate entry
                points, identify infestations, and halt rodent activity at its
                source. From droppings and grease marks to scratching sounds in
                walls, we act swiftly to eliminate pests and prevent
                reinfestation. Trust C4 Plus Drainage to protect your property
                with safe, humane, and long-lasting solutions.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Why Choose Us?
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                Here’s why C4 Plus Drainage is your trusted partner for rodent
                control:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {whyChoose.map(({ title, text, Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-3 text-[16px] font-bold text-[var(--header-top)]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Our Process
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                How We Resolve Rodent Infestations:
              </p>
              <ol className="mt-6 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[13px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Signs of a Rodent Infestation
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                Watch for these red flags:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {signs.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,28,48,0.04)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <AlertTriangle className="size-3.5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Benefits of Professional Rodent Control
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white">
                        <Check className="size-3.5" strokeWidth={2.5} />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Areas We Cover
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Based in Redhill, Surrey, we serve homes, businesses, and
                industrial clients across:
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      Surrey:
                    </strong>{" "}
                    Epsom, Guildford, Woking, Reigate
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      London:
                    </strong>{" "}
                    Croydon, Sutton, Bromley, Kingston
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      South East:
                    </strong>{" "}
                    Kent, Sussex, Hampshire
                  </span>
                </li>
              </ul>
            </div>

            <ServiceFaqs items={faqs} />

            <div className="mt-12 overflow-hidden rounded-[24px] bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Contact Us Today!
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80">
                Don’t let rodents take over your property! Contact C4 Plus
                Drainage today for expert rat removal and prevention services.
                Call us at{" "}
                <a
                  href="tel:02036573189"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  020 3657 3189
                </a>{" "}
                or{" "}
                <a
                  href="tel:+447312125364"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  +44 7312 125364
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@c4plusdrainage.co.uk"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  info@c4plusdrainage.co.uk
                </a>{" "}
                to schedule your service or request a free quote!
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--brand-blue-hover)]"
                >
                  Schedule Your Service
                </Link>
                <a
                  href="tel:02036573189"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
              </div>
            </div>

            <ServiceTestimonials items={servicePageTestimonials} />
          </div>

          <ServiceSidebar />
        </div>
      </section>
    </main>
  );
}
