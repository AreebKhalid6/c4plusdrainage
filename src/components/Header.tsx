"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Mail, MapPin, Menu, X } from "lucide-react";
import { headerSocialLinks } from "@/components/SocialIcons";

type NavChild = { href: string; label: string };
type NavLink = {
  href: string;
  label: string;
  children?: NavChild[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/drain-flushing-and-cleaning",
        label: "Drain Flushing and Cleaning",
      },
      {
        href: "/services/blocked-drain-clearance",
        label: "24/7 Blocked Drain Clearance",
      },
      {
        href: "/services/cctv-drain-surveys",
        label: "CCTV Drain Surveys",
      },
      {
        href: "/services/non-dig-drain-technologies",
        label: "Non-Dig Drain Technologies",
      },
      {
        href: "/services/civil-drain-repairs",
        label: "Civil Drain Repairs",
      },
      {
        href: "/services/rodent-infestation",
        label: "Rodent Infestation",
      },
      {
        href: "/services/gutter-cleaning",
        label: "Gutter Cleaning",
      },
    ],
  },
  {
    href: "/advice",
    label: "Advice",
    children: [
      { href: "/advice", label: "FAQs & Advice" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

function pathMatches(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenDesktop(null);
    setOpenMobile(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      const open = openDesktop;
      if (!open) return;
      const el = dropdownRefs.current[open];
      if (el && !el.contains(target)) setOpenDesktop(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [openDesktop]);

  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`overflow-hidden bg-[var(--header-top)] text-white transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[12.5px] sm:text-[13px]">
            <a
              href="https://maps.google.com/?q=3+Mill+Street,+Redhill,+Surrey.+RH1+6PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <MapPin className="size-3.5 shrink-0 text-[var(--brand-blue)]" />
              <span className="hidden sm:inline">
                3 Mill Street, Redhill, Surrey. RH1 6PA
              </span>
              <span className="sm:hidden">Redhill, Surrey</span>
            </a>
            <a
              href="mailto:info@c4plusdrainage.co.uk"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="size-3.5 shrink-0 text-[var(--brand-blue)]" />
              <span className="hidden sm:inline">info@c4plusdrainage.co.uk</span>
              <span className="sm:hidden">Email us</span>
            </a>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            {headerSocialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                className="inline-flex size-3.5 items-center justify-center text-[var(--brand-blue)] transition-opacity hover:opacity-70"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-white/20 bg-white/55 shadow-[0_8px_30px_rgba(15,28,48,0.08)] backdrop-blur-xl"
            : "border-black/5 bg-white"
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo-header.png"
              alt="C4 Plus Drainage Ltd"
              width={56}
              height={56}
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              priority
            />
            <span className="leading-tight">
              <span className="block text-[12px] font-bold uppercase tracking-wide text-[var(--nav-text)] sm:text-[14px]">
                C4 Plus Drainage Ltd
              </span>
              <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:block">
                Drain Clearing, Cleaning &amp; CCTV
              </span>
            </span>
          </Link>

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              if (link.children) {
                const isOpen = openDesktop === link.label;
                const childActive = link.children.some((child) =>
                  pathMatches(pathname, child.href)
                );

                return (
                  <div
                    key={link.label}
                    ref={(el) => {
                      dropdownRefs.current[link.label] = el;
                    }}
                    className="relative"
                    onMouseEnter={() => setOpenDesktop(link.label)}
                    onMouseLeave={() => setOpenDesktop(null)}
                  >
                    <button
                      type="button"
                      className={`relative inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors ${
                        childActive
                          ? "text-[var(--brand-blue)]"
                          : "text-[var(--nav-text)] hover:text-[var(--brand-blue)]"
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDesktop((current) =>
                          current === link.label ? null : link.label
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`size-3.5 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                      {childActive && (
                        <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-blue)]" />
                      )}
                    </button>

                    <div
                      className={`absolute left-0 top-full z-50 pt-2 transition-all ${
                        link.label === "Services" ? "min-w-[280px]" : "min-w-[200px]"
                      } ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-[0_16px_40px_rgba(15,28,48,0.12)]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-center gap-2 px-4 py-2.5 text-[14px] font-medium text-[var(--nav-text)] transition-colors hover:bg-slate-50 hover:text-[var(--brand-blue)]"
                          >
                            <ChevronRight className="size-3.5 shrink-0 text-[var(--brand-blue)] opacity-70 transition-transform group-hover:translate-x-0.5" />
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const active = pathMatches(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    active
                      ? "text-[var(--brand-blue)]"
                      : "text-[var(--nav-text)] hover:text-[var(--brand-blue)]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-blue)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-md bg-[var(--brand-blue)] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(0,144,216,0.25)] transition-colors hover:bg-[var(--brand-blue-hover)] sm:inline-flex"
            >
              Get Free Quote
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--nav-text)] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/5 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navLinks.map((link) => {
                if (link.children) {
                  const isOpen = openMobile === link.label;
                  const childActive = link.children.some((child) =>
                    pathMatches(pathname, child.href)
                  );

                  return (
                    <div key={link.label} className="border-b border-slate-100">
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between py-3 text-[15px] font-medium ${
                          childActive
                            ? "text-[var(--brand-blue)]"
                            : "text-[var(--nav-text)]"
                        }`}
                        onClick={() =>
                          setOpenMobile((current) =>
                            current === link.label ? null : link.label
                          )
                        }
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="pb-2 pl-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-2 py-2.5 pl-2 text-[14px] font-medium text-slate-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              <ChevronRight className="size-3.5 text-[var(--brand-blue)]" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const active = pathMatches(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`border-b border-slate-100 py-3 text-[15px] font-medium ${
                      active
                        ? "text-[var(--brand-blue)]"
                        : "text-[var(--nav-text)]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-3 mb-1 inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-5 py-2.5 text-[15px] font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </Link>
              <div className="mt-3 flex items-center gap-4 pb-2 sm:hidden">
                {headerSocialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={label}
                    className="text-[var(--brand-blue)]"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
