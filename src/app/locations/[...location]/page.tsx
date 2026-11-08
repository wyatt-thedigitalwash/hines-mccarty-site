import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { locationBySegments, locationHref, publishedLocations } from "@/lib/locations";
import LocationTemplate from "@/components/locations/LocationTemplate";

type Params = { params: Promise<{ location: string[] }> };

export function generateStaticParams() {
  return publishedLocations.map((p) => ({
    location: p.parent ? [p.parent, p.slug] : [p.slug],
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { location } = await params;
  const page = locationBySegments(location);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: locationHref(page),
    // Out of the index until an attorney has read it (D151).
    noindex: !page.indexable,
  });
}

export default async function LocationRoute({ params }: Params) {
  const { location } = await params;
  const page = locationBySegments(location);
  if (!page) notFound();
  return <LocationTemplate page={page} />;
}
