"use client";

import { CalendarClock, ThumbsUp, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Book Online",
    text: "Pick a time that suits you — day or night, we’re ready.",
    Icon: CalendarClock,
  },
  {
    number: "02",
    title: "We Arrive",
    text: "Our engineers reach you fast with the right tools on board.",
    Icon: Truck,
  },
  {
    number: "03",
    title: "Solve Problem",
    text: "We clear, repair, and leave your drains working properly.",
    Icon: ThumbsUp,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [visible]);

  const progressPct = ((active + 1) / steps.length) * 100;

  return (
    <section ref={ref} className="relative z-30 -mt-8 bg-transparent sm:-mt-16 lg:-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-[28px] border border-white/80 bg-white/95 px-5 py-10 shadow-[0_30px_80px_rgba(15,28,48,0.16)] backdrop-blur-md transition-all duration-700 sm:px-8 sm:py-12 lg:px-12 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* soft brand glow */}
          <div
            className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[var(--brand-blue)]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[var(--header-top)]/8 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            {/* desktop progress rail */}
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-[52px] hidden h-[2px] bg-slate-100 md:block"
              aria-hidden="true"
            >
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--brand-blue)] to-[#4fc3f0] transition-[width] duration-700 ease-out"
                style={{ width: visible ? `${progressPct}%` : "0%" }}
              />
              <span
                className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-blue)] shadow-[0_0_0_6px_rgba(0,144,216,0.18)] transition-[left] duration-700 ease-out"
                style={{ left: visible ? `${progressPct}%` : "0%" }}
              />
            </div>

            <ol className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
              {steps.map((step, index) => {
                const Icon = step.Icon;
                const isActive = visible && active === index;
                const isDone = visible && active > index;

                return (
                  <li
                    key={step.number}
                    className={`group relative text-center transition-all duration-700 ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${180 + index * 140}ms` }}
                  >
                    <div className="relative mx-auto mb-6 flex h-[104px] w-[104px] items-center justify-center">
                      {isActive && (
                        <span className="process-pulse absolute inset-2 rounded-[28px] bg-[var(--brand-blue)]/15" />
                      )}

                      <div
                        className={`relative flex size-[88px] items-center justify-center rounded-[26px] transition-all duration-500 ${
                          isActive
                            ? "scale-[1.04] bg-[var(--brand-blue)] text-white shadow-[0_18px_40px_rgba(0,144,216,0.38)]"
                            : isDone
                              ? "bg-[#eef7fd] text-[var(--brand-blue)] shadow-[0_10px_28px_rgba(26,43,75,0.08)] ring-1 ring-[var(--brand-blue)]/25"
                              : "bg-[#f5f8fc] text-[var(--brand-blue)] shadow-[0_10px_28px_rgba(26,43,75,0.06)] ring-1 ring-slate-200/70 group-hover:-translate-y-1 group-hover:shadow-[0_16px_34px_rgba(26,43,75,0.1)]"
                        }`}
                      >
                        <Icon className="size-9" strokeWidth={1.55} />
                      </div>

                      <span
                        className={`absolute -right-1 -top-1 flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-[12px] font-bold tracking-wide text-white transition-all duration-500 ${
                          isActive || isDone
                            ? "bg-[var(--brand-blue)]"
                            : "bg-[var(--header-top)]"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3
                      className={`text-[1.35rem] font-bold tracking-tight transition-colors duration-500 ${
                        isActive
                          ? "text-[var(--brand-blue)]"
                          : "text-[var(--header-top)]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2.5 max-w-[250px] text-[14.5px] leading-relaxed text-slate-600">
                      {step.text}
                    </p>

                    {/* mobile connector */}
                    {index < steps.length - 1 && (
                      <div
                        className="mx-auto mt-6 flex h-8 w-[2px] justify-center overflow-hidden rounded-full bg-slate-200 md:hidden"
                        aria-hidden="true"
                      >
                        <span
                          className={`w-full rounded-full bg-[var(--brand-blue)] transition-all duration-500 ${
                            isDone || isActive ? "h-full" : "h-0"
                          }`}
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      <div className="h-8 bg-white sm:h-10" />
    </section>
  );
}
