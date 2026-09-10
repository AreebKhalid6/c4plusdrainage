import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  Droplets,
  HardHat,
  Lightbulb,
  Phone,
  Users,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { servicePageTestimonials } from "@/data/serviceTestimonials";

export const metadata: Metadata = {
  title: "24/7 Blocked Drain Clearance | Fast, Reliable Emergency Drain Services",
  description:
    "24/7 emergency blocked drain clearance from C4 Plus Drainage Ltd across Surrey, London, and the South East. Rapid response, CCTV inspection, and high-pressure jetting.",
};

const whyChoose = [
  {
    title: "24/7 Availability",
    text: "We’re here for you anytime, day or night.",
    Icon: Clock3,
  },
  {
    title: "Rapid Response",
    text: "Our trained specialists arrive quickly to resolve your issue.",
    Icon: Zap,
  },
  {
    title: "Expert Technicians",
    text: "Fully qualified and highly experienced engineers.",
    Icon: HardHat,
  },
  {
    title: "Customer Focused",
    text: "We keep you informed every step of the way.",
    Icon: Users,
  },
  {
    title: "Innovative Solutions",
    text: "Solving problems where others have failed.",
    Icon: Lightbulb,
  },
];

const processSteps = [
  {
    title: "Emergency Call-Out",
    text: "Contact us, and we’ll dispatch a team immediately.",
  },
  {
    title: "Thorough Inspection",
    text: "Use CCTV drain cameras to identify the cause and location of the blockage.",
  },
  {
    title: "Advanced Clearing",
    text: "Employ high-pressure water jetting and other cutting-edge techniques to clear the blockage.",
  },
  {
    title: "Prevention Tips",
    text: "Provide actionable advice to help you avoid future blockages.",
  },
];

const benefits = [
  {
    title: "Fast and Reliable",
    text: "We get the job done quickly and efficiently.",
  },
  {
    title: "Comprehensive Service",
    text: "From diagnosis to clearance, we handle it all.",
  },
  {
    title: "Eco-Friendly Solutions",
    text: "High-pressure water jetting is safe and chemical-free.",
  },
  {
    title: "Cost-Effective",
    text: "Prevent costly repairs with our proactive approach.",
  },
];

const faqs = [
  {
    question: "What causes blocked drains?",
    answer:
      "Blocked drains can be caused by a variety of factors, including hair, grease, food waste, tree roots, and foreign objects. Over time, these materials build up and restrict water flow, leading to blockages.",
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer:
      "We pride ourselves on our rapid response times. Once you contact us, we aim to dispatch a team within 60-90 minutes, depending on your location.",
  },
  {
    question: "Do you offer services outside of business hours?",
    answer:
      "Yes! Our 24/7 emergency blocked drain clearance services are available anytime, including nights, weekends, and holidays. We’re always here when you need us.",
  },
  {
    question: "Is high-pressure water jetting safe for my pipes?",
    answer:
      "Absolutely. High-pressure water jetting is a safe and effective method for clearing blockages. It’s non-invasive, eco-friendly, and suitable for most types of pipes.",
  },
  {
    question: "How can I prevent future blockages?",
    answer:
      "To avoid future blockages, we recommend regular maintenance, avoiding flushing non-biodegradable items, and disposing of grease and food waste properly. Our team can also provide personalized prevention tips after clearing your drains.",
  },
];

export default function BlockedDrainClearancePage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="24/7 Blocked Drain Clearance"
        eyebrow="C4 Plus Drainage Ltd"
        title="24/7 Blocked Drain Clearance"
        description="Fast, reliable emergency drain services — expert drainage solutions for residential and commercial properties across Surrey, London, and the South East."
        backgroundImage="/images/Home/blocked-drain.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/blocked-drain.webp"
                alt="Outdoor drain grate in an excavated trench during blocked drain clearance"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                A blocked drain can cause major disruptions, unpleasant odors,
                and even property damage if left untreated. At{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  C4 Plus Drainage LTD
                </strong>
                , we specialize in 24/7 emergency blocked drain clearance to
                resolve your issues quickly and efficiently. Whether it’s a
                slow-draining toilet, an overflowing sink, or a gurgling drain,
                our team is available round the clock to get your system back to
                full flow.
              </p>
              <p>
                Blocked drains are more than just an inconvenience—they can lead
                to serious plumbing issues, health hazards, and costly repairs if
                not addressed promptly. That’s why we prioritize rapid response
                times and effective solutions to ensure your drainage system is
                functioning perfectly. Our team is equipped with the latest tools
                and technology to handle blockages of any size or complexity,
                from minor clogs to major sewer line backups.
              </p>
              <p>
                At C4 Plus Drainage LTD, we understand that drainage emergencies
                don’t wait for business hours. Whether it’s the middle of the
                night, a weekend, or a holiday, our expert technicians are always
                on standby to provide reliable and professional service. With
                years of experience and a commitment to customer satisfaction,
                we’ve become the go-to drainage specialists across Surrey,
                London, and the South East. Let us take the stress out of your
                drainage problems and restore peace of mind with our fast,
                efficient, and affordable solutions.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Why Choose Us?
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {whyChoose.map(({ title, text, Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-3 text-[16px] font-bold text-[var(--header-top)]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Our Process
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                How We Clear Blocked Drains
              </p>
              <ol className="mt-6 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[13px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Benefits of Choosing C4 Plus Drainage
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                When you choose C4 Plus Drainage LTD, you’re choosing a team
                that’s dedicated to excellence. Here’s why our customers trust
                us:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,28,48,0.04)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white">
                        <Check className="size-3.5" strokeWidth={2.5} />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Areas We Cover
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Based in Redhill, Surrey, we provide 24/7 blocked drain clearance
                services to homes and businesses across:
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <Droplets className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      Surrey:
                    </strong>{" "}
                    Epsom, Leatherhead, Caterham, Redhill
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      London:
                    </strong>{" "}
                    Purley, Croydon, and surrounding areas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      South East:
                    </strong>{" "}
                    Fast response across the region
                  </span>
                </li>
              </ul>
            </div>

            <ServiceFaqs items={faqs} />

            <div className="mt-12 overflow-hidden rounded-[24px] bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Contact Us Today!
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80">
                Don’t let a blocked drain ruin your day! Contact C4 Plus Drainage
                LTD now for fast, reliable, and affordable 24/7 blocked drain
                clearance services. Call us at{" "}
                <a
                  href="tel:02036573189"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  020 3657 3189
                </a>{" "}
                or{" "}
                <a
                  href="tel:+447312125364"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  +44 7312 125364
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@c4plusdrainage.co.uk"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  info@c4plusdrainage.co.uk
                </a>{" "}
                to schedule your service or request a free quote!
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--brand-blue-hover)]"
                >
                  Schedule Your Service
                </Link>
                <a
                  href="tel:02036573189"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
              </div>
            </div>

            <ServiceTestimonials items={servicePageTestimonials} />
          </div>

          <ServiceSidebar />
        </div>
      </section>
    </main>
  );
}
