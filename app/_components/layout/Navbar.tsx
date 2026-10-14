"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/app/_components/ui/Logo";
import Button from "@/app/_components/ui/Button";
import Container from "@/app/_components/ui/Container";

const links = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#cafes", label: "For cafés" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <Container>
        <nav
          aria-label="Main"
          className="relative rounded-2xl bg-white/95 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur sm:px-6"
        >
          <div className="flex items-center justify-between">
            <Logo />

            <ul className="hidden items-center gap-8 text-sm text-ink/80 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-brand-700">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button href="#get-started" className="hidden sm:inline-flex">
                Get Started
              </Button>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-lg text-ink md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div id="mobile-menu" className="mt-3 border-t border-black/5 pt-3 md:hidden">
              <ul className="flex flex-col gap-1 text-sm">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-2 py-2.5 hover:bg-brand-50"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="#get-started" className="mt-3 w-full">
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
