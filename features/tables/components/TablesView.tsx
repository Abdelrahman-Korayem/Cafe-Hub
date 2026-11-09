"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  LayoutGrid,
  List,
  Plus,
  Power,
  PowerOff,
  RefreshCw,
  Search,
  Users,
} from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import StatusPill from "@/app/_components/dashboard/StatusPill";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { tables } from "@/features/tables/data";
import { cn } from "@/lib/cn";

type StatusFilter = "all" | "active" | "inactive" | "occupied" | "free";

const PAGE_SIZE = 12;

const branchDot: Record<string, string> = {
  "Downtown Alexandria": "bg-[#7b7b45]",
  Smouha: "bg-[#4f6b3a]",
  Sporting: "bg-[#c8743c]",
};

const iconButton =
  "grid size-7 place-items-center rounded-md text-secondary transition-colors hover:bg-white hover:text-primary";

export default function TablesView() {
  const { branch, isAll } = useBranchScope();
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [asc, setAsc] = useState(true);
  const [page, setPage] = useState(1);

  // Everything below follows the global branch scope
  const scoped = isAll ? tables : tables.filter((t) => t.branch === branch);

  const stats = {
    total: scoped.length,
    active: scoped.filter((t) => t.active).length,
    inactive: scoped.filter((t) => !t.active).length,
    occupied: scoped.filter((t) => t.orderId !== null).length,
  };

  const q = query.trim().toLowerCase();
  const filtered = scoped
    .filter((t) => {
      if (status === "active") return t.active;
      if (status === "inactive") return !t.active;
      if (status === "occupied") return t.orderId !== null;
      if (status === "free") return t.active && t.orderId === null;
      return true;
    })
    .filter(
      (t) =>
        !q || [t.label, t.zone, t.qrCode].some((v) => v.toLowerCase().includes(q)),
    )
    .sort((a, b) => (asc ? 1 : -1) * a.label.localeCompare(b.label));

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const rows = filtered.slice(start, start + PAGE_SIZE);
  const range =
    filtered.length === 0
      ? "0 of 0"
      : `${start + 1}–${start + rows.length} of ${filtered.length}`;

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total tables" value={stats.total} icon={LayoutGrid} />
        <StatCard label="Active" value={stats.active} icon={Power} />
        <StatCard label="Inactive" value={stats.inactive} icon={PowerOff} />
        <StatCard label="Occupied now" value={stats.occupied} icon={Users} />
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#f3dccb] bg-[#fef7f2] p-3 shadow-sm">
        <div
          role="group"
          aria-label="View"
          className="flex rounded-lg bg-[#f6e6da] p-1"
        >
          <button
            type="button"
            aria-pressed="true"
            aria-label="List view"
            className="grid size-8 place-items-center rounded-md bg-white text-secondary shadow-sm"
          >
            <List className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            disabled
            aria-label="Grid view (coming soon)"
            title="Grid view coming soon"
            className="grid size-8 place-items-center rounded-md text-secondary/50"
          >
            <LayoutGrid className="size-4" aria-hidden />
          </button>
        </div>
        <span className="text-[11px] text-secondary">List view</span>

        <label className="relative">
          <span className="sr-only">Filter by status</span>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as StatusFilter);
              setPage(1);
            }}
            className="h-9 appearance-none rounded-lg border border-[#f0dccd] bg-white/80 pl-3 pr-8 text-xs text-primary focus:border-secondary focus:outline-none"
          >
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="occupied">Occupied</option>
            <option value="free">Free</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
            aria-hidden
          />
        </label>

        <button
          type="button"
          className="ml-auto inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          <Plus className="size-4" aria-hidden />
          Add Table
        </button>
      </div>

      {/* Search */}
      <label className="relative block w-full max-w-xs">
        <span className="sr-only">Search tables</span>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search label, zone or QR..."
          className="h-9 w-full rounded-lg border border-[#f0dccd] bg-white/80 pl-9 pr-3 text-xs text-ink placeholder:text-ink/45 focus:border-secondary focus:outline-none"
        />
      </label>

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
                    Table
                    {asc ? (
                      <ArrowUp className="size-3" aria-hidden />
                    ) : (
                      <ArrowDown className="size-3" aria-hidden />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-4 py-3">Branch</th>
                <th scope="col" className="px-4 py-3">Zone</th>
                <th scope="col" className="px-4 py-3 text-center">Seats</th>
                <th scope="col" className="px-4 py-3">QR Code</th>
                <th scope="col" className="px-4 py-3">QR Status</th>
                <th scope="col" className="px-4 py-3">Status</th>
                <th scope="col" className="px-4 py-3">Occupancy</th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-10 text-center text-sm text-secondary"
                  >
                    No tables match your filters.
                  </td>
                </tr>
              ) : (
                rows.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-[#f6e3d6] last:border-0 hover:bg-white/50"
                  >
                    <td className="px-4 py-3.5 font-bold text-primary">
                      {t.label}
                    </td>
                    <td className="px-4 py-3.5 text-primary">
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden
                          className={cn(
                            "size-1.5 rounded-full",
                            branchDot[t.branch] ?? "bg-secondary",
                          )}
                        />
                        {t.branch}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-primary">{t.zone}</td>
                    <td className="px-4 py-3.5 text-center text-primary">
                      {t.seats}
                    </td>
                    <td className="px-4 py-3.5 text-primary">{t.qrCode}</td>
                    <td className="px-4 py-3.5">
                      <StatusPill tone={t.qrActive ? "success" : "neutral"}>
                        {t.qrActive ? "Active" : "Inactive"}
                      </StatusPill>
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusPill tone={t.active ? "success" : "neutral"}>
                        {t.active ? "Active" : "Inactive"}
                      </StatusPill>
                    </td>
                    <td className="px-4 py-3.5">
                      {!t.active ? (
                        <span className="text-primary/60">—</span>
                      ) : t.orderId ? (
                        <span className="inline-flex items-center gap-1.5 text-secondary">
                          <span
                            aria-hidden
                            className="size-1.5 rounded-full bg-secondary"
                          />
                          Occupied · #{t.orderId}
                        </span>
                      ) : (
                        <span className="text-primary/80">Free</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          aria-label={`View table ${t.label}`}
                          className={iconButton}
                        >
                          <Eye className="size-4" aria-hidden />
                        </button>
                        <button
                          type="button"
                          aria-label={`Toggle table ${t.label}`}
                          className={iconButton}
                        >
                          <Power className="size-4" aria-hidden />
                        </button>
                        <button
                          type="button"
                          aria-label={`Regenerate QR for table ${t.label}`}
                          className={iconButton}
                        >
                          <RefreshCw className="size-4" aria-hidden />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#f3dccb] px-4 py-3 text-[11px] text-secondary">
          <span>{range}</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
              className="disabled:opacity-40"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
              className="disabled:opacity-40"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}