"use client";

import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Languages, Search, Store } from "lucide-react";
import { getInitials, isActive } from "@/lib/dashboard/utils";
import type { NavSection, ShellUser } from "@/lib/dashboard/types";
import { useBranchScope } from "./BranchScope";

type TopbarProps = {
  nav: NavSection[];
  user: ShellUser;
  notificationCount?: number;
};

export default function Topbar({
  nav,
  user,
  notificationCount = 0,
}: TopbarProps) {
  const pathname = usePathname();
  const { branches, branch, setBranch } = useBranchScope();

  // The page title comes from the nav config (longest matching link wins)
  const current = nav
    .flatMap((s) => s.items)
    .filter((item) => isActive(item, pathname))
    .sort((a, b) => b.href.length - a.href.length)[0];

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-[#f0dccd] bg-[#fdf3ec]/95 px-4 backdrop-blur sm:px-6">
      <h1 className="truncate text-sm font-bold text-primary">
        {current?.label ?? "Dashboard"}
      </h1>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <label className="relative hidden md:block">
          <span className="sr-only">Search</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary"
            aria-hidden
          />
          <input
            type="search"
            placeholder="Search pages, products, orders..."
            className="h-9 w-64 rounded-lg border border-[#f0dccd] bg-white/70 pl-9 pr-3 text-xs text-ink placeholder:text-ink/45 focus:border-secondary focus:outline-none"
          />
        </label>

        {/* Language */}
        <button
          type="button"
          aria-label="Change language"
          className="hidden h-9 items-center gap-1.5 rounded-lg border border-[#f0dccd] bg-white/70 px-3 text-xs font-semibold text-primary hover:bg-white sm:flex"
        >
          <Languages className="size-4" aria-hidden />
          EN
        </button>

        {/* Branch scope */}
        <label className="relative hidden sm:block">
          <span className="sr-only">Branch</span>
          <Store
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary"
            aria-hidden
          />
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="h-9 appearance-none rounded-lg border border-[#f0dccd] bg-white/70 pl-9 pr-8 text-xs font-semibold text-primary focus:border-secondary focus:outline-none"
          >
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
            aria-hidden
          />
        </label>

        {/* Notifications */}
        <button
          type="button"
          aria-label={
            notificationCount
              ? `Notifications, ${notificationCount} unread`
              : "Notifications"
          }
          className="relative grid size-9 place-items-center rounded-lg text-primary hover:bg-white/70"
        >
          <Bell className="size-4" aria-hidden />
          {notificationCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-secondary text-[9px] font-bold text-white">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sand text-[11px] font-bold text-primary">
            {getInitials(user.name)}
          </span>
          <div className="hidden leading-tight md:block">
            <p className="text-xs font-semibold text-primary">{user.name}</p>
            <p className="text-[10px] text-secondary">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}