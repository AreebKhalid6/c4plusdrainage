"use client";

import { useMemo, useState } from "react";
import { ExternalLink, MapPin, Star } from "lucide-react";
import {
  GOOGLE_REVIEW_URL,
  testimonials,
  testimonialsSummary,
  type Testimonial,
} from "@/data/testimonials";

type SortOption = "newest" | "highest" | "lowest";

const timeRank: Record<string, number> = {
  "2 months ago": 2,
  "3 months ago": 3,
  "4 months ago": 4,
  "5 months ago": 5,
  "7 months ago": 7,
  "8 months ago": 8,
  "9 months ago": 9,
  "11 months ago": 11,
  "a year ago": 12,
  "2 years ago": 24,
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating
              ? "fill-[#fbbc04] text-[#fbbc04]"
              : "fill-slate-200 text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";
  const colors = [
    "#5b8def",
    "#2f9e8a",
    "#e08a3a",
    "#5a6acf",
    "#c45c8a",
    "#3d9b6e",
    "#007BB8",
  ];
  const color = colors[initial.charCodeAt(0) % colors.length];

  return (
    <span
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,28,48,0.05)] sm:p-6">
      <div className="flex items-start gap-3">
        <Avatar name={review.name} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-[15px] font-bold text-[var(--header-top)]">
                {review.name}
              </h3>
              {review.meta ? (
                <p className="mt-0.5 text-[12px] text-slate-500">{review.meta}</p>
              ) : null}
            </div>
            <p className="text-[12px] text-slate-500">
              {review.time}
            </p>
          </div>
          <div className="mt-2">
            <Stars rating={review.rating} />
          </div>
        </div>
      </div>

      {review.text ? (
        <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-slate-600 sm:text-[15px] sm:leading-[1.75]">
          {review.text}
        </p>
      ) : (
        <p className="mt-4 flex-1 text-[14px] italic text-slate-400">
          Rated {review.rating} stars on Google
        </p>
      )}

      {review.ownerReply ? (
        <div className="mt-5 rounded-xl border border-slate-100 bg-[#f8fafc] px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[13px] font-semibold text-[var(--header-top)]">
              Response from C4 Plus Drainage
            </p>
            {review.ownerReplyTime ? (
              <p className="text-[12px] text-slate-500">{review.ownerReplyTime}</p>
            ) : null}
          </div>
          <p className="mt-2 line-clamp-4 text-[13.5px] leading-relaxed text-slate-600 sm:text-[14px] sm:leading-[1.7]">
            {review.ownerReply}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export default function TestimonialsPageContent() {
  const [sort, setSort] = useState<SortOption>("newest");

  const sorted = useMemo(() => {
    const list = [...testimonials];
    if (sort === "highest") {
      return list.sort((a, b) => b.rating - a.rating || (timeRank[a.time] ?? 99) - (timeRank[b.time] ?? 99));
    }
    if (sort === "lowest") {
      return list.sort((a, b) => a.rating - b.rating || (timeRank[a.time] ?? 99) - (timeRank[b.time] ?? 99));
    }
    return list.sort(
      (a, b) => (timeRank[a.time] ?? 99) - (timeRank[b.time] ?? 99)
    );
  }, [sort]);

  return (
    <section className="relative z-10 -mt-6 overflow-hidden bg-white py-16 sm:-mt-8 sm:py-20 lg:-mt-10 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Summary bar */}
        <div className="flex flex-col gap-6 rounded-[24px] border border-slate-200 bg-[#f8fafc] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
              {testimonialsSummary.business}
            </h2>
            <p className="mt-2 flex items-start gap-2 text-[14px] text-slate-600 sm:text-[15px]">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--brand-blue)]" />
              {testimonialsSummary.address}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className="text-3xl font-bold text-[var(--header-top)]">
                {testimonialsSummary.rating}
              </p>
              <div>
                <Stars rating={5} />
                <p className="mt-1 text-[13px] text-slate-500">
                  {testimonials.length} reviews on this page
                </p>
              </div>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BB8] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,123,184,0.28)] transition-all hover:bg-[var(--header-top)]"
          >
            Write a Review
            <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Sort */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[14px] font-medium text-slate-600">
            Showing all customer reviews
          </p>
          <label className="flex items-center gap-2 text-[14px] text-slate-600">
            <span className="font-medium">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[14px] font-semibold text-[var(--header-top)] outline-none focus:border-[var(--brand-blue)]"
            >
              <option value="newest">Newest</option>
              <option value="highest">Highest rating</option>
              <option value="lowest">Lowest rating</option>
            </select>
          </label>
        </div>

        {/* Reviews list */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {sorted.map((review) => (
            <ReviewCard key={`${review.name}-${review.time}`} review={review} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[24px] bg-[var(--header-top)] px-6 py-10 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Share your experience
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/75">
            Helped by C4 Plus Drainage? Leave a Google review — it helps other
            homeowners and businesses find trusted local drainage experts.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#007BB8] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white hover:text-[var(--header-top)]"
          >
            Write a Review
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
