import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, MessageCircle, User } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News | C4 Plus Drainage Ltd",
  description:
    "Latest news, tips, and insights from C4 Plus Drainage on drain care and property protection.",
};

const posts = [
  {
    date: "17 August, 2026",
    title:
      "Rats Coming Through Drains: How Do They Get Into Your Home and How Can You Stop Them?",
    slug: "rats-coming-through-drains",
    excerpt:
      "Learn how rodents enter homes through drainage systems and the practical steps you can take to stop them.",
  },
  {
    date: "10 August, 2026",
    title: "Emergency Drainage Problems: When Should You Call a Professional?",
    slug: "emergency-drainage-problems",
    excerpt:
      "Not every drip is an emergency — but some signs mean you should call a specialist immediately.",
  },
  {
    date: "07 August, 2026",
    title: "Why Does My Drain Keep Blocking? Common Causes and Solutions",
    slug: "why-does-my-drain-keep-blocking",
    excerpt:
      "Repeated blockages usually have a root cause. Here’s what to check and how we fix it for good.",
  },
];

export default function NewsPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="News"
        title="Latest News & Insights"
        description="Expert tips, industry updates, and smart drainage solutions to keep your property safe and problem-free."
        backgroundImage="/images/Home/vanimage.png"
        hideCurve
      />

      <section className="bg-[#f3f6f9] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-xl bg-white p-7 shadow-[0_12px_32px_rgba(15,28,48,0.07)]"
            >
              <div className="flex items-center gap-2 text-[14px] font-medium text-[var(--brand-blue)]">
                <Clock3 className="size-4" />
                <time>{post.date}</time>
              </div>
              <h2 className="mt-4 text-[1.15rem] font-bold leading-snug text-[var(--header-top)]">
                <Link
                  href={`/news/${post.slug}`}
                  className="hover:text-[var(--brand-blue)]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-[13px] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <User className="size-3.5 text-[var(--brand-blue)]" />
                  c4plusdrainage
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="size-3.5 text-[var(--brand-blue)]" />
                  Comments (0)
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
