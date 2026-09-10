import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Check,
  MapPin,
  Phone,
  Replace,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { servicePageTestimonials } from "@/data/serviceTestimonials";

export const metadata: Metadata = {
  title:
    "Drain Relining and No-Dig Drain Repair | Fast, Reliable Emergency Drain Services",
  description:
    "Drain relining and no-dig drain repair from C4 Plus Drainage Ltd — CCTV surveys, pipe relining, and patch lining across London, Surrey, and the South East.",
};

const whatWeOffer = [
  {
    title: "CCTV Drain Surveys",
    text: "Hidden pipe damage is difficult to assess from ground level. A drain CCTV inspection provides a clear view inside the drainage system. It can identify cracks, gaps, root entry, displaced joints, and other faults. Accurate drain surveys also help us decide whether relining is suitable.",
    Icon: Camera,
  },
  {
    title: "Non-Dig Drain Pipe Relining",
    text: "A resin liner is inserted into the existing drain and cured against its inner wall. Once cured, the liner forms a new surface inside the old pipe. This no-dig drain repair method treats many pipe defects and helps avoid removing the existing pipe — reducing digging, mess, and reinstatement work.",
    Icon: Replace,
  },
  {
    title: "Drain Patch Lining",
    text: "Local damage does not always require a full liner. Drain patch lining targets a specific damaged section of pipe. A resin patch is positioned over the defect and cured to create a strong local repair for small cracks, holes, and failed joints.",
    Icon: Wrench,
  },
];

const whyChoose = [
  "Experienced drain specialists assess the pipe before recommending a solution.",
  "Clear advice at every stage — from inspection through to final repair.",
  "Quality checks support reliable results after installation.",
  "We match the repair method to the actual condition of the drain.",
];

const benefits = [
  {
    title: "Less Digging",
    text: "Drain relining repairs damage inside the existing pipe and can reduce the need for digging up gardens, floors, paths, and driveways.",
  },
  {
    title: "Less Disruption",
    text: "A no-dig pipe repair keeps the existing pipe in place while creating a new internal surface — ideal for homes and commercial properties.",
  },
  {
    title: "Less Reinstatement",
    text: "Repairing the existing pipe can reduce major reinstatement. Relining can seal cracks, gaps, and leaks and improve ageing pipework.",
  },
  {
    title: "Practical Trenchless Option",
    text: "Suitable faults may not need full pipe replacement. Our trenchless drain repair offers a practical alternative to excavation.",
  },
];

const faqs = [
  {
    question: "What is drain relining?",
    answer:
      "Drain relining is a method of repairing a damaged pipe from inside. A resin liner is inserted into the existing drain and cured in place. This allows us to create a new internal surface without digging along the full length of the pipe.",
  },
  {
    question: "How does no-dig drain repair work?",
    answer:
      "The process normally starts with a CCTV inspection. The pipe is assessed and prepared before a liner is installed over the damaged area. Once cured, the liner forms a firm layer inside the drain. This no-dig drain repair method can restore suitable pipework with less excavation.",
  },
  {
    question: "What problems can drain relining repair?",
    answer:
      "Relining can repair cracks and small gaps. It can also seal leaks and root entry points. Some damaged joints may also be suitable. The condition of the pipe determines which method should be used. Our inspection finds the right repair — this may include drain relining, patch repair, or another suitable solution.",
  },
  {
    question: "Can a cracked drain be repaired without digging?",
    answer:
      "Many cracked pipes can be repaired without major excavation. Cracked drain repair may involve a full liner or a local patch, depending on the size and position of the defect. The pipe needs an inspection first so we can choose a suitable repair.",
  },
  {
    question: "Is drain relining suitable for pipes under driveways?",
    answer:
      "Relining can be useful for drains beneath driveways, paths, floors, and landscaped areas. Access is normally made through suitable points in the drainage system. This allows trenchless drain repair to limit damage to surrounding surfaces.",
  },
  {
    question: "How long does drain relining last?",
    answer:
      "Service life depends on the existing pipe, liner system, installation, and drainage conditions. A correctly installed liner is designed to provide a durable repair. Suitable drain maintenance can then help identify new issues within the wider system.",
  },
  {
    question: "How much does relining cost?",
    answer:
      "Costs vary depending on pipe length, diameter, access, and the extent of damage. A CCTV survey allows us to identify the work required before recommending a solution. This provides a clearer basis for pricing than estimating without inspecting the drain.",
  },
];

export default function NonDigDrainTechnologiesPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Non-Dig Drain Technologies"
        eyebrow="C4 Plus Drainage Ltd"
        title="Drain Relining and No-Dig Drain Repair"
        description="Expert drainage solutions for residential and commercial properties — fast, reliable no-dig drain repair with less mess and disruption."
        backgroundImage="/images/Home/non-dig-drain.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/non-dig-drain.webp"
                alt="Drainage trench and grate illustrating traditional excavation versus no-dig drain repair"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                Damaged drains can cause leaks, bad smells, slow flow, and
                repeat blockages.{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  Drain relining
                </strong>{" "}
                repairs damaged pipes from the inside. It avoids digging up
                floors, paths, or driveways. This no-dig method helps us reduce
                mess and disruption.
              </p>
              <p>
                Cracks, failed joints, and root damage can reduce the
                performance of a drain pipe. A correct diagnosis helps prevent
                unnecessary work. We inspect the affected pipe before drain
                relining. This helps us find the damage and its location.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                What We Offer for Drain Relining
              </h2>
              <div className="mt-6 space-y-5">
                {whatWeOffer.map(({ title, text, Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                        <Icon className="size-5" strokeWidth={1.7} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--header-top)]">
                          {title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600 sm:text-[15px]">
                          {text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Why Choose Us for Drain Relining?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                A lasting repair depends on an accurate inspection and suitable
                installation. Clear advice is important when choosing drainage
                contractors — and each stage remains clear with our approach.
              </p>
              <ul className="mt-6 space-y-3">
                {whyChoose.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600"
                  >
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Benefits of Drain Relining and No-Dig Drain Repair
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,28,48,0.04)]"
                  >
                    <div className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                      <ShieldCheck className="size-4" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Areas We Cover
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Drainage faults affect both older and newer properties. Our
                London and Surrey drainage services include detailed inspections
                to find the cause — covering homes, commercial sites, and private
                drainage systems.
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      London:
                    </strong>{" "}
                    Drain relining, drain repair, and blocked drain repairs
                    across London
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      Surrey:
                    </strong>{" "}
                    Drain relining Surrey and drainage support for homes and
                    commercial sites
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-blue)]" />
                  <span>
                    <strong className="font-semibold text-[var(--header-top)]">
                      Local support:
                    </strong>{" "}
                    Inspection, repair, and maintenance when drainage problems
                    keep returning
                  </span>
                </li>
              </ul>
            </div>

            <ServiceFaqs
              items={faqs}
              title="Frequently Asked Questions About Drain Relining"
            />

            <div className="mt-12 overflow-hidden rounded-[24px] bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Book Your Drain Relining Service
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80">
                Recurring blockages or leaks can indicate damage within the
                drainage system. Early inspection can identify the fault before
                further problems develop. Drain relining may provide a less
                disruptive way to restore the affected pipe. Need professional
                drainage services, sewer relining, or no-dig repair? Contact us
                to arrange an assessment — we&apos;ll inspect the pipe and
                recommend a suitable repair.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--brand-blue-hover)]"
                >
                  Book Your Service
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
