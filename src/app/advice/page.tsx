import type { Metadata } from "next";
import AdviceDosDontsSection from "@/components/AdviceDosDontsSection";
import AdviceFaqsSection from "@/components/AdviceFaqsSection";
import BookingSection from "@/components/BookingSection";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata: Metadata = {
  title: "C4 Plus Drainage FAQs & Advice – Expert Tips from C4 Plus Drainage",
  description:
    "Drainage FAQs, expert advice & drain maintenance tips from C4 Plus Drainage — learn blockage causes, warning signs, cleaning schedules, and do's and don'ts.",
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
