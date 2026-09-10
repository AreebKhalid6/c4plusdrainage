import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Droplets,
  HardHat,
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

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--header-top)] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,144,216,0.18),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[var(--brand-blue)]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-blue)]" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              What We Do
            </span>
            <span className="h-px w-8 bg-[var(--brand-blue)]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Services We Offer
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-300 sm:text-base sm:leading-[1.8]">
            At C4 Plus Drainage, we provide a comprehensive range of drainage
            and maintenance services designed to protect your property, prevent
            costly damage, and ensure peace of mind. From underground drainage
            systems to above-ground gutters, our expert team uses cutting-edge
            technology and proven methods to deliver fast, reliable, and
            cost-effective solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {services.map(({ title, text, href, Icon }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:p-7"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-[var(--brand-blue)]/15 text-[var(--brand-blue)] transition-colors group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                <Icon className="size-6" strokeWidth={1.6} />
              </div>

              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-300 sm:text-[15px] sm:leading-[1.7]">
                {text}
              </p>

              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--brand-blue)] transition-colors hover:text-white"
              >
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
