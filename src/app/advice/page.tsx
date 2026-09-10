import type { Metadata } from "next";
import AdviceDosDontsSection from "@/components/AdviceDosDontsSection";
import AdviceFaqsSection from "@/components/AdviceFaqsSection";
import BookingSection from "@/components/BookingSection";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata: Metadata = {
  title: "Drainage Advice & Maintenance Guides | C4 Plus Drainage",
  description:
    "Expert advice and practical tips for maintaining your drains, preventing blockages, and managing emergencies across London and Surrey. Read our guide!",
};

export default function AdvicePage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Advice"
        eyebrow="Expert Tips from C4 Plus Drainage"
        title="Drainage FAQs, Expert Advice & Drain Maintenance Tips"
        description="Practical guidance to prevent blockages, protect your property, and know when to call the specialists."
        backgroundImage="/images/Home/vanimage.png"
      />
      <AdviceFaqsSection />
      <AdviceDosDontsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <div className="bg-[#f5f9fc] pt-4 sm:pt-6">
        <BookingSection />
      </div>
    </main>
  );
}
