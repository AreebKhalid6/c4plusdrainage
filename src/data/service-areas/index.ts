import { coulsdonArea } from "./coulsdon";
import { earlswoodArea } from "./earlswood";
import { epsomArea } from "./epsom";
import { leatherheadArea } from "./leatherhead";
import { londonHub } from "./london";
import { mersthamArea } from "./merstham";
import { oxtedArea } from "./oxted";
import { reigateArea } from "./reigate";
import type { ServiceAreaPage, ServiceAreaSlug } from "./types";
import { serviceAreaSlugs } from "./types";

export const serviceAreas: ServiceAreaPage[] = [
  earlswoodArea,
  epsomArea,
  coulsdonArea,
  reigateArea,
  mersthamArea,
  leatherheadArea,
  oxtedArea,
];

export { londonHub, serviceAreaSlugs };
export type { ServiceAreaPage, ServiceAreaSlug };

export function getServiceArea(slug: string): ServiceAreaPage | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
