import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Droplets,
  HardHat,
  Phone,
  Rat,
  Replace,
  ShowerHead,
  Waves,
} from "lucide-react";

const services = [
  {
    title: "Drain Flushing and Cleaning",
    text: "Need professional drain flushing and cleaning? C4 Plus Drainage LTD uses advanced high-pressure water jetting to clear blockages. Fast, reliable, and affordable services across the UK. Call now!",
    href: "/services/drain-flushing-and-cleaning",
    Icon: Waves,
  },
  {
    title: "24/7 Blocked Drain Clearance",
    text: "Facing a blocked drain emergency? C4 Plus Drainage LTD offers 24/7 blocked drain clearance services across Surrey, London, and the South East. Fast, reliable, and trusted by homeowners and businesses. Call now!",
    href: "/services/blocked-drain-clearance",
    Icon: Droplets,
  },
  {
    title: "CCTV Drain Surveys",
    text: "Stop recurring blocked drains! C4 Plus Drainage offers CCTV drain surveys using advanced technology to pinpoint issues and provide cost-effective solutions. Get clarity, fast fixes, and expert advice. Call now!",
    href: "/services/cctv-drain-surveys",
    Icon: Camera,
  },
  {
    title: "Civil Drain Repairs",
    text: "Need reliable civil drain repairs? C4 Plus Drainage LTD delivers expert solutions for municipal, commercial, and industrial drainage systems. Fast, compliant, and cost-effective. Call 020 3657 3189 or +44 7312 125364!",
    href: "/services/civil-drain-repairs",
    Icon: HardHat,
  },
  {
    title: "Rodent Infestation",
    text: "Are you facing rodent infestation? C4 Plus Drainage LTD offers expert rat removal services to eliminate pests and prevent future invasions. Safe, fast, and reliable. Call us now — 020 3657 3189 or +44 7312 125364!",
    href: "/services/rodent-infestation",
    Icon: Rat,
  },
  {
    title: "Gutter Cleaning",
    text: "C4 Plus Drainage offers expert gutter cleaning to prevent water damage and subsidence. Advanced equipment, fast service. Call 020 3657 3189 or +44 7312 125364!",
    href: "/services/gutter-cleaning",
    Icon: ShowerHead,
  },
  {
    title: "Non-Dig Drain Technologies",
    text: "Save time, money, and hassle with non-dig drain repairs! C4 Plus Drainage uses advanced trenchless technology to fix damaged pipes without excavation. Fast, efficient, and cost-effective. Call now!",
    href: "/services/non-dig-drain-technologies",
    Icon: Replace,
  },
];

export default function ServicesPageContent() {
  return (
    <section className="relative z-10 -mt-6 overflow-hidden bg-white py-16 sm:-mt-8 sm:py-20 lg:-mt-10 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--brand-blue)]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[var(--header-top)]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-blue)]" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              What We Offer
            </span>
            <span className="h-px w-8 bg-[var(--brand-blue)]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl lg:text-[2.55rem]">
            Expert Drainage Solutions for Residential &amp; Commercial
            Properties
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.8]">
            From emergency blockages to planned maintenance and trenchless
            repairs, C4 Plus Drainage Ltd delivers fast, reliable services
            across London, Surrey, and the South East.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {services.map(({ title, text, href, Icon }) => (
            <article
              key={title}
              id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_10px_30px_rgba(15,28,48,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--brand-blue)]/35 hover:shadow-[0_22px_48px_rgba(15,28,48,0.12)] sm:p-7"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />

              <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(0,144,216,0.35)]">
                <Icon className="size-6" strokeWidth={1.6} />
              </div>

              <h3 className="text-[1.2rem] font-bold leading-snug tracking-tight text-[var(--header-top)] sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-slate-600 sm:text-[15px] sm:leading-[1.75]">
                {text}
              </p>

              <Link
                href={href}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#007BB8] px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[var(--header-top)]"
              >
                Read More
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-blue)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,144,216,0.28)] transition-all hover:bg-[var(--brand-blue-hover)]"
          >
            Book a Service
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="tel:02036573189"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--header-top)] transition-all hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
          >
            <Phone className="size-4" />
            020 3657 3189
          </a>
        </div>
      </div>
    </section>
  );
}
