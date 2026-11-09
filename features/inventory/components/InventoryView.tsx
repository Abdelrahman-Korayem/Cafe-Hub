"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowUp,
  CalendarClock,
  ChevronDown,
  CircleAlert,
  Layers,
  Package,
  PackagePlus,
  Search,
  TriangleAlert,
} from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import StatusPill from "@/app/_components/dashboard/StatusPill";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { branchDot } from "@/lib/dashboard/branches";
import { batchStats, items } from "@/features/inventory/data";
import type { InventoryItem } from "@/features/inventory/types";
import { cn } from "@/lib/cn";

type Tab = "items" | "batches" | "movements" | "receive";
type StatusFilter = "all" | "in-stock" | "low";

const tabs = [
  { id: "items", label: "Items", icon: Package },
  { id: "batches", label: "Batches", icon: Layers },
  { id: "movements", label: "Movements", icon: ArrowLeftRight },
  { id: "receive", label: "Receive", icon: PackagePlus },
] as const;

const isLow = (i: InventoryItem) => i.onHand <= i.min;
const qty = (n: number, unit: string) => `${n.toLocaleString("en-US")} ${unit}`;

const categoryOptions = [...new Set(items.map((i) => i.category))].sort();

const selectClass =
  "h-9 appearance-none rounded-lg border border-[#f0dccd] bg-white/80 pl-3 pr-8 text-xs text-primary focus:border-secondary focus:outline-none";

