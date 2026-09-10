import Link from "next/link";
import { Phone } from "lucide-react";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import { serviceAreaGoogleReviews } from "@/data/service-areas/reviews";
import type {
  AreaSection,
  ServiceAreaPage,
} from "@/data/service-areas/types";
import { serviceAreas } from "@/data/service-areas";

function SectionBlock({ section }: { section: AreaSection }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-[1.75rem]">
        {section.title}
      </h2>
      {section.paragraphs?.length ? (
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 64)}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {section.subsections?.length ? (
        <div className="mt-6 space-y-6">
          {section.subsections.map((sub) => (
            <div key={sub.title}>
              <h3 className="text-lg font-semibold text-[var(--header-top)] sm:text-xl">
                {sub.title}
              </h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
                {sub.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

type ServiceAreaContentProps = {
  area: ServiceAreaPage;
  showAreaLinks?: boolean;
};

export default function ServiceAreaContent({
  area,
  showAreaLinks = false,
}: ServiceAreaContentProps) {
  return (
    <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
        <div>
          <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
            {area.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[var(--brand-blue)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#007bb8]"
            >
              Get a Free Quote
            </Link>
          </div>

          {area.sections.map((section) => (
            <SectionBlock key={section.title} section={section} />
          ))}

          {area.process ? (
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-[1.75rem]">
                {area.process.title}
              </h2>
              {area.process.intro?.length ? (
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
                  {area.process.intro.map((paragraph) => (
                    <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              <ol className="mt-6 space-y-6">
                {area.process.steps.map((step, index) => (
                  <li key={step.title}>
                    <h3 className="text-lg font-semibold text-[var(--header-top)] sm:text-xl">
                      <span className="mr-2 text-[var(--brand-blue)]">
                        {index + 1}.
                      </span>
                      {step.title.replace(/^Step \d+\s*[–-]\s*/i, "")}
                    </h3>
                    <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
                      {step.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {area.extraSections?.map((section) => (
            <SectionBlock key={section.title} section={section} />
          ))}

          {showAreaLinks ? (
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-[1.75rem]">
                Local Service Areas
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                Explore drain cleaning support near you:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {serviceAreas.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/locations/${item.slug}`}
                      className="flex items-center rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-[14px] font-medium text-[var(--header-top)] transition-colors hover:border-[var(--brand-blue)]/40 hover:bg-[var(--brand-blue)]/5 hover:text-[var(--brand-blue)]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <ServiceTestimonials
            items={serviceAreaGoogleReviews}
            title={area.testimonialsTitle}
          />

          {area.faqs.length > 0 ? (
            <ServiceFaqs items={area.faqs} title={area.faqTitle} />
          ) : null}

          <div className="mt-12 overflow-hidden rounded-2xl bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {area.closing.title}
            </h2>
            <div className="mt-3 max-w-2xl space-y-3 text-[15px] leading-relaxed text-white/75">
              {area.closing.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:02036573189"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-blue)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#007bb8]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                020 3657 3189
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
              >
                Get a Free Quote
              </Link>
              <a
                href="mailto:info@c4plusdrainage.co.uk"
                className="inline-flex items-center rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        <ServiceSidebar />
      </div>
    </section>
  );
}
