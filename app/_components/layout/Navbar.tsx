"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/app/_components/ui/Logo";
import Button from "@/app/_components/ui/Button";
import Container from "@/app/_components/ui/Container";
import { cn } from "@/lib/cn";

const links = [
  { href: "#home", label: "Home" },
  { href: "#our-story", label: "Our Story" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <header className="fixed inset-x-0 top-0 z-500 bg-white shadow-sm">
      <Container>
        <nav aria-label="Main" className="py-3">
          <div className="flex items-center justify-between">
            <Logo />

            <ul className="hidden items-center gap-10 text-base text-ink md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setActive(l.href)}
                    className={cn(
                      "border-b-2 pb-1 transition-colors hover:text-secondary",
                      active === l.href
                        ? "border-secondary font-semibold"
                        : "border-transparent",
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button href="#pricing" className="hidden sm:inline-flex">
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
                      onClick={() => {
                        setActive(l.href);
                        setOpen(false);
                      }}
                      className={cn(
                        "block rounded-lg px-2 py-2.5 hover:bg-sand/40",
                        active === l.href && "font-semibold text-secondary",
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="#pricing" className="mt-3 w-full">
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}