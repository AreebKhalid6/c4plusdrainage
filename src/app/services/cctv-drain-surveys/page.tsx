import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Check,
  Eye,
  FileText,
  HardHat,
  Phone,
  PoundSterling,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { servicePageTestimonials } from "@/data/serviceTestimonials";

export const metadata: Metadata = {
  title: "CCTV Drain Surveys | Advanced Drain Inspection & Problem Resolution",
  description:
    "Advanced CCTV drain surveys from C4 Plus Drainage Ltd — high-tech inspection, CCTV Look-See service, and expert problem resolution for residential and commercial properties.",
};

const whyChoose = [
  {
    title: "Advanced Technology",
    text: "State-of-the-art CCTV cameras for precise diagnostics.",
    Icon: Camera,
  },
  {
    title: "Expert Engineers",
    text: "Highly trained specialists who know how to fix your drainage issues.",
    Icon: HardHat,
  },
  {
    title: "Cost-Effective Solutions",
    text: "Our ‘CCTV Look-See’ service offers direct, affordable inspections.",
    Icon: PoundSterling,
  },
  {
    title: "Transparent Process",
    text: "On-site inspections with clear explanations for customers.",
    Icon: Eye,
  },
  {
    title: "Health & Safety",
    text: "Minimal manual drain entry, reducing risks and ensuring safety.",
    Icon: ShieldCheck,
  },
];

const processSteps = [
  {
    title: "Inspection",
    text: "Our engineers use CCTV cameras to capture high-quality images of your drains.",
  },
  {
    title: "Diagnosis",
    text: "Pinpoint the cause of blockages, cracks, or other issues with precision.",
  },
  {
    title: "Explanation",
    text: "On-site, we explain the problem in an easy-to-understand way.",
  },
  {
    title: "Solution",
    text: "Recommend the best course of action, from clearing blockages to repairing damage.",
  },
  {
    title: "Reporting",
    text: "Provide detailed images and a technical report outlining the issues and solutions.",
  },
];

const benefits = [
  {
    title: "Accurate Diagnostics",
    text: "Detect even hairline cracks and minor flaws with crystal-clear images.",
  },
  {
    title: "Pest Prevention",
    text: "Identify entry points for rodents and other pests.",
  },
  {
    title: "Comprehensive Reports",
    text: "Receive detailed images and a technical report with actionable recommendations.",
  },
  {
    title: "Insurance Support",
    text: "We can advise on liability for insurance claims.",
  },
  {
    title: "Eco-Friendly",
    text: "Minimize manual intervention, reducing environmental impact.",
  },
];

const faqs = [
  {
    question: "What is a CCTV drain survey?",
    answer:
      "A CCTV drain survey involves using advanced camera technology to inspect the inside of your drainage system. It helps identify issues like blockages, cracks, root intrusions, and pest entry points without the need for disruptive digging.",
  },
  {
    question: "How long does a CCTV drain survey take?",
    answer:
      "The duration depends on the complexity of your drainage system, but most surveys are completed within 1-2 hours. Our ‘CCTV Look-See’ service provides a quicker, on-the-spot assessment for straightforward issues.",
  },
  {
    question: "Can I see the footage during the inspection?",
    answer:
      "Yes! With our ‘CCTV Look-See’ service, you can watch the live footage with our engineers, who will explain the findings in an easy-to-understand way.",
  },
  {
    question: "Is a CCTV drain survey expensive?",
    answer:
      "Our surveys are cost-effective, especially when compared to the potential costs of unresolved drainage issues. We also offer the ‘CCTV Look-See’ service as a more affordable option for quick inspections.",
  },
  {
    question: "What happens after the survey?",
    answer:
      "After the survey, you’ll receive detailed images of your drains and a technical report outlining the issues and recommended solutions. We can also advise on insurance claims if needed.",
  },
];

export default function CctvDrainSurveysPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="CCTV Drain Surveys"
        eyebrow="C4 Plus Drainage Ltd"
        title="CCTV Drain Surveys | Advanced Drain Inspection & Problem Resolution"
        description="We are specialists standing by — equipped with high-tech CCTV technology for advanced drain inspection and problem resolution."
        backgroundImage="/images/Home/cctv-drain-survey.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/cctv-drain-survey.webp"
                alt="Professional drainage engineer conducting a high-tech CCTV drain survey inside a large pipe"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
              <Camera className="size-3.5" />
              High-Tech CCTV Technology
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                Don’t put up with recurring blocked drains. At{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  C4 Plus Drainage
                </strong>
                , our experienced specialists use high-tech CCTV technology to
                identify the root cause of your drainage issues and provide the
                right solution. Your problem becomes our resolution—quickly,
                efficiently, and with minimal disruption.
              </p>
              <p>
                Recurring blockages can be frustrating, costly, and damaging to
                your property. Traditional methods of diagnosing drainage
                problems often involve guesswork, unnecessary digging, and higher
                costs. With our CCTV drain surveys, we eliminate the guesswork.
                Our advanced cameras provide a clear, real-time view of your
                drainage system, allowing us to pinpoint issues like blockages,
                cracks, root intrusions, and pest entry points with precision.
              </p>
              <p>
                We understand that full, coded CCTV surveys can sometimes be
                time-consuming and costly. That’s why we offer our unique{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  ‘CCTV Look-See’
                </strong>{" "}
                service—a more direct and cost-effective approach. During an
                on-site inspection, our engineers will guide you through the
                process, showing you live footage of your drains and explaining
                the issues in simple terms. This transparency ensures you’re
                fully informed and confident in the solutions we recommend.
              </p>
              <p>
                At C4 Plus Drainage, we’re committed to providing fast, reliable,
                and affordable drainage solutions. Whether it’s a minor blockage
                or a complex drainage issue, our CCTV technology and expert
                engineers ensure your problem is resolved efficiently. Say
                goodbye to recurring drain issues and hello to peace of mind with
                our professional CCTV drain services.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Why Choose Our CCTV Drain Services?
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
                How We Conduct CCTV Drain Surveys:
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
                Benefits of CCTV Drain Surveys
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Here’s why our customers trust C4 Plus Drainage for CCTV drain
                surveys:
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

            <div className="mt-12 overflow-hidden rounded-[24px] border border-[var(--brand-blue)]/20 bg-[linear-gradient(135deg,#f0f9fd_0%,#ffffff_60%)] p-6 sm:p-8">
              <div className="mb-3 inline-flex size-11 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                <FileText className="size-5" strokeWidth={1.7} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-[1.75rem]">
                Our Unique ‘CCTV Look-See’ Service
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
                We understand that full, coded CCTV surveys can be time-consuming
                and costly. That’s why we offer the ‘CCTV Look-See’ service—a
                direct, cost-effective drain inspection conducted on-site with
                the customer. This allows you to witness the inspection firsthand
                while we explain the situation in simple terms.
              </p>
            </div>

            <ServiceFaqs items={faqs} />

            <div className="mt-12 overflow-hidden rounded-[24px] bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Contact Us Today!
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80">
                Don’t let recurring drainage issues disrupt your life. Contact C4
                Plus Drainage today for advanced CCTV drain surveys and expert
                solutions. Call us at{" "}
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
