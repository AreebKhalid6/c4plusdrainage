"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AdviceItem = {
  question: string;
  content: ReactNode;
};

const adviceItems: AdviceItem[] = [
  {
    question: "Do get your drains checked regularly",
    content: (
      <p>
        Just like your body, your drains are like the veins of your house. If
        they get clogged, the house won&apos;t function properly. It&apos;s
        recommended to have your drains checked every{" "}
        <strong className="font-semibold text-[var(--header-top)]">
          8–12 months
        </strong>
        , or more frequently if you have recurring issues due to poorly
        installed pipework. A drain health check costs around{" "}
        <strong className="font-semibold text-[var(--header-top)]">£85</strong>,
        while major repairs can run into thousands. Remember: Prevention is
        better than cure!
      </p>
    ),
  },
  {
    question: "Don’t Put These Down Your Sink",
    content: (
      <ul className="list-disc space-y-2.5 pl-5">
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Pasta:
          </strong>{" "}
          Your drainpipe has a fixed width. Once pasta goes down the drain, it
          absorbs liquid and expands, taking up more space and causing
          blockages.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Rice:
          </strong>{" "}
          Like pasta, rice absorbs water and expands in your pipes. Think about
          how rice grows in a saucepan — now imagine that happening in your
          drains!
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Egg Shells:
          </strong>{" "}
          Egg shells can contribute to clogs by creating a mass of material in
          your pipes. They&apos;re also abrasive and can cause damage over time.
          Compost them — don&apos;t flush them!
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Coffee Grounds:
          </strong>{" "}
          Plumbers often cite coffee grounds as one of the most common causes of
          kitchen sink clogs. Instead, use them in your garden — they&apos;re
          great for roses and help produce bigger blooms!
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Cooking Oils and Fats:
          </strong>{" "}
          Cooking oil hardens once it enters the drain, creating stubborn
          blockages. It&apos;s messy and harmful — reuse it or bin it!
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Food Fat:
          </strong>{" "}
          Butter, dairy, nuts, and other fatty foods should never go down the
          sink. Always bin them instead!
        </li>
      </ul>
    ),
  },
  {
    question: "Don’t Put These Down Your Toilet",
    content: (
      <ul className="list-disc space-y-2.5 pl-5">
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Baby Wipes:
          </strong>{" "}
          A good rule of thumb: “If it doesn&apos;t come out of you, it
          doesn&apos;t belong in the loo.” Baby wipes don&apos;t break down like
          toilet paper and can cause serious blockages.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Floss:
          </strong>{" "}
          Floss binds together to create a big, messy ball that can clog your
          pipes.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Tampons:
          </strong>{" "}
          While they technically come from you, tampons are not biodegradable
          and are a major cause of blockages. Contrary to popular belief, they
          cannot be flushed!
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Condoms:
          </strong>{" "}
          Condoms are not biodegradable and can cause significant blockages in
          your plumbing.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Nail Clippings:
          </strong>{" "}
          These small, sharp pieces can accumulate and contribute to clogs over
          time.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Cat Litter:
          </strong>{" "}
          Cat litter is designed to clump and absorb moisture, making it a
          nightmare for your pipes.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Soup or Food Stuffs:
          </strong>{" "}
          Food waste doesn&apos;t belong in the toilet — it can expand,
          decompose, and cause blockages.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            “Flushable” Toilet Bowl Cleaning Heads:
          </strong>{" "}
          Despite the label, these often don&apos;t break down properly and can
          clog your system.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Paper Towels:
          </strong>{" "}
          Unlike toilet paper, paper towels are designed to be durable and
          don&apos;t disintegrate in water.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Nappies:
          </strong>{" "}
          Nappies are bulky and non-biodegradable, making them a major hazard
          for your plumbing.
        </li>
        <li>
          <strong className="font-semibold text-[var(--header-top)]">
            Makeup Remover Wipes:
          </strong>{" "}
          These wipes don&apos;t break down and can bind with other materials to
          create stubborn blockages.
        </li>
      </ul>
    ),
  },
];

export default function AdviceDosDontsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#f5f9fc] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[var(--brand-blue)]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            Expert Advice
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl">
            Do&apos;s and Don&apos;ts
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Simple habits that protect your drains — and help you avoid
            expensive emergency call-outs.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3 lg:mt-12">
          {adviceItems.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  open
                    ? "border-[var(--brand-blue)]/35 bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={open}
                >
                  <span className="text-[15px] font-semibold text-[var(--header-top)] sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[var(--brand-blue)] transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200/80 px-5 pb-5 pt-4 text-[14.5px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[15px] sm:leading-[1.75]">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
