"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee } from "lucide-react";
import { icons } from "@/lib/dashboard/icons";
import { getInitials, isActive } from "@/lib/dashboard/utils";
import type { NavSection, ShellUser } from "@/lib/dashboard/types";
import { cn } from "@/lib/cn";

type SidebarProps = {
  nav: NavSection[];
  brand: { name: string; subtitle: string };
  user: ShellUser;
};

export default function Sidebar({ nav, brand, user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-[#f0dccd] bg-[#fdf3ec] lg:flex">
      {/* Brand */}
      <div className="flex items-center gap-3 p-4">
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#b2693b] to-[#8a4526] text-white">
          <Coffee className="size-5" aria-hidden />
        </span>
        <div>
          <p className="text-base font-bold leading-tight text-primary">
            {brand.name}
          </p>
          <p className="text-xs text-secondary">{brand.subtitle}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Dashboard"
        className="flex-1 overflow-y-auto px-3 pb-3 [scrollbar-color:#e5cdb8_transparent] [scrollbar-width:thin]"
      >
        {nav.map((section) => (
          <div key={section.title} className="mt-4 first:mt-1">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-secondary">
              {section.title}
            </p>
            <ul className="mt-1.5 space-y-0.5">
              {section.items.map((item) => {
                const Icon = icons[item.icon];
                const active = isActive(item, pathname);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-1.5 text-[13px] transition-colors",
                        active
                          ? "bg-gradient-to-r from-[#b2693b] to-[#97502f] font-semibold text-white shadow-sm"
                          : "text-primary/80 hover:bg-sand/40",
                      )}
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                      {item.label}
                      {item.badge && (
                        <span className="ml-auto rounded-full bg-sand/70 px-2 py-0.5 text-[9px] font-bold text-primary">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="flex items-center gap-3 border-t border-[#f0dccd] p-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sand text-xs font-bold text-primary">
          {getInitials(user.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-primary">
            {user.name}
          </p>
          <p className="truncate text-xs text-secondary">
            {user.role}
            {user.scope ? ` · ${user.scope}` : ""}
          </p>
        </div>
      </div>
    </aside>
  );
}