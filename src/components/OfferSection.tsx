"use client";

import { useEffect, useState, type ReactNode } from "react";

type Banner = {
  id: string;
  content: ReactNode;
  underlineAlign?: "center" | "leftish";
};

const slides: [Banner, Banner][] = [
  [
    {
      id: "discount",
      content: (
        <>
          All services discounted until
          <br />
          <span className="text-[#f5d76e]">31st February 2025</span>
        </>
      ),
    },
    {
      id: "offer-code",
      content: (
        <>
          <span className="text-[#f5d76e]">&quot;OFFER CODE&quot;</span> Quote
        </>
      ),
      underlineAlign: "leftish",
    },
  ],
  [
    {
      id: "save",
      content: (
        <>
          Save{" "}
          <span className="relative inline-block text-[#f5d76e]">
            10%
            <span
              className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white"
              aria-hidden="true"
            />
          </span>{" "}
          today
        </>
      ),
    },
    {
      id: "phone",
      content: (
        <a
          href="tel:+447312125364"
          className="text-[#f5d76e] transition hover:opacity-90"
        >
          +44 7312 125364
        </a>
      ),
    },
  ],
];

const descriptions = [
  "Looking for blocked drain repair, clearance & cleaning? Then look no further. C4 Plus Drainage is a family business who employs competent, experienced, knowledgeable, professional drainage specialists, who thrive on quality and completion of works, ensuring that our clients and customers are always our number one priority.",
  <>
    We are a major competitor in the drainage industry, who carry out all
    aspects of drainage works, from reactive clearing, to planned maintenance to
    installation and repair works. We don&apos;t need to sell you a sales pitch,
    our work evidently speaks for itself.{" "}
    <strong className="font-bold text-[var(--header-top)]">
      C4 PLUS DRAINAGE LTD
    </strong>{" "}
    is here to be the solution to your problem.
  </>,
];

function WavyUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 7 C18 2, 34 11, 50 7 S82 2, 98 7 130 11, 146 7 170 2, 178 6"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BannerCard({
  banner,
  active,
}: {
  banner: Banner;
  active: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center px-4 py-4 text-center transition-all duration-700 ease-out sm:px-8 sm:py-8 ${
        active
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <h3 className="text-lg font-semibold leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
        {banner.content}
      </h3>
      <WavyUnderline
        className={`mt-2 w-28 sm:mt-3 sm:w-44 ${
          banner.underlineAlign === "leftish" ? "self-center -translate-x-4 sm:-translate-x-8" : ""
        }`}
      />
    </div>
  );
}

export default function OfferSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
          {[0, 1].map((column) => (
            <div key={column}>
              <div className="relative min-h-[132px] overflow-hidden rounded-xl border border-white/40 bg-gradient-to-b from-[#2a86cc] via-[#4aa4de] to-[#8fd0f2] shadow-[0_14px_34px_rgba(42,134,204,0.28)] sm:h-[132px] sm:min-h-0">
                {/* soft shine */}
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                  aria-hidden="true"
                />

                {slides.map((pair, slideIndex) => (
                  <BannerCard
                    key={pair[column].id}
                    banner={pair[column]}
                    active={slideIndex === index}
                  />
                ))}
              </div>

              <p className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-relaxed text-slate-700 sm:text-base sm:leading-[1.75]">
                {descriptions[column]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to offer slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-[var(--brand-blue)]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
