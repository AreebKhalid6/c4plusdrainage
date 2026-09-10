import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";
import AboutValuesMission from "@/components/AboutValuesMission";
import BookingSection from "@/components/BookingSection";
import KeyFactsSection from "@/components/KeyFactsSection";
import PageHero from "@/components/PageHero";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata: Metadata = {
  title: "About C4 Plus Drainage Ltd | Expert Drainage Solutions",
  description:
    "About C4 Plus Drainage Ltd — drainage experts in London & Surrey. Reliable drainage experts committed to quality & efficiency.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="About"
        eyebrow="Drainage Experts In London & Surrey"
        title="About C4 Plus Drainage Ltd"
        description="Reliable Drainage Experts Committed to Quality & Efficiency — fast, professional drainage solutions you can trust."
        backgroundImage="/images/Home/aboutvanimage.png"
      />
      <AboutPageContent />
      <KeyFactsSection />
      <AboutValuesMission />
      <TrustBadgesSection />
      <WhyChooseSection />
      <div className="bg-[#f5f9fc] pt-4 sm:pt-6">
        <BookingSection />
      </div>
    </main>
  );
}
