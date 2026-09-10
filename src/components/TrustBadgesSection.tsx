"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const headings = [
  "C4 Plus Drainage Ltd - The drainage experts you can trust",
  "C4 Plus Drainage Ltd - The solution to your problem",
  "C4 Plus Drainage Ltd – The answer to your drainage needs",
];

const badges = [
  {
    src: "/images/home/onelogo.webp",
    alt: "Checkatrade.com",
    width: 200,
    height: 48,
  },
  {
    src: "/images/home/twologo.webp",
    alt: "DBS Checked",
    width: 160,
    height: 64,
  },
  {
    src: "/images/home/threelogo.webp",
    alt: "CHAS Accredited",
    width: 140,
    height: 64,
  },
];

function TypewriterHeading() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = headings[index];
    const typeSpeed = deleting ? 28 : 42;
    const pauseAtEnd = 3000;

    if (!deleting && text === full) {
      const pause = window.setTimeout(() => setDeleting(true), pauseAtEnd);
      return () => window.clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((current) => (current + 1) % headings.length);
      return;
    }

    const timer = window.setTimeout(() => {
      setText((current) =>
        deleting
          ? full.slice(0, current.length - 1)
          : full.slice(0, current.length + 1)
      );
    }, typeSpeed);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <h2 className="min-h-[4.8em] text-[1.35rem] font-bold leading-snug tracking-tight text-[var(--header-top)] sm:min-h-[2.8em] sm:text-3xl lg:min-h-[2.6em] lg:text-[2.2rem] lg:leading-[1.28]">
      <span>{text}</span>
      <span
        className="type-caret ml-1 inline-block h-[0.95em] w-[3px] translate-y-[0.1em] rounded-sm bg-[var(--brand-blue)] align-baseline"
        aria-hidden="true"
      />
      <span className="sr-only">{headings[index]}</span>
    </h2>
  );
}

export default function TrustBadgesSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fafc_0%,#ffffff_40%,#eef6fb_100%)] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[var(--brand-blue)]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-[var(--header-top)]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_24px_60px_rgba(15,28,48,0.08)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-[1.2fr_0.9fr]">
            {/* Left content */}
            <div className="border-b border-slate-100 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
                <ShieldCheck className="size-3.5" />
                Trusted & Accredited
              </div>

              <TypewriterHeading />

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.8]">
                We take pride in delivering high-quality drainage solutions for
                homes and businesses. With years of expertise and a commitment
                to excellence, we specialize in addressing all your drainage
                needs efficiently and effectively
              </p>
            </div>

            {/* Right badges */}
            <div className="flex flex-col justify-center gap-4 bg-[#007BB8] p-7 sm:p-9 lg:p-10">
              <p className="text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85 lg:text-left">
                Our Accreditations
              </p>

              <div className="flex flex-col gap-3">
                {badges.map((badge, i) => (
                  <div
                    key={badge.alt}
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white px-4 py-3.5 shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span className="flex h-12 w-[96px] shrink-0 items-center justify-center sm:h-14 sm:w-[150px]">
                      <Image
                        src={badge.src}
                        alt={badge.alt}
                        width={badge.width}
                        height={badge.height}
                        className="h-auto max-h-10 w-auto max-w-full object-contain sm:max-h-12"
                      />
                    </span>
                    <span className="hidden h-8 w-px bg-slate-200 sm:block" />
                    <span className="min-w-0 text-left text-[12px] font-medium leading-snug text-[var(--header-top)] sm:text-[14px]">
                      {badge.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
