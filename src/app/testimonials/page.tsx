import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import PageHero from "@/components/PageHero";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Testimonials | C4 Plus Drainage Customer Reviews",
  description:
    "Read Google reviews from happy C4 Plus Drainage customers across London & Surrey — blocked drains, CCTV surveys, and more. Write a review on Google.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Testimonials"
        eyebrow="Customer Reviews"
        title="Hear From Our Happy Customers"
        description="Don't just take our word for it — see what our customers say about their experience with C4 Plus Drainage."
        backgroundImage="/images/Home/vanimage.png"
      />
      <TestimonialsPageContent />
      <div className="bg-[#f5f9fc] pt-4 sm:pt-6">
        <BookingSection />
      </div>
    </main>
  );
}
