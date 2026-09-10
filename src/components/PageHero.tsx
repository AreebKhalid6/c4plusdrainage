import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumb: string;
  eyebrow?: string;
  backgroundImage?: string;
  hideCurve?: boolean;
};

export default function PageHero({
  title,
  description,
  breadcrumb,
  eyebrow,
  backgroundImage,
  hideCurve = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-18 lg:pb-28 ${
        backgroundImage ? "min-h-[320px] sm:min-h-[380px]" : "bg-[var(--header-top)]"
      }`}
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Left overlay for heading readability */}
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,16,32,0.92)_0%,rgba(8,16,32,0.82)_38%,rgba(8,16,32,0.45)_58%,rgba(8,16,32,0.15)_72%,transparent_88%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-0 w-[min(100%,40rem)] bg-[linear-gradient(90deg,rgba(8,16,32,0.35)_0%,transparent_100%)]"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,144,216,0.28),transparent_52%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[var(--brand-blue)]/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-5 text-[13px] text-white/55">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-white/35">/</span>
          <span className="text-white/90">{breadcrumb}</span>
        </nav>

        {eyebrow ? (
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.15]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/78 sm:text-base sm:leading-[1.7]">
          {description}
        </p>
      </div>

      {!hideCurve ? (
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 56"
          fill="currentColor"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,56 480,0 720,20 C960,40 1200,56 1440,24 L1440,56 L0,56 Z" />
        </svg>
      ) : null}
    </section>
  );
}
