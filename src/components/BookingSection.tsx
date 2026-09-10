"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";
import { submitLead, valuesFromFormData } from "@/lib/submitLead";

const services = [
  "Drain Flushing and Cleaning",
  "24/7 Blocked Drain Clearance",
  "CCTV Drain Surveys",
  "Non-Dig Drain Technologies",
  "Civil Drain Repairs",
  "Rodent Infestation",
  "Gutter Cleaning",
];

type BookingSectionProps = {
  imageSrc?: string;
};

export default function BookingSection({
  imageSrc = "/images/Home/contactimage.webp",
}: BookingSectionProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    try {
      const formData = new FormData(event.currentTarget);
      await submitLead(
        valuesFromFormData(formData, "Online Booking form")
      );
      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setPending(false);
    }
  }

  return (
    <section className="bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] shadow-[0_28px_70px_rgba(15,28,48,0.16)] sm:rounded-[28px] lg:rounded-[32px]">
        <div className="grid lg:grid-cols-2">
          {/* Form side */}
          <div className="relative bg-[var(--header-top)] px-4 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div
              className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[var(--brand-blue)]/15 blur-3xl"
              aria-hidden="true"
            />

            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              Book Online
            </p>
            <h2 className="mt-3 max-w-md text-[1.75rem] font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Online Booking For Appointments
            </h2>

            <form onSubmit={handleSubmit} className="relative mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={pending}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-white/10 bg-[#243447] px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-slate-400 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 disabled:opacity-60"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={pending}
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-white/10 bg-[#243447] px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-slate-400 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 disabled:opacity-60"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="relative block">
                  <span className="sr-only">Choose a Service</span>
                  <select
                    name="service"
                    required
                    disabled={pending}
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-white/10 bg-[#243447] px-4 py-3.5 pr-10 text-[14px] text-white outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 disabled:opacity-60"
                  >
                    <option value="" disabled className="text-slate-500">
                      Choose a Service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service} className="text-[var(--header-top)]">
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    disabled={pending}
                    placeholder="Phone"
                    className="w-full rounded-lg border border-white/10 bg-[#243447] px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-slate-400 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 disabled:opacity-60"
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">Enter Location</span>
                <input
                  type="text"
                  name="location"
                  required
                  disabled={pending}
                  placeholder="Enter Location"
                  className="w-full rounded-lg border border-white/10 bg-[#243447] px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-slate-400 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 disabled:opacity-60"
                />
              </label>

              <label className="block">
                <span className="sr-only">How can we help?</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={pending}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#243447] px-4 py-3.5 text-[14px] text-white outline-none placeholder:text-slate-400 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 disabled:opacity-60"
                />
              </label>

              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,144,216,0.3)] transition-colors hover:bg-[var(--brand-blue-hover)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {pending ? "Sending…" : "Submit Request"}
              </button>

              {error ? (
                <p className="text-[14px] font-medium text-red-300" role="alert">
                  {error}
                </p>
              ) : null}
            </form>
          </div>

          {/* Image side */}
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src={imageSrc}
              alt="C4 Plus Drainage Ltd service vans"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--header-top)]/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
