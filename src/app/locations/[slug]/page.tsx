import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceAreaContent from "@/components/service-areas/ServiceAreaContent";
import { getServiceArea, serviceAreas } from "@/data/service-areas";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  return (
    <main className="flex-1">
      <PageHero
        breadcrumb={area.name}
        eyebrow="Locations"
        title={area.title}
        description={area.heroDescription}
        backgroundImage="/images/Home/vanimage.png"
      />
      <ServiceAreaContent area={area} />
    </main>
  );
}
