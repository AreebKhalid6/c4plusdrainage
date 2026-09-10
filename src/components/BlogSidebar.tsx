"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { newsPosts, searchNewsPosts } from "@/data/newsPosts";

const categories = ["Drain Maintenance", "Uncategorized"];

const tags = [
  "Blocked Drains Advice, Prevention & Expert Tips",
  "Drainage Industry News, Updates & Expert Insights",
  "Drainage Repair Advice, Solutions & Expert Tips",
  "Drainage Solutions, Expert Advice & Helpful Tips",
  "Drain Maintenance Tips, Advice & Preventative Solutions",
  "Emergency Drainage Advice, Tips & Expert Guidance",
  "Plumbing Tips, Drainage Advice & Expert Guidance",
  "Professional Drainage Services – Advice & Expert Insights",
  "Sewer Cleaning Advice, Tips & Expert Guidance",
  "Water Drainage Advice, Solutions & Expert Tips",
];

function SidebarHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b-2 border-[var(--brand-blue)] pb-2 text-[15px] font-bold text-[var(--brand-blue)]">
      {children}
    </h2>
  );
}

export default function BlogSidebar({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const activeQuery = submittedQuery || query;
  const isSearching = activeQuery.trim().length > 0;

  const results = useMemo(
    () => (isSearching ? searchNewsPosts(activeQuery) : []),
    [activeQuery, isSearching]
  );

  const recent = newsPosts.filter((post) => post.slug !== currentSlug);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  }

  function handleChange(value: string) {
    setQuery(value);
    // Live search as the user types
    setSubmittedQuery(value.trim());
  }

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      <div>
        <SidebarHeading>Search</SidebarHeading>
        <form
          onSubmit={handleSearch}
          className="mt-4 flex overflow-hidden rounded-md border border-slate-200"
        >
          <input
            type="search"
            value={query}
            onChange={(event) => handleChange(event.target.value)}
            placeholder="Search any word…"
            className="min-w-0 flex-1 bg-white px-3 py-2.5 text-[14px] text-[var(--header-top)] outline-none placeholder:text-slate-400"
            aria-label="Search blog posts"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-[var(--brand-blue)] px-3.5 text-white transition-colors hover:bg-[#007bb8]"
            aria-label="Submit search"
          >
            <Search className="size-4" />
          </button>
        </form>

        {isSearching ? (
          <div className="mt-4 rounded-lg border border-slate-200 bg-[#f8fafc] p-3">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-500">
              {results.length} result{results.length === 1 ? "" : "s"} for “
              {activeQuery.trim()}”
            </p>
            {results.length > 0 ? (
              <ul className="mt-3 space-y-2.5">
                {results.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/${post.slug}`}
                      className="block text-[13.5px] font-medium leading-snug text-[var(--header-top)] transition-colors hover:text-[var(--brand-blue)]"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-[13px] text-slate-500">
                No blogs match that word. Try another search.
              </p>
            )}
          </div>
        ) : null}
      </div>

      <div>
        <SidebarHeading>Recent Posts</SidebarHeading>
        <ul className="mt-4 space-y-3">
          {(recent.length ? recent : newsPosts).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${post.slug}`}
                className="text-[14px] font-medium leading-snug text-[var(--header-top)] transition-colors hover:text-[var(--brand-blue)]"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SidebarHeading>Recent Comments</SidebarHeading>
        <p className="mt-4 text-[14px] text-slate-500">No comments to show.</p>
      </div>

      <div>
        <SidebarHeading>Categories</SidebarHeading>
        <ul className="mt-4 space-y-2.5">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href="/news"
                className="text-[14px] font-medium text-[var(--header-top)] transition-colors hover:text-[var(--brand-blue)]"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SidebarHeading>Tags</SidebarHeading>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href="/news"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium leading-snug text-slate-600 transition-colors hover:border-[var(--brand-blue)]/40 hover:text-[var(--brand-blue)]"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
