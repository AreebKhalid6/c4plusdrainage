import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  HardHat,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { servicePageTestimonials } from "@/data/serviceTestimonials";

export const metadata: Metadata = {
  title: "Civil Drain Repairs | Expert Solutions for Commercial Drainage Systems",
  description:
    "Civil drain repairs from C4 Plus Drainage Ltd — expert solutions for municipal, commercial, and industrial drainage systems across Surrey, London, and the South East.",
};

const whyChoose = [
  {
    title: "24/7 Emergency Response",
    text: "Rapid deployment for urgent drainage crises.",
    Icon: Clock3,
  },
  {
    title: "Experienced Engineers",
    text: "Certified professionals with expertise in large-scale drainage systems.",
    Icon: HardHat,
  },
  {
    title: "Advanced Technology",
    text: "CCTV surveys, robotic cutters, and trenchless repair methods.",
    Icon: Wrench,
  },
  {
    title: "Regulatory Compliance",
    text: "Solutions aligned with UK water industry standards.",
    Icon: ShieldCheck,
  },
  {
    title: "Minimal Disruption",
    text: "Reduced excavation and faster project completion.",
    Icon: Zap,
  },
];

const processSteps = [
  {
    title: "Assessment",
    text: "Evaluate the issue and design a tailored repair plan.",
  },
  {
    title: "Inspection",
    text: "Use CCTV drain cameras to pinpoint defects and blockages.",
  },
  {
    title: "Repair",
    text: "Deploy trenchless methods (e.g., pipe relining) or robotic cutting for complex issues.",
  },
  {
    title: "Testing",
    text: "Ensure the repaired system meets flow and pressure standards.",
  },
  {
    title: "Certification",
    text: "Provide compliance reports and maintenance recommendations.",
  },
];

const benefits = [
  {
    title: "Protects Infrastructure",
    text: "Extends the lifespan of drainage networks.",
  },
  {
    title: "Prevents Flooding",
    text: "Reduces risks of sewer backups and water damage.",
  },
  {
    title: "Cost Savings",
    text: "Avoids fines for non-compliance and reduces long-term repair costs.",
  },
  {
    title: "Public Safety",
    text: "Mitigates health hazards from contaminated water.",
  },
  {
    title: "Eco-Friendly",
    text: "Minimizes environmental disruption with trenchless techniques.",
  },
];

const faqs = [
  {
    question: "What are civil drain repairs?",
    answer:
      "Civil drain repairs involve fixing large-scale drainage systems like public sewers, culverts, and commercial drainage networks using advanced, minimally invasive methods.",
  },
  {
    question: "How quickly can you respond to emergencies?",
    answer:
      "We offer 24/7 emergency response, with teams mobilizing within 2 hours for urgent issues.",
  },
  {
    question: "Are your methods compliant with UK regulations?",
    answer:
      "Yes. All repairs adhere to UK Water Industry Act standards and environmental guidelines.",
  },
  {
    question: "Do you work with local councils?",
    answer:
      "Absolutely. We partner with councils and contractors to maintain public drainage infrastructure.",
  },
  {
    question: "Can you handle complex industrial systems?",
    answer:
      "Yes. Our engineers are trained in repairing industrial drainage systems, including chemical-resistant pipelines.",
  },
];

export default function CivilDrainRepairsPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Civil Drain Repairs"
        eyebrow="C4 Plus Drainage Ltd"
        title="Civil Drain Repairs | Expert Solutions for Municipal & Commercial Drainage Systems"
        description="A proven and established practice for maintaining urban infrastructure with minimal invasion and maximum efficiency."
        backgroundImage="/images/Home/civil-drain-repairs.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/civil-drain-repairs.webp"
                alt="C4 Plus Drainage engineers carrying out civil drain repairs and CCTV inspection on site"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)]">
              Minimal Invasion. Maximum Efficiency.
            </p>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                Civil drain systems are the backbone of urban infrastructure,
                ensuring efficient wastewater management and preventing flooding
                in communities. At{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  C4 Plus Drainage LTD
                </strong>
                , we specialize in civil drain repairs, offering expert solutions
                for municipal, commercial, and industrial drainage systems. Our
                team combines cutting-edge technology with decades of experience
                to keep your drainage networks functioning flawlessly.
              </p>
              <p>
                From collapsed sewer lines to damaged culverts, civil drainage
                issues can disrupt daily life, harm public health, and strain
                local resources. Traditional repair methods often involve
                extensive excavation, prolonged timelines, and inflated costs.
                With our innovative approach, we minimize disruption while
                delivering durable, long-lasting repairs that meet strict
                regulatory standards.
              </p>
              <p>
                Whether it’s a public sewer network, a commercial drainage
                system, or a large-scale industrial facility, we tackle projects
                of all sizes with precision and efficiency. Our services are
                designed to protect infrastructure, reduce environmental impact,
                and ensure compliance with UK water regulations. Trust C4 Plus
                Drainage LTD to keep your drainage systems flowing smoothly,
                24/7.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Why Choose Us?
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                Here’s why councils, businesses, and contractors rely on C4 Plus
                Drainage LTD for civil drain repairs:
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
                How We Deliver Civil Drain Repairs
              </h2>
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
                Benefits of Civil Drain Repairs
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Here’s why investing in civil drain repairs is essential for your
                community or business:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,28,48,0.04)]"
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
                Based in Redhill, Surrey, we serve councils, businesses, and
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
                Don’t let drainage failures disrupt your community or operations.
                Contact C4 Plus Drainage LTD today for expert civil drain
                repairs. Call us at{" "}
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
