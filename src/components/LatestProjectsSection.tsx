"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const filters = [
  "All Project",
  "Blocked Drain Clearance",
  "Civil Drain",
  "Drain Flushing and Cleaning",
  "Non-Dig Drain Repairs",
] as const;

type Filter = (typeof filters)[number];

const projects = [
  {
    title: "Emergency Blocked Drain Clearance",
    category: "Blocked Drain Clearance",
    image: "/images/work/cleaning-toilet-stuck-with-suction-cup-hands-in-g-2024-04-01-20-00-48-utc-768x512-1.webp",
    location: "Surrey",
  },
  {
    title: "Commercial Civil Drain Works",
    category: "Civil Drain",
    image: "/images/work/IMG-20250121-WA0037.webp",
    location: "London",
  },
  {
    title: "High-Pressure Drain Flushing",
    category: "Drain Flushing and Cleaning",
    image: "/images/work/IMG-20250215-WA0005.webp",
    location: "Redhill",
  },
  {
    title: "No-Dig Pipe Relining",
    category: "Non-Dig Drain Repairs",
    image: "/images/work/CCTV-camera-in-drain.webp",
    location: "Epsom",
  },
  {
    title: "Residential Blocked Drain Fix",
    category: "Blocked Drain Clearance",
    image: "/images/work/IMG-20250215-WA0012.webp",
    location: "Coulsdon",
  },
  {
    title: "Drain Cleaning & Maintenance",
    category: "Drain Flushing and Cleaning",
    image: "/images/work/project_1_4-1.webp",
    location: "South East",
  },
  {
    title: "Rodent Infestation Clearance",
    category: "Blocked Drain Clearance",
    image: "/images/work/rat_infestation.webp",
    location: "Surrey",
  },
] as const;

export default function LatestProjectsSection() {
  const [active, setActive] = useState<Filter>("All Project");

  const visible = useMemo(() => {
    if (active === "All Project") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fb_50%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-blue)]" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              Portfolio
            </span>
            <span className="h-px w-8 bg-[var(--brand-blue)]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl">
            Our Latest Project
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
            At C4 Plus Drainage, we take pride in delivering high-quality
            drainage solutions for homes and businesses across Surrey, London,
            and the South East. Here&apos;s a glimpse of some of our recent
            projects:
          </p>
        </div>

        <div className="-mx-4 mt-8 flex gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-10 sm:flex-wrap sm:items-center sm:justify-center sm:overflow-visible sm:px-0">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all sm:min-h-0 sm:px-5 sm:py-2 sm:text-[14px] ${
                  isActive
                    ? "bg-[var(--brand-blue)] text-white shadow-[0_10px_24px_rgba(0,144,216,0.28)]"
                    : "bg-white text-[var(--header-top)] ring-1 ring-slate-200 hover:ring-[var(--brand-blue)]/40"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {visible.map((project) => (
            <article
              key={`${project.title}-${project.image}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_14px_36px_rgba(15,28,48,0.08)] ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(15,28,48,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--header-top)]/70 via-transparent to-transparent opacity-80" />
                <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[var(--header-top)] sm:left-4 sm:top-4">
                  {project.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/85">
                    {project.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-slate-500">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