export default function InventoryView() {
  const { branch, isAll } = useBranchScope();
  const [tab, setTab] = useState<Tab>("items");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [asc, setAsc] = useState(true);

  // Everything follows the global branch scope
  const scoped = isAll ? items : items.filter((i) => i.branch === branch);
  const lowItems = scoped.filter(isLow);

  const batches = (isAll ? Object.values(batchStats) : [batchStats[branch]])
    .filter(Boolean)
    .reduce(
      (acc, b) => ({
        nearExpiry: acc.nearExpiry + b.nearExpiry,
        expired: acc.expired + b.expired,
      }),
      { nearExpiry: 0, expired: 0 },
    );

  const lowNames = [
    ...new Set(
      [...lowItems]
        .sort((a, b) => a.onHand / a.min - b.onHand / b.min)
        .map((i) => i.name),
    ),
  ];
  const shownNames = lowNames.slice(0, 3);
  const moreCount = lowNames.length - shownNames.length;

  const q = query.trim().toLowerCase();
  const rows = scoped
    .filter((i) => category === "all" || i.category === category)
    .filter((i) =>
      status === "all" ? true : status === "low" ? isLow(i) : !isLow(i),
    )
    .filter(
      (i) =>
        !q || i.name.toLowerCase().includes(q) || i.sku.toLowerCase().includes(q),
    )
    .sort((a, b) => (asc ? 1 : -1) * a.name.localeCompare(b.name));

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total items"
          value={scoped.length}
          hint={isAll ? "All Branches" : branch}
          icon={Package}
          iconPosition="right"
        />
        <StatCard
          label="Low stock"
          value={lowItems.length}
          hint="at or below minimum"
          icon={TriangleAlert}
          iconPosition="right"
        />
        <StatCard
          label="Near-expiry batches"
          value={batches.nearExpiry}
          hint="expiring within 5 days"
          icon={CalendarClock}
          iconPosition="right"
        />
        <StatCard
          label="Expired batches"
          value={batches.expired}
          hint="record waste to dispose"
          icon={CircleAlert}
          iconPosition="right"
        />
      </div>

      {/* Low stock banner */}
      {lowItems.length > 0 && (
        <div
          role="status"
          className="rounded-xl border border-[#f3dccb] bg-[#fdf1e8] p-4 shadow-sm"
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <TriangleAlert className="size-4 text-secondary" aria-hidden />
            Low stock — {lowItems.length}{" "}
            {lowItems.length === 1 ? "item" : "items"} at or below minimum at{" "}
            {isAll ? "All Branches" : branch}
          </p>
          <p className="mt-1.5 text-sm text-secondary">
            {shownNames.join(", ")}
            {moreCount > 0 && ` +${moreCount} more`} need replenishment soon.
          </p>
          <button
            type="button"
            onClick={() => setTab("receive")}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <PackagePlus className="size-3.5" aria-hidden />
            Receive stock
          </button>
        </div>
      )}

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Inventory sections"
        className="inline-flex rounded-xl bg-white/70 p-1 shadow-sm ring-1 ring-[#f0dccd]"
      >
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors",
              tab === id
                ? "bg-gradient-to-r from-[#b2693b] to-[#97502f] text-white shadow-sm"
                : "text-primary hover:bg-[#f6e6da]",
            )}
          >
            <Icon className="size-3.5" aria-hidden />
            {label}
          </button>
        ))}
      </div>

      {tab !== "items" ? (
        <div
          role="tabpanel"
          className="rounded-xl border border-dashed border-[#e3b896] bg-[#fef7f2] py-16 text-center text-sm text-secondary"
        >
          The {tabs.find((t) => t.id === tab)?.label} tab is coming soon.
        </div>
      ) : (
        <div role="tabpanel" className="space-y-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="relative w-full max-w-[260px]">
              <span className="sr-only">Search items or SKUs</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search items or SKUs..."
                className="h-9 w-full rounded-lg border border-[#f0dccd] bg-white/80 pl-9 pr-3 text-xs text-ink placeholder:text-ink/45 focus:border-secondary focus:outline-none"
              />
            </label>

            <label className="relative">
              <span className="sr-only">Filter by category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={selectClass}
              >
                <option value="all">All categories</option>
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
                aria-hidden
              />
            </label>

            <label className="relative">
              <span className="sr-only">Filter by status</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as StatusFilter)}
                className={selectClass}
              >
                <option value="all">All statuses</option>
                <option value="in-stock">In stock</option>
                <option value="low">Low stock</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
                aria-hidden
              />
            </label>

            <span className="text-[11px] text-secondary">
              Click a row for details &amp; actions
            </span>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-xs">
                <thead>
                  <tr className="border-b border-[#f3dccb] text-[10px] font-bold uppercase tracking-wider text-secondary">
                    <th scope="col" className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => setAsc((v) => !v)}
                        className="inline-flex items-center gap-1 uppercase"
                      >
                        Item name
                        {asc ? (
                          <ArrowUp className="size-3" aria-hidden />
                        ) : (
                          <ArrowDown className="size-3" aria-hidden />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-4 py-3">SKU</th>
                    <th scope="col" className="px-4 py-3">Category</th>
                    <th scope="col" className="px-4 py-3">Unit</th>
                    <th scope="col" className="px-4 py-3">On hand</th>
                    <th scope="col" className="px-4 py-3">Min threshold</th>
                    <th scope="col" className="px-4 py-3">Stock status</th>
                    <th scope="col" className="px-4 py-3">Branch</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-4 py-10 text-center text-sm text-secondary"
                      >
                        No items match your filters.
                      </td>
                    </tr>
                  ) : (
                    rows.map((i) => {
                      const low = isLow(i);
                      return (
                        <tr
                          key={i.id}
                          className="cursor-pointer border-b border-[#f6e3d6] last:border-0 hover:bg-white/50"
                        >
                          <td className="px-4 py-3.5 font-bold text-primary">
                            {i.name}
                          </td>
                          <td className="px-4 py-3.5 font-medium text-secondary">
                            {i.sku}
                          </td>
                          <td className="px-4 py-3.5 text-primary">
                            {i.category}
                          </td>
                          <td className="px-4 py-3.5 text-secondary">
                            {i.unit}
                          </td>
                          <td className="px-4 py-3.5 font-bold text-primary">
                            {qty(i.onHand, i.unit)}
                          </td>
                          <td className="px-4 py-3.5 text-secondary">
                            {qty(i.min, i.unit)}
                          </td>
                          <td className="px-4 py-3.5">
                            <StatusPill tone={low ? "warning" : "success"}>
                              {low ? "Low stock" : "In stock"}
                            </StatusPill>
                          </td>
                          <td className="px-4 py-3.5 text-primary">
                            <span className="inline-flex items-center gap-2">
                              <span
                                aria-hidden
                                className={cn(
                                  "size-1.5 rounded-full",
                                  branchDot[i.branch] ?? "bg-secondary",
                                )}
                              />
                              {i.branch}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}