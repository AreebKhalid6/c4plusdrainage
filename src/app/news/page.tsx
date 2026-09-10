import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsListing from "@/components/NewsListing";

export const metadata: Metadata = {
  title: "Latest Drainage News & Industry Updates | C4 Plus Drainage",
  description:
    "Stay updated with the latest news, expert insights, and drainage industry updates from C4 Plus Drainage across London and Surrey. Read our latest updates!",
};

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NewsListing />
        </div>
      </section>
    </main>
  );
}
