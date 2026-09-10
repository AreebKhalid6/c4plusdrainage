"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  BadgePoundSterling,
  Cctv,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const slides = [
  {
    image: "/images/Home/herosliderone.webp",
    heading: "24/7 Emergency Repairs",
    highlight: "We Fix It Fast, Day or Night",
    description:
      "Facing a drainage emergency? Our expert team is on call 24/7 to resolve issues quickly and efficiently. Your peace of mind is our priority.",
    buttonText: "FAQ's – Get Answers",
    buttonHref: "/advice",
  },
  {
    image: "/images/Home/heroslidertwo.webp",
    heading: "C4 Plus Drainage Repair",
    highlight: "Redhill",
    description:
      "Professional and reliable drainage repair services in Redhill. From blocked drains to advanced CCTV surveys, we provide fast and affordable solutions.",
    buttonText: "Speak to a Drainage Expert",
    buttonHref: "/contact",
  },
  {
    image: "/images/Home/herosliderthree.webp",
    heading: "Stop Drain Disasters Before",
    headingLine2: "They Cost You Thousands",
    description:
      "Our advanced drainage surveys and detailed reports help you detect problems early, saving you time, money, and stress.",
    buttonText: "Explore Our Services",
    buttonHref: "/services",
  },
  {
    image: "/images/Home/herosliderfour.webp",
    heading: "Epsom’s Trusted Experts in",
    highlight: "Drain Repair & Cleaning",
    description:
      "Struggling with a blocked drain? C4 Plus Drainage Ltd provides specialist drain clearance, repair, and cleaning services across Epsom.",
    buttonText: "Fix My Drain Now!",
    buttonHref: "/contact",
  },
  {
    image: "/images/Home/heroslidersix.webp",
    heading: "London’s Drain Repair Pros",
    highlight: "Fast, Reliable, Affordable",
    description:
      "We deliver expert drain repair, unblocking, and cleaning services throughout London with cutting-edge equipment and experienced engineers.",
    buttonText: "Get Help Now!",
    buttonHref: "/contact",
  },
];

const customerAvatars = [
  "/images/customers/customer-1.jpg",
  "/images/customers/customer-2.jpg",
  "/images/customers/customer-3.jpg",
  "/images/customers/customer-4.jpg",
];

