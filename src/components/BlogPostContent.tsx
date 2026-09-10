import Link from "next/link";
import { Phone } from "lucide-react";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import type { BlogBlock, BlogSection, NewsPost } from "@/data/newsPosts";

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-[15px] leading-relaxed text-slate-600 sm:text-[15.5px] sm:leading-[1.85]">
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h3 className="pt-1 text-[16px] font-bold text-[var(--header-top)] sm:text-[17px]">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "tip" || block.type === "example") {
    return (
      <aside className="rounded-2xl border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 px-5 py-4">
        {block.title ? (
          <p className="text-[13px] font-bold uppercase tracking-wide text-[var(--brand-blue)]">
            {block.title}
          </p>
        ) : null}
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
          {block.text}
        </p>
      </aside>
    );
  }

  return (
    <aside className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-5 sm:px-6">
      <h3 className="text-lg font-bold text-[var(--header-top)]">{block.title}</h3>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      {block.list?.length ? (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-slate-600">
          {block.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {block.closing ? (
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
          {block.closing}
        </p>
      ) : null}
    </aside>
  );
}

function Section({ section }: { section: BlogSection }) {
  const isCaseStudyOnly =
    section.blocks.length === 1 && section.blocks[0].type === "caseStudy";

  return (
    <div className="mt-10 first:mt-0">
      {!isCaseStudyOnly ? (
        <h2 className="text-[1.35rem] font-bold tracking-tight text-[var(--header-top)] sm:text-[1.5rem]">
          {section.title}
        </h2>
      ) : null}
      <div className={isCaseStudyOnly ? "space-y-4" : "mt-4 space-y-4"}>
        {section.blocks.map((block, index) => (
          <Block key={`${section.title}-${index}`} block={block} />
        ))}
      </div>
    </div>
  );
}

export default function BlogPostContent({ post }: { post: NewsPost }) {
  const hasFullContent = Boolean(post.sections?.length || post.intro?.length);

  return (
    <article>
      {post.intro?.map((section) => (
        <Section key={section.title} section={section} />
      ))}

      {post.sections?.map((section) => (
        <Section key={section.title} section={section} />
      ))}

      {!hasFullContent ? (
        <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
          <p>{post.excerpt}</p>
          <p>
            At{" "}
            <strong className="font-semibold text-[var(--header-top)]">
              C4 Plus Drainage
            </strong>
            , our engineers help homeowners and businesses across London and
            Surrey with CCTV surveys, high-pressure jetting, blocked drain
            clearance, and planned maintenance — available 24/7 when you need us
            most.
          </p>
        </div>
      ) : null}

      {post.conclusion?.length ? (
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-[1.75rem]">
            Conclusion
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
            {post.conclusion.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}

      {post.cta ? (
        <div className="mt-10 overflow-hidden rounded-2xl bg-[var(--header-top)] px-6 py-8 sm:px-8">
          <p className="text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
            {post.cta}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#007bb8]"
            >
              Contact C4 Plus Drainage
            </Link>
            <a
              href="tel:02036573189"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              020 3657 3189
            </a>
          </div>
        </div>
      ) : null}

      {post.faqs?.length ? (
        <ServiceFaqs items={post.faqs} title={post.faqTitle ?? "FAQ"} />
      ) : null}
    </article>
  );
}
