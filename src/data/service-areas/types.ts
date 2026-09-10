export type AreaSubsection = {
  title: string;
  paragraphs: string[];
};

export type AreaSection = {
  title: string;
  paragraphs?: string[];
  subsections?: AreaSubsection[];
};

export type AreaProcess = {
  title: string;
  intro?: string[];
  steps: AreaSubsection[];
};

export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaClosing = {
  title: string;
  paragraphs: string[];
};

export type ServiceAreaPage = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  intro: string[];
  sections: AreaSection[];
  process?: AreaProcess;
  extraSections?: AreaSection[];
  testimonialsTitle: string;
  faqs: AreaFaq[];
  faqTitle: string;
  closing: AreaClosing;
};

export const serviceAreaSlugs = [
  "earlswood",
  "epsom",
  "coulsdon",
  "reigate",
  "merstham",
  "leatherhead",
  "oxted",
] as const;

export type ServiceAreaSlug = (typeof serviceAreaSlugs)[number];
