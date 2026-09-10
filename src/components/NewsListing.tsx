"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Clock3, MessageCircle, Search, User } from "lucide-react";
import { searchNewsPosts } from "@/data/newsPosts";

export default function NewsListing() {
  const [query, setQuery] = useState("");

  const posts = useMemo(() => searchNewsPosts(query), [query]);

  return (
    <div>
      <div className="mx-auto mb-8 flex max-w-xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search any word in blogs…"
          className="min-w-0 flex-1 px-4 py-3 text-[14px] text-[var(--header-top)] outline-none placeholder:text-slate-400"
          aria-label="Search blogs"
        />
        <span className="inline-flex items-center justify-center bg-[var(--brand-blue)] px-4 text-white">
          <Search className="size-4" aria-hidden="true" />
        </span>
      </div>

      {query.trim() ? (
        <p className="mb-6 text-center text-[14px] text-slate-500">
          {posts.length} result{posts.length === 1 ? "" : "s"} for “{query.trim()}”
        </p>
      ) : null}

      {posts.length === 0 ? (
        <p className="rounded-xl bg-white px-6 py-10 text-center text-[15px] text-slate-500 shadow-[0_12px_32px_rgba(15,28,48,0.07)]">
          No blogs match that search. Try another word.
        </p>
      ) : (
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:max-w-6xl">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-xl bg-white p-7 shadow-[0_12px_32px_rgba(15,28,48,0.07)]"
            >
              <div className="flex items-center gap-2 text-[14px] font-medium text-[var(--brand-blue)]">
                <Clock3 className="size-4" />
                <time>{post.date}</time>
              </div>
              <h2 className="mt-4 text-[1.15rem] font-bold leading-snug text-[var(--header-top)]">
                <Link
                  href={`/${post.slug}`}
                  className="hover:text-[var(--brand-blue)]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-[13px] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <User className="size-3.5 text-[var(--brand-blue)]" />
                  c4plusdrainage
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="size-3.5 text-[var(--brand-blue)]" />
                  Comments (0)
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
