import Link from "next/link";
import { Clock3, MessageCircle, User } from "lucide-react";

const posts = [
  {
    date: "17 August, 2026",
    title:
      "Rats Coming Through Drains: How Do They Get Into Your Home and How Can You Stop Them?",
    slug: "rats-coming-through-drains",
  },
  {
    date: "10 August, 2026",
    title:
      "Emergency Drainage Problems: When Should You Call a Professional?",
    slug: "emergency-drainage-problems",
  },
  {
    date: "07 August, 2026",
    title: "Why Does My Drain Keep Blocking? Common Causes and Solutions",
    slug: "why-does-my-drain-keep-blocking",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="bg-[#f3f6f9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl">
            Latest News & Insights
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base sm:leading-[1.75]">
            Expert tips, industry updates, and smart drainage solutions to keep
            your property safe and problem-free.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-7">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-xl bg-white p-7 shadow-[0_12px_32px_rgba(15,28,48,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,28,48,0.1)] sm:p-8"
            >
              <div className="flex items-center gap-2 text-[14px] font-medium text-[var(--brand-blue)]">
                <Clock3 className="size-4" strokeWidth={1.75} />
                <time>{post.date}</time>
              </div>

              <h3 className="mt-5 flex-1 text-[1.15rem] font-bold leading-snug tracking-tight text-[var(--header-top)] sm:text-[1.25rem] sm:leading-[1.35]">
                <Link
                  href={`/news/${post.slug}`}
                  className="transition-colors hover:text-[var(--brand-blue)]"
                >
                  {post.title}
                </Link>
              </h3>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-[13px] text-slate-500">
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
      </div>
    </section>
  );
}
