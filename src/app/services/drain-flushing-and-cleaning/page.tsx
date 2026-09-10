import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  Droplets,
  Phone,
  PoundSterling,
  ShieldCheck,
  Waves,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { servicePageTestimonials } from "@/data/serviceTestimonials";

export const metadata: Metadata = {
  title: "Drain Flushing and Cleaning | Prevent Blockage and Maintain Flow",
  description:
    "Expert drain flushing and cleaning from C4 Plus Drainage Ltd — high-pressure water jetting for residential and commercial properties across the UK. 24/7 emergency available.",
};

const whyChoose = [
  {
    title: "Advanced Technology",
    text: "We use high-pressure water jetting machines to tackle even the toughest blockages.",
    Icon: Waves,
  },
  {
    title: "Comprehensive Cleaning",
    text: "Removes roots, scale, fat, concrete, and other stubborn debris.",
    Icon: Droplets,
  },
  {
    title: "Preventive Maintenance",
    text: "Regular cleaning plans to reduce future blockages and keep your drains odor-free.",
    Icon: ShieldCheck,
  },
  {
    title: "Affordable Pricing",
    text: "Unbeatable rates for both domestic and commercial clients.",
    Icon: PoundSterling,
  },
  {
    title: "24/7 Availability",
    text: "Emergency services to handle urgent drain issues anytime.",
    Icon: Clock3,
  },
];

const processSteps = [
  {
    title: "Inspection",
    text: "We start with a thorough drain inspection to identify the cause and location of the blockage.",
  },
  {
    title: "High-Pressure Jetting",
    text: "Using specialized nozzles, we blast away blockages with precision and efficiency.",
  },
  {
    title: "Flushing",
    text: "We flush the drains to ensure all debris is removed and the system is fully clear.",
  },
  {
    title: "Prevention Tips",
    text: "We provide expert advice to help you avoid future blockages.",
  },
];

const benefits = [
  {
    title: "Prevents Blockages",
    text: "Reduces the risk of clogs caused by roots, fat, and debris.",
  },
  {
    title: "Improves Flow",
    text: "Keeps your drains running smoothly and efficiently.",
  },
  {
    title: "Eco-Friendly",
    text: "High-pressure water jetting is a chemical-free, environmentally safe solution.",
  },
  {
    title: "Saves Money",
    text: "Avoid costly repairs and emergency call-outs with proactive maintenance.",
  },
];

const faqs = [
  {
    question: "How often should I clean my drains?",
    answer:
      "For most homes and businesses, we recommend professional drain cleaning every 8-12 months to prevent blockages and maintain optimal flow.",
  },
  {
    question: "Can high-pressure water jetting damage my pipes?",
    answer:
      "No, our advanced jetting technology is safe for all pipe types and effectively removes blockages without causing damage.",
  },
  {
    question: "Do you offer emergency drain cleaning services?",
    answer:
      "Yes, we’re available 24/7 to handle urgent drain issues. Just give us a call!",
  },
  {
    question: "Do you offer a guarantee on your drain cleaning services?",
    answer:
      "Yes, we stand by the quality of our work. All our drain flushing and cleaning services come with a satisfaction guarantee. If you’re not happy with the results, we’ll make it right at no extra cost.",
  },
  {
    question: "How quickly can you respond to emergency drain cleaning requests?",
    answer:
      "We pride ourselves on our fast response times. In most cases, we can be on-site within 1-2 hours of your call, ensuring your drainage emergency is resolved as quickly as possible.",
  },
];

export default function DrainFlushingPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Drain Flushing and Cleaning"
        eyebrow="C4 Plus Drainage Ltd"
        title="Expert Drain Flushing and Cleaning Services"
        description="Expert drainage solutions for residential and commercial properties — prevent blockages and maintain flow with professional high-pressure jetting."
        backgroundImage="/images/Home/drain-flushing.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/drain-flushing.webp"
                alt="C4 Plus Drainage engineer clearing a blocked toilet drain"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                Blocked drains are more than just an inconvenience—they can lead
                to costly repairs, unpleasant odors, and even health hazards if
                left untreated. At{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  C4 Plus Drainage LTD
                </strong>
                , we understand how frustrating and disruptive drainage issues
                can be, which is why we offer professional drain flushing and
                cleaning services to keep your system running smoothly. Whether
                it’s a stubborn blockage caused by roots, fat, scale, or debris,
                our team has the tools and expertise to get your drains back to
                full flow in no time.
              </p>
              <p>
                Our secret?{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  Advanced high-pressure water jetting technology
                </strong>
                . Unlike traditional methods that only address surface-level
                clogs, our state-of-the-art equipment delivers a powerful,
                targeted stream of water to blast away even the toughest
                blockages. This method is not only highly effective but also safe
                for all types of pipes, ensuring your drainage system remains
                intact and fully functional. From residential homes to large
                commercial properties, we’ve successfully cleared thousands of
                drains across the UK.
              </p>
              <p>
                What sets us apart is our commitment to quality and customer
                satisfaction. We don’t just fix the problem—we provide long-term
                solutions to prevent future issues. Many of our clients opt for
                our preventive maintenance plans, which include regular drain
                cleaning every 8-12 months. This proactive approach helps reduce
                the risk of blockages, keeps your drains odor-free, and saves you
                money in the long run. Plus, with our 24/7 emergency services,
                you can count on us to be there whenever you need us, day or
                night.
              </p>
              <p>
                When you choose C4 Plus Drainage LTD, you’re choosing a team
                that’s reliable, affordable, and dedicated to delivering
                exceptional results. Whether you’re dealing with a minor clog or
                a major drainage emergency, we’re here to help. Contact us today
                at{" "}
                <a
                  href="tel:02036573189"
                  className="font-semibold text-[var(--brand-blue)] hover:underline"
                >
                  020 3657 3189
                </a>{" "}
                or{" "}
                <a
                  href="tel:+447312125364"
                  className="font-semibold text-[var(--brand-blue)] hover:underline"
                >
                  +44 7312 125364
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@c4plusdrainage.co.uk"
                  className="font-semibold text-[var(--brand-blue)] hover:underline"
                >
                  info@c4plusdrainage.co.uk
                </a>{" "}
                to schedule your drain flushing and cleaning service and
                experience the difference of working with true drainage experts.
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
                How We Clean Your Drains
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
                Benefits of Regular Drain Cleaning
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Regular drain flushing and cleaning isn’t just about fixing
                problems—it’s about preventing them. Here’s why you should
                schedule routine maintenance:
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

            <ServiceFaqs items={faqs} />

            <div className="mt-12 overflow-hidden rounded-[24px] bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Contact Us Today!
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80">
                Don’t let blocked drains disrupt your day! Contact C4 Plus
                Drainage LTD today for fast, reliable, and affordable drain
                flushing and cleaning services. Call us at{" "}
                <a
                  href="tel:02036573189"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  020 3657 3189
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
