import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Wrench } from "lucide-react";

const highlights = [
  { Icon: BadgeCheck, label: "Fully Qualified Engineers" },
  { Icon: MapPin, label: "Surrey, London & South East" },
  { Icon: Wrench, label: "24/7 Emergency Ready" },
];

export default function AboutUs() {
  return (
    <section className="relative -mt-4 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f9fc_45%,#ffffff_100%)] py-12 sm:-mt-6 sm:py-16 lg:-mt-8 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--brand-blue)]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[var(--header-top)]/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image column */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[var(--brand-blue)]/25 via-transparent to-[var(--header-top)]/15 sm:-inset-4"
            aria-hidden="true"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-[0_28px_60px_rgba(15,28,48,0.18)] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src="/images/Home/about.png"
              alt="C4 Plus Drainage Ltd service van and equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--header-top)]/35 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-2xl font-bold leading-none text-[var(--brand-blue)] sm:text-3xl">
                  10+
                </p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-[var(--header-top)]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content column */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[var(--brand-blue)]" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
              About Us
            </span>
            <span className="h-px w-9 bg-[var(--brand-blue)]" />
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[var(--header-top)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.18]">
            Over 10+ Years of Expertise in Drainage Solutions
          </h2>

          <span className="mt-5 block h-1 w-16 rounded-full bg-[var(--brand-blue)]" />

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
            <p>
              At{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                C4 Plus Drainage
              </strong>
              , we&apos;re more than just a drainage company—we&apos;re your
              trusted partner in maintaining and protecting your property. With
              years of experience serving{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                Surrey, London, and the South East
              </strong>
              , we&apos;ve built a reputation for delivering{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                fast, reliable, and cost-effective drainage solutions.
              </strong>
            </p>
            <p>
              Our team of{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                fully qualified engineers
              </strong>{" "}
              is equipped with the latest tools and technology to tackle any
              drainage issue, from{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                blocked drains
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                rodent infestations
              </strong>{" "}
              to{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                complex sewer repairs
              </strong>
              . Whether it&apos;s a residential emergency or a large-scale
              commercial project, we&apos;re committed to providing{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                exceptional service
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-[var(--header-top)]">
                lasting results
              </strong>
              .
            </p>
          </div>

          <ul className="mt-7 flex flex-col gap-3 sm:mt-8">
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

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-blue)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,144,216,0.28)] transition-all hover:bg-[var(--brand-blue-hover)] hover:shadow-[0_14px_32px_rgba(0,144,216,0.36)] sm:mt-9"
          >
            More About
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
