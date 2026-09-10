import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import PageHero from "@/components/PageHero";
import ServicesPageContent from "@/components/ServicesPageContent";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata: Metadata = {
  title: "Professional Drainage Services | C4 Plus Drainage",
  description:
    "Professional drainage services across London & Surrey — drain flushing, 24/7 blocked drain clearance, CCTV surveys, civil repairs, rodent control, gutter cleaning, and non-dig technology.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Services"
        eyebrow="C4 Plus Drainage Ltd"
        title="Professional Drainage Services Across London & Surrey"
        description="Expert drainage solutions for residential and commercial properties — fast, reliable, and cost-effective."
      />
      <ServicesPageContent />
      <TrustBadgesSection />
      <WhyChooseSection />
      <div className="bg-[#f5f9fc] pt-4 sm:pt-6">
        <BookingSection />
      </div>
    </main>
  );
}
