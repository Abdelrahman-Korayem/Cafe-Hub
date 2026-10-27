"use client";

import Image from "next/image";
import Link from "next/link";
import { Coffee, Mail, MessageCircle } from "lucide-react";
import Container from "@/app/_components/ui/Container";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "QR reading", href: "#our-story" },
      { label: "Customer App", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#our-story" },
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Support Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className=" pt-10">
     
        <div className="relative overflow-hidden  bg-primary text-[#fdf3e1]">
          <Image
            src="/footer/footer-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="z-0 object-cover"
          />

          <div className="relative z-10 grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_2fr_1.3fr] lg:gap-0 lg:px-12">
            {/* Brand */}
            <div className="lg:pr-8">
              <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
                <Coffee className="size-8" aria-hidden />
                CAFE HUB
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-7 text-[#fdf3e1]/90">
                A smarter way to manage your café. Bookings, orders,
                memberships, and more — all in one place.
              </p>
              <ul className="mt-5 flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="grid size-9 place-items-center rounded-lg bg-[#fdf3e1] text-primary transition-colors hover:bg-sand"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-0">
              {columns.map(({ title, links }) => (
                <nav
                  key={title}
                  aria-label={title}
                  className="sm:border-l sm:border-orange-400/30 sm:px-4 sm:text-center"
                >
                  <h3 className="text-sm font-bold">{title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#fdf3e1]/85">
                    {links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="transition-colors hover:text-sand">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            {/* Newsletter */}
            <div className="lg:border-l lg:border-orange-400/30 lg:pl-8">
              <h3 className="text-base font-bold">Stay in the Loop</h3>
              <p className="mt-3 text-sm leading-6 text-[#fdf3e1]/90">
                Get the latest updates, tips, and features delivered to your
                inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-wrap gap-2"
              >
                <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#fdf3e1]/60 px-3 py-2.5">
                  <Mail className="size-4 shrink-0" aria-hidden />
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full min-w-0 bg-transparent text-xs text-white placeholder:text-[#fdf3e1]/70 focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-lg bg-sand px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-[#fdf3e1]"
                >
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
   
    </footer>
  );
}