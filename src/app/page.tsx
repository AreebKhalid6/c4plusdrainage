import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import BookingSection from "@/components/BookingSection";
import HeroSlider from "@/components/HeroSlider";
import HowItWorks from "@/components/HowItWorks";
import LatestNewsSection from "@/components/LatestNewsSection";
import LatestProjectsSection from "@/components/LatestProjectsSection";
import OfferSection from "@/components/OfferSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export const metadata: Metadata = {
  title: "Fast, Reliable Drainage Solutions- C4 Plus Drainage LTD",
  description:
    "Get expert drain unblocking and outdoor drain cleaning. Fast, affordable service from trusted drainage contractors C4 drainage LTD.",
};

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSlider />
      <HowItWorks />
      <AboutUs />
      <OfferSection />
      <TrustBadgesSection />
      <ServicesSection />
      <LatestProjectsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <LatestNewsSection />
      <BookingSection />
    </main>
  );
}
