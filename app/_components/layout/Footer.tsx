import Image from "next/image";
import Link from "next/link";
import { Globe, Megaphone, MessagesSquare, Radio } from "lucide-react";

const columns = [
  {
    title: "Resources",
    links: [
      { label: "Help & FAQ", href: "#faq" },
      { label: "Schedule Setup", href: "#" },
      { label: "BRD Overview", href: "#" },
      { label: "WiFi Integration Guide", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Table QR Ordering", href: "#" },
      { label: "WiFi Card Billing", href: "#" },
      { label: "Multi-Branch Setup", href: "#" },
      { label: "Cashier Confirmation", href: "#" },
    ],
  },
  {
    title: "LEGAL & TRUST",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security Architecture", href: "#" },
      { label: "PCI-DSS Level 1", href: "#" },
    ],
  },
];

const socials = [
  { label: "Website", icon: Globe },
  { label: "Community", icon: MessagesSquare },
  { label: "Announcements", icon: Megaphone },
  { label: "Status", icon: Radio },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-cream">
      <div className="mx-auto  px-6 pt-14 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Nuvo home">
              <Image
                src="/logo/navlogo.png"
                alt="Nuvo logo"
                width={96}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Good Coffee. Smarter Business. Designed for independent specialty
              roasters, artisan cafés, and modern multi-location hospitality
              teams.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 núvo technologies inc. Crafted for specialty coffee
            operations worldwide.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cream" />
            All Systems Operational
          </p>
        </div>
      </div>
    </footer>
  );
}