import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";

const missionItems = [
  "Respond quickly to drainage emergencies and minimize damage.",
  "Educate customers on best practices to prevent future blockages.",
  "Provide sustainable drainage solutions using eco-friendly techniques.",
];

const highlights = [
  { Icon: ShieldCheck, label: "Trusted local experts" },
  { Icon: MapPin, label: "London, Surrey & surrounds" },
  { Icon: Clock3, label: "24/7 emergency response" },
];

export default function AboutPageContent() {
  return (
    <section className="relative z-10 -mt-6 overflow-hidden bg-white py-16 sm:-mt-8 sm:py-20 lg:-mt-10 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[var(--brand-blue)]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-[var(--header-top)]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mx-auto h-full w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[var(--brand-blue)]/20 via-transparent to-[var(--header-top)]/12 sm:-inset-4"
            aria-hidden="true"
          />
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[24px] shadow-[0_28px_60px_rgba(15,28,48,0.16)] sm:min-h-[480px] lg:min-h-0">
            <Image
              src="/images/Home/about.png"
              alt="C4 Plus Drainage Ltd service van and equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--header-top)]/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-2xl font-bold leading-none text-[var(--brand-blue)] sm:text-3xl">
                  10+
                </p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-[var(--header-top)]">
                  Years Experience
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--header-top)]/92 px-4 py-3 text-white shadow-lg backdrop-blur-sm">
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
                  Coverage
                </p>
                <p className="mt-1 text-[14px] font-bold">London &amp; Surrey</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[var(--brand-blue)]" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
              About C4 Plus Drainage Ltd
            </span>
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-[1.18] tracking-tight text-[var(--header-top)] sm:text-4xl lg:text-[2.55rem] lg:leading-[1.2]">
            Reliable Drainage Experts Committed to Quality &amp; Efficiency
          </h2>

          <span className="mt-5 block h-1 w-16 rounded-full bg-[var(--brand-blue)]" />

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
            <p>
              At{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                C4 Plus Drainage Ltd
              </strong>
              , we specialize in providing fast, reliable, and cost-effective
              drainage solutions across{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                London, Surrey, and surrounding areas
              </strong>
              . With years of experience in the industry, our highly skilled
              engineers tackle everything from blocked drains and emergency
              repairs to routine maintenance and CCTV drain surveys.
            </p>
            <p>
              Our goal is simple: keep your drainage system running smoothly
              while delivering exceptional customer service. We understand that
              a blocked or damaged drain can cause major disruptions — so we
              focus on preventative maintenance, not just one-off fixes, for
              long-term efficiency.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-1">
            {highlights.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-[14px] font-medium text-[var(--header-top)] sm:text-[15px]"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                  <Icon className="size-4" strokeWidth={1.8} />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <h3 className="text-lg font-bold tracking-tight text-[var(--header-top)] sm:text-xl">
              Our mission is to:
            </h3>
            <ul className="mt-4 space-y-3">
              {missionItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600"
                >
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-blue)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,144,216,0.28)] transition-all hover:bg-[var(--brand-blue-hover)]"
            >
              Book C4 Plus Drainage
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:07496438889"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--header-top)] transition-all hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            >
              <Phone className="size-4" />
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
