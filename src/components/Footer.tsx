import Image from "next/image";
import Link from "next/link";
import { footerSocialLinks } from "@/components/SocialIcons";

const serviceAreasCol1 = [
  { href: "/locations/earlswood", label: "Professional Drain Cleaning Services in Earlswood" },
  { href: "/locations/epsom", label: "Expert Drain Cleaning Services in Epsom" },
  { href: "/locations/coulsdon", label: "Expert Drain Cleaning in Coulsdon" },
  { href: "/locations/reigate", label: "Drain Cleaning Services in Reigate" },
];

const serviceAreasCol2 = [
  { href: "/locations", label: "Professional Drain Cleaning Services" },
  { href: "/locations/merstham", label: "Drain Cleaning Services in Merstham" },
  { href: "/locations/leatherhead", label: "Drain Cleaning Services in Leatherhead" },
  { href: "/locations/oxted", label: "C4Plus Drainage – Drain Cleaning Services in Oxted" },
];

const ourServices = [
  { href: "/services/drain-flushing-and-cleaning", label: "Drain Flushing and Cleaning" },
  { href: "/services/blocked-drain-clearance", label: "24/7 Blocked Drain Clearance" },
  { href: "/services/cctv-drain-surveys", label: "CCTV Drain Surveys" },
  { href: "/services/non-dig-drain-technologies", label: "Non-Dig Drain Technologies" },
  { href: "/services/civil-drain-repairs", label: "Civil Drain Repairs" },
  { href: "/services/rodent-infestation", label: "Rodent Infestation" },
  { href: "/services/gutter-cleaning", label: "Gutter Cleaning" },
];

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="group inline-flex gap-2 text-[13px] leading-snug text-[#9aa3b2] transition-colors hover:text-white"
            >
              <span className="shrink-0 text-[var(--brand-blue)]" aria-hidden="true">
                »
              </span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--footer-bg)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo-footer.png"
                alt="C4 Plus Drainage Ltd"
                width={200}
                height={120}
                className="h-auto w-[180px] object-contain"
                priority
              />
            </Link>

            <p className="mb-6 max-w-xs text-[13px] leading-relaxed text-[#9aa3b2]">
              C4 Plus Drainage Ltd – Expert drainage solutions across London,
              Surrey, and surrounding areas. We provide professional drain
              repairs, unblocking, and maintenance with 24/7 emergency service.
            </p>

            <div className="flex items-center gap-3">
              {footerSocialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-[#c5cad3] transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="size-[15px]" />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkList title="Service Areas" links={serviceAreasCol1} />
          <FooterLinkList title="Service Areas" links={serviceAreasCol2} />
          <FooterLinkList title="Our Services" links={ourServices} />
        </div>
      </div>

      <div className="border-t border-white/10 bg-[var(--footer-bottom)]">
        <p className="px-4 py-4 text-center text-[13px] text-[#c5cad3]">
          © Copyright 2026 | C4 Plus Drainage LTD | All right reserved.
        </p>
      </div>
    </footer>
  );
}
