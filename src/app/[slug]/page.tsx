import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MessageCircle, User } from "lucide-react";
import BlogPostContent from "@/components/BlogPostContent";
import BlogSidebar from "@/components/BlogSidebar";
import PageHero from "@/components/PageHero";
import { getNewsPost, newsPosts } from "@/data/newsPosts";

const BLOG_HERO_IMAGE = "/images/Home/vanimage.png";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  const headline = post.headline ?? post.title;
  const heroImage = post.image ?? BLOG_HERO_IMAGE;
  const featuredImage = post.featuredImage ?? post.image ?? BLOG_HERO_IMAGE;
  const imageAlt = post.imageAlt ?? post.title;

  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="News"
        eyebrow="C4 Plus Drainage Ltd"
        title={post.title}
        description={post.excerpt}
        backgroundImage={heroImage}
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src={featuredImage}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-200 pb-4 text-[12px] font-semibold uppercase tracking-wide text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5 text-[var(--brand-blue)]" />
                By: {post.author ?? "c4plusdrainage"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MessageCircle className="size-3.5 text-[var(--brand-blue)]" />
                Comments (0)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-[var(--brand-blue)]" />
                <time>{post.date}</time>
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl sm:leading-[1.2]">
              {headline}
            </h1>

            <div className="mt-8">
              <BlogPostContent post={post} />
            </div>

            <Link
              href="/news"
              className="mt-10 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--brand-blue)] hover:underline"
            >
              <ArrowLeft className="size-4" />
              Back to News
            </Link>
          </div>

          <BlogSidebar currentSlug={post.slug} />
        </div>
      </section>
    </main>
  );
}
