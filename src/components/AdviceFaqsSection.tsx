"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  content: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "How do you know if sewer cleaning is required?",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Odour and smell issues</li>
        <li>Rodent infestation</li>
      </ul>
    ),
  },
  {
    question: "Why we carry out sewer cleaning?",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-semibold text-[var(--header-top)]">Domestic</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>It has proven to be cost effective</li>
            <li>Reduces potential chance of blockages</li>
            <li>Reduces the likelihood of flooding and risk to health</li>
            <li>Financial appreciation</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[var(--header-top)]">Commercial</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Financial gains</li>
            <li>Prevention of internal / external sewage flooding</li>
            <li>Maintenance reduces damage</li>
            <li>Less disturbance to business</li>
            <li>Reduces the emergency call outs</li>
            <li>Clean drains</li>
            <li>Reduces the likelihood of rodent infestation</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "What was the cause of the blockage?",
    content: (
      <div className="space-y-3">
        <p>
          The most common cause of sewer blockages is misuse, but reasons
          include:
        </p>
        <ul className="list-disc space-y-2.5 pl-5">
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Fat, Oil, Grease, and Food Waste:
            </strong>{" "}
            These substances can solidify and clog pipes over time.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Baby Wipes, Face Wipes, Sanitary Products, Cotton Buds &amp; Hair:
            </strong>{" "}
            Non-biodegradable items that don&apos;t break down easily.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Conventional Cleaning Products:
            </strong>{" "}
            Some chemicals can cause buildup or damage pipes.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Debris, Scale, and Silt:
            </strong>{" "}
            Accumulation of dirt and sediment in the pipes.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Rodent Infestation:
            </strong>{" "}
            Rodents can cause physical damage or blockages.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Defective Pipework:
            </strong>{" "}
            Cracked, collapsed, or poorly installed pipes.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Pipe Obstructions:
            </strong>{" "}
            Foreign objects or tree roots invading the pipes.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Why did it block?",
    content: (
      <div className="space-y-3">
        <p>
          There are many reasons why and how a blockage accumulates. The most
          common causes include:
        </p>
        <ul className="list-disc space-y-2.5 pl-5">
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Lack of Maintenance:
            </strong>{" "}
            Neglecting regular cleaning and inspections of the drainage network.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Sewer Misuse/Abuse:
            </strong>{" "}
            Flushing or disposing of incorrect materials, such as food waste,
            fat, oil, grease, and wipes. Remember: Bin it, don&apos;t flush it!
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Construction Debris:
            </strong>{" "}
            Blockages often occur after property renovations or developments,
            where building materials or debris enter the drainage network.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Silt and Scale Buildup:
            </strong>{" "}
            Slow-draining drains and stagnant water create silt and scale
            compounds, typically accumulating at joint connections.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Rodent Infestation:
            </strong>{" "}
            Rats can cause severe blockages by either infesting pipes (leading
            to debris buildup) or causing structural damage to the pipework.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Root Penetration and Ground Movement:
            </strong>{" "}
            Tree roots can invade pipes, and ground movement can damage or
            misalign the drainage network.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the signs of blockages?",
    content: (
      <div className="space-y-3">
        <p>Common signs that indicate a drainage blockage include:</p>
        <ul className="list-disc space-y-2.5 pl-5">
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Smells and Odours:
            </strong>{" "}
            Unpleasant smells coming from drains or manholes.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Toilet Water Rises When Flushed:
            </strong>{" "}
            Water backing up instead of draining properly.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Slow Draining:
            </strong>{" "}
            Water taking longer than usual to drain from sinks, showers, or
            baths.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Gurgling Noises:
            </strong>{" "}
            Strange noises coming from drains or pipes when water is running.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Regular Repeat Blockages:
            </strong>{" "}
            Frequent reoccurring blockages in the same area.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Will it block again?",
    content: (
      <div className="space-y-3">
        <p>
          Every job is different. One of our technical drainage specialists will
          examine the extent of the blockage using our advanced CCTV equipment
          to pinpoint the exact cause and location of the issue.
        </p>
        <p>
          The engineer will then update you and recommend the best solution to
          prevent future blockages.
        </p>
      </div>
    ),
  },
  {
    question: "When should we get our sewer/drains cleaned?",
    content: (
      <div className="space-y-3">
        <p>
          All properties have different timescales and reasons for cleaning,
          depending on waste usage.
        </p>
        <p>However, as a general guideline:</p>
        <ul className="list-disc space-y-2.5 pl-5">
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Standard Domestic Properties:
            </strong>{" "}
            Every 8–12 months.
          </li>
          <li>
            <strong className="font-semibold text-[var(--header-top)]">
              Commercial Properties (e.g., cafes, restaurants):
            </strong>{" "}
            Every 6–8 months due to higher waste disposal.
          </li>
        </ul>
        <p>
          If you have any specific queries, feel free to contact us, and one of
          our experts will explain in detail.
        </p>
      </div>
    ),
  },
  {
    question: "Is a sewer repair covered by my insurance?",
    content: (
      <p>
        Each insurance company has different policies regarding coverage.
        It&apos;s best to seek advice directly from your insurance provider or
        consult one of our professionals for guidance.
      </p>
    ),
  },
];

export default function AdviceFaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-10 -mt-6 overflow-hidden bg-white py-16 sm:-mt-8 sm:py-20 lg:-mt-10 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--brand-blue)]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl">
            Drainage FAQs &amp; Expert Answers
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Clear answers on sewer cleaning, blockage causes, warning signs, and
            when to book maintenance.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3 lg:mt-12">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  open
                    ? "border-[var(--brand-blue)]/35 bg-[#f8fafc]"
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
                    {faq.question}
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
                      {faq.content}
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
