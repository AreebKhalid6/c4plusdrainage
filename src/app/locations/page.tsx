import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceAreaContent from "@/components/service-areas/ServiceAreaContent";
import { londonHub } from "@/data/service-areas";

export const metadata: Metadata = {
  title: londonHub.metaTitle,
  description: londonHub.metaDescription,
};

export default function LocationsPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Locations"
        eyebrow="C4 Plus Drainage Ltd"
        title={londonHub.title}
        description={londonHub.heroDescription}
        backgroundImage="/images/Home/vanimage.png"
      />
      <ServiceAreaContent area={londonHub} showAreaLinks />
    </main>
  );
}
