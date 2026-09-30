"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-20  items-center justify-between px-6">
        <Link href="/" aria-label="Nuvo home">
          <Image
            src="/logo/navlogo.png"
            alt="Nuvo logo"
            width={96}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="Subscription"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-90"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-cream transition-opacity hover:opacity-90"
          >
            <User size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
