import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import BookingSection from "@/components/BookingSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | C4 Plus Drainage Ltd",
  description:
    "Contact C4 Plus Drainage for 24/7 drain clearance, CCTV surveys, and repairs across Surrey, London, and the South East.",
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=3+Mill+St,+Redhill+RH1+6PA,+United+Kingdom&output=embed";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=3+Mill+St,+Redhill+RH1+6PA,+United+Kingdom";

const contactDetails = [
  {
    label: "Address",
    value: "3 Mill St, Redhill RH1 6PA, United Kingdom",
    href: MAP_LINK,
    Icon: MapPin,
  },
  {
    label: "Email",
    value: "info@c4plusdrainage.co.uk",
    href: "mailto:info@c4plusdrainage.co.uk",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "020 3657 3189",
    href: "tel:02036573189",
    Icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Contact"
        eyebrow="We're Here 24/7"
        title="Get In Touch"
        description="Book online or call us anytime — our friendly specialists are ready to help 24/7 across Surrey, London, and the South East."
        backgroundImage="/images/Home/vanimage.png"
        hideCurve
      />

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {contactDetails.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:border-[var(--brand-blue)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                <Icon className="size-5" />
              </span>
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-wide text-slate-500">
                {label}
              </p>
              <p className="mt-1 text-[15px] font-semibold text-[var(--header-top)]">
                {value}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f9fc] pb-14 pt-2 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Find Us
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Our Location
              </h2>
              <p className="mt-2 text-[15px] text-slate-600">
                3 Mill St, Redhill RH1 6PA, United Kingdom
              </p>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#007BB8] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--header-top)]"
            >
              <MapPin className="size-4" />
              Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_18px_50px_rgba(15,28,48,0.1)]">
            <iframe
              title="C4 Plus Drainage location — 3 Mill St, Redhill RH1 6PA"
              src={MAP_EMBED_SRC}
              className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <BookingSection imageSrc="/images/Home/contactformimage.webp" />
    </main>
  );
}
