import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import PageHero from "@/components/PageHero";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | C4 Plus Drainage",
  description:
    "Read trusted reviews and testimonials from homeowners and businesses across London and Surrey. See why C4 Plus Drainage is rated 5 stars; call us today!",
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
