"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = {
  name: string;
  time: string;
  text: string;
  rating: number;
  avatarColor: string;
  photo?: string;
};

const reviews: Review[] = [
  {
    name: "S B Darby",
    time: "1 year ago",
    rating: 5,
    avatarColor: "#5b8def",
    text: "I contacted C4 Plus drainage recently to survey the drains at a property I am looking to buy. Ryan, on the phone, and Logan in person were both excellent — clear advice and professional service throughout.",
  },
  {
    name: "LINK ADMIN",
    time: "1 year ago",
    rating: 5,
    avatarColor: "#2f9e8a",
    text: "Very efficient dealing with the blocked drain which, hopefully, will solve the problem permanently. Just got on with the task, which was completed quickly and cleanly. Highly recommended.",
  },
  {
    name: "Joan Black",
    time: "1 year ago",
    rating: 5,
    avatarColor: "#e08a3a",
    text: "Fantastic service. Arrived within 90 minutes. Courtney was very thorough and professional. Did a fantastic job. Would definitely use again and recommend to friends and family.",
  },
  {
    name: "James Carter",
    time: "10 months ago",
    rating: 5,
    avatarColor: "#5a6acf",
    text: "Called out for an emergency blockage and the team arrived fast. Friendly, tidy, and explained everything clearly. Fair price and great communication from start to finish.",
  },
  {
    name: "Sarah Mitchell",
    time: "8 months ago",
    rating: 5,
    avatarColor: "#c45c8a",
    text: "Had a CCTV drain survey done before purchasing a house. The report was detailed and easy to understand. Really appreciate the honest recommendations without any pressure.",
  },
  {
    name: "Mark Thompson",
    time: "6 months ago",
    rating: 5,
    avatarColor: "#3d9b6e",
    text: "Blocked outdoor drain sorted the same day. Professional engineers, clean workmanship, and no mess left behind. C4 Plus Drainage are our go-to from now on.",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-[15px] fill-[#fbbc04] text-[#fbbc04]"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const prev = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));

  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl">
            Hear From Our Happy Customers!
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base sm:leading-[1.75]">
            Don&apos;t just take our word for it—see what our happy customers
            have to say about their experience with C4 Plus Drainage!
          </p>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous reviews"
            className="absolute -left-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--header-top)] shadow-md transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] sm:-left-3 lg:flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className="absolute -right-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--header-top)] shadow-md transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] sm:-right-3 lg:flex"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(100 / perView) * index}%)`,
              }}
            >
              {reviews.map((review, i) => {
                const isOpen = expanded === i;
                const short =
                  review.text.length > 140
                    ? `${review.text.slice(0, 140).trim()}…`
                    : review.text;

                return (
                  <div
                    key={review.name}
                    className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                  >
                    <article className="flex h-full min-h-[230px] flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,28,48,0.06)] sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white"
                            style={{ backgroundColor: review.avatarColor }}
                          >
                            {review.name.charAt(0)}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-[15px] font-semibold text-[#202124]">
                              {review.name}
                            </p>
                            <p className="text-[12px] text-[#70757a]">
                              {review.time}
                            </p>
                          </div>
                        </div>
                        <GoogleG className="size-5 shrink-0" />
                      </div>

                      <div className="mt-3.5 flex items-center gap-2">
                        <Stars />
                        <BadgeCheck className="size-4 fill-[#1a73e8] text-white" />
                      </div>

                      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#3c4043]">
                        {isOpen ? review.text : short}{" "}
                        {review.text.length > 140 && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded(isOpen ? null : i)
                            }
                            className="font-medium text-[#1a73e8] hover:underline"
                          >
                            {isOpen ? "Show less" : "Read more"}
                          </button>
                        )}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center rounded-md bg-[#007BB8] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[var(--header-top)]"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
