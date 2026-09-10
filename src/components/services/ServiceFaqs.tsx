"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

export default function ServiceFaqs({
  items,
  title = "Frequently Asked Questions",
}: {
  items: FaqItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-3">
        {items.map((faq, index) => {
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
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-[15px] font-semibold text-[var(--header-top)]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-[var(--brand-blue)] transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-200/80 px-5 pb-4 pt-3 text-[14.5px] leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
