import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Home } from "lucide-react";
import { landline, mobile } from "@/data/contact";

export const metadata: Metadata = {
  title: "Thank You | C4 Plus Drainage",
  description:
    "Thanks for contacting C4 Plus Drainage. We have received your request and will get back to you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex-1 bg-[#f3f6f9]">
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,144,216,0.12),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[var(--brand-blue)]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 sm:size-20">
            <CheckCircle2 className="size-9 sm:size-11" strokeWidth={1.75} />
          </span>

          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            Request received
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Thank you — we&apos;ve got your message
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
            Your enquiry has been sent to our team at{" "}
            <span className="font-semibold text-[var(--header-top)]">
              info@c4plusdrainage.co.uk
            </span>
            . A specialist will contact you shortly. For urgent drain issues,
            call us anytime.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={landline.href}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--brand-blue)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,144,216,0.28)] transition-colors hover:bg-[var(--brand-blue-hover)]"
            >
              <Phone className="size-4" />
              Call {landline.display}
            </a>
            <a
              href={mobile.href}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--header-top)] transition-colors hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            >
              <Phone className="size-4" />
              {mobile.display}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] font-semibold">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--brand-blue)] hover:underline"
            >
              <Home className="size-4" />
              Back to home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--header-top)] hover:text-[var(--brand-blue)]"
            >
              Browse services
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--header-top)] hover:text-[var(--brand-blue)]"
            >
              Contact page
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