const trustItems = [
  { label: "Trusted Local Experts", Icon: ShieldCheck },
  { label: "Latest CCTV Technology", Icon: Cctv },
  { label: "Affordable Pricing", Icon: BadgePoundSterling },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative z-0 min-h-[min(100svh,720px)] w-full overflow-hidden bg-[var(--header-top)] pb-28 sm:min-h-[700px] sm:pb-28 lg:min-h-[780px] lg:pb-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Homepage hero"
    >
      {slides.map((slide, i) => {
        const active = i === index;

        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
              active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={!active}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover object-[center_30%] transition-transform duration-[7000ms] ease-out ${
                active ? "scale-105" : "scale-100"
              }`}
            />
            {/* Left overlay covers full heading column (see screenshot issue) */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,16,32,0.92)_0%,rgba(8,16,32,0.88)_42%,rgba(8,16,32,0.72)_55%,rgba(8,16,32,0.35)_68%,rgba(8,16,32,0.1)_78%,transparent_88%)]" />
            <div className="absolute inset-y-0 left-0 w-[min(100%,56rem)] bg-[linear-gradient(90deg,rgba(8,16,32,0.45)_0%,rgba(8,16,32,0.22)_75%,transparent_100%)]" />

            {/* Badge — top right; smaller & clearer on mobile */}
            <div
              className={`pointer-events-none absolute right-3 top-4 z-30 transition-all duration-700 sm:right-8 sm:top-8 lg:right-16 lg:top-12 ${
                active
                  ? "translate-y-0 opacity-100 delay-150"
                  : "-translate-y-3 opacity-0"
              }`}
            >
              <Image
                src="/badge-24-7.png"
                alt="24/7 Emergency Response"
                width={160}
                height={160}
                className="h-auto w-[64px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:w-[100px] lg:w-[120px]"
                priority={i === 0}
              />
            </div>

            <div className="relative z-10 flex h-full items-start pt-16 pb-24 sm:items-center sm:pt-10 sm:pb-20">
              <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
                <div
                  className={`max-w-4xl transition-all duration-700 ease-out lg:max-w-5xl ${
                    active
                      ? "translate-y-0 opacity-100 delay-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-[var(--brand-blue)]/20 px-3 py-1.5 backdrop-blur-sm sm:px-3.5">
                    <Droplets className="size-3.5 shrink-0 text-[var(--brand-blue)]" />
                    <span className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[11px] sm:tracking-[0.16em]">
                      24/7 Emergency Drainage Services
                    </span>
                  </div>

                  <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.22] tracking-tight text-white sm:mt-5 sm:text-[2.7rem] sm:leading-[1.3] lg:text-[3.35rem] lg:leading-[1.32]">
                    <span className="block lg:whitespace-nowrap">
                      {slide.heading}
                    </span>
                    {"headingLine2" in slide && slide.headingLine2 ? (
                      <span className="block lg:whitespace-nowrap">
                        {slide.headingLine2}
                      </span>
                    ) : null}
                    {slide.highlight ? (
                      <span className="mt-1 block text-[var(--brand-blue)] lg:whitespace-nowrap">
                        {slide.highlight}
                      </span>
                    ) : null}
                  </h1>

                  <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/88 sm:mt-5 sm:text-[15.5px] sm:leading-[1.7]">
                    {slide.description}
                  </p>

                  <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                    <Link
                      href={slide.buttonHref}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand-blue)] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_rgba(0,144,216,0.4)] transition-all hover:bg-[var(--brand-blue-hover)] sm:px-6 sm:py-3.5 sm:text-[15px]"
                    >
                      {slide.buttonText}
                      <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href="tel:07496438889"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/35 bg-white/5 px-5 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 sm:py-3.5 sm:text-[15px]"
                    >
                      <Phone className="size-4" />
                      Call Us Today
                    </a>
                  </div>

                  <div className="mt-6 hidden flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8 sm:flex">
                    {trustItems.map(({ label, Icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 text-white/90"
                      >
                        <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/10">
                          <Icon className="size-[18px] text-[var(--brand-blue)]" strokeWidth={1.75} />
                        </span>
                        <span className="text-[15px] font-medium leading-tight sm:text-base">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-7">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2.5">
                        {customerAvatars.map((src, idx) => (
                          <Image
                            key={src}
                            src={src}
                            alt={`Happy customer ${idx + 1}`}
                            width={36}
                            height={36}
                            className="size-8 rounded-full border-2 border-[var(--header-top)] object-cover sm:size-9"
                          />
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className="size-3.5 fill-[#00b67a] text-[#00b67a]"
                            />
                          ))}
                        </div>
                        <p className="mt-0.5 text-[11px] font-medium text-white/85 sm:text-[12px]">
                          Trusted by 500+ Happy Customers
                        </p>
                      </div>
                    </div>

                    <span className="hidden h-8 w-px bg-white/25 sm:block" aria-hidden="true" />

                    <Image
                      src="/images/trustpilot-logo.svg"
                      alt="Trustpilot"
                      width={120}
                      height={30}
                      className="h-5 w-auto sm:h-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-[48%] z-20 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-all hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] sm:left-5 sm:flex sm:size-11"
      >
        <ChevronLeft className="size-5" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-[48%] z-20 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-all hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] sm:right-5 sm:flex sm:size-11"
      >
        <ChevronRight className="size-5" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 sm:bottom-32 lg:bottom-36">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-[var(--brand-blue)]"
                  : "w-2 bg-white/45 hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Wave into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] leading-[0]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-14 w-full sm:h-20 lg:h-24"
        >
          <path
            d="M0,50 C220,95 420,10 720,45 C1020,80 1220,15 1440,50 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
