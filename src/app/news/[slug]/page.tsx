import { redirect } from "next/navigation";
import { getNewsPost, newsPosts } from "@/data/newsPosts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function NewsSlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  if (!getNewsPost(slug)) {
    redirect("/news");
  }
  redirect(`/${slug}`);
}
