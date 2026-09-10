"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { recentPosts, serviceNavItems } from "@/data/serviceNav";

const quoteServices = serviceNavItems.map((item) => item.label);

export default function ServiceSidebar() {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      {/* Our Services */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,28,48,0.06)]">
        <div className="border-b border-slate-100 bg-[var(--header-top)] px-5 py-4">
          <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">
            Our Services
          </h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {serviceNavItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-5 py-3.5 text-[14px] font-medium transition-colors ${
                    active
                      ? "bg-[var(--brand-blue)]/8 text-[var(--brand-blue)]"
                      : "text-[var(--header-top)] hover:bg-slate-50 hover:text-[var(--brand-blue)]"
                  }`}
                >
                  <ChevronRight className="size-3.5 shrink-0 text-[var(--brand-blue)]" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Free Quote */}
      <div className="overflow-hidden rounded-2xl bg-[var(--header-top)] p-5 shadow-[0_10px_30px_rgba(15,28,48,0.12)] sm:p-6">
        <h2 className="text-xl font-bold text-white">Get a Free Quote!</h2>
        <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">
          Need a quick and accurate estimate for your drainage project? Fill out
          the form and our team will get back to you with a competitive price.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-white/10 bg-[#243447] px-3.5 py-3 text-[13.5px] text-white outline-none placeholder:text-slate-400 focus:border-[var(--brand-blue)]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg border border-white/10 bg-[#243447] px-3.5 py-3 text-[13.5px] text-white outline-none placeholder:text-slate-400 focus:border-[var(--brand-blue)]"
          />
          <label className="relative block">
            <select
              name="service"
              required
              defaultValue=""
              className="w-full appearance-none rounded-lg border border-white/10 bg-[#243447] px-3.5 py-3 pr-9 text-[13.5px] text-white outline-none focus:border-[var(--brand-blue)]"
            >
              <option value="" disabled>
                Choose a Service
              </option>
              {quoteServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            className="w-full rounded-lg border border-white/10 bg-[#243447] px-3.5 py-3 text-[13.5px] text-white outline-none placeholder:text-slate-400 focus:border-[var(--brand-blue)]"
          />
          <input
            type="text"
            name="location"
            required
            placeholder="Enter Location"
            className="w-full rounded-lg border border-white/10 bg-[#243447] px-3.5 py-3 text-[13.5px] text-white outline-none placeholder:text-slate-400 focus:border-[var(--brand-blue)]"
          />
          <textarea
            name="message"
            rows={3}
            required
            placeholder="How can we help?"
            className="w-full resize-none rounded-lg border border-white/10 bg-[#243447] px-3.5 py-3 text-[13.5px] text-white outline-none placeholder:text-slate-400 focus:border-[var(--brand-blue)]"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brand-blue)] px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--brand-blue-hover)]"
          >
            Submit Request
            <ArrowRight className="size-4" />
          </button>
          {submitted ? (
            <p className="text-[13px] font-medium text-emerald-300">
              Thanks — we&apos;ll contact you shortly.
            </p>
          ) : null}
        </form>
      </div>

      {/* Recent Posts */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,28,48,0.06)]">
        <div className="border-b border-slate-100 px-5 py-4">
          <h2 className="text-[15px] font-bold uppercase tracking-wide text-[var(--header-top)]">
            Recent Posts
          </h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {recentPosts.map((post) => (
            <li key={post.title}>
              <Link href={post.href} className="block px-5 py-4 transition-colors hover:bg-slate-50">
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
                  {post.date}
                </p>
                <p className="mt-1 text-[13.5px] font-medium leading-snug text-[var(--header-top)]">
                  {post.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
