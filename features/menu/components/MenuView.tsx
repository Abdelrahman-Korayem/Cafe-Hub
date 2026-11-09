"use client";

import { useState } from "react";
import {
  Ban,
  ChevronDown,
  CircleCheck,
  Clock,
  Coffee,
  Ellipsis,
  LayoutGrid,
  Plus,
  ScanLine,
  Search,
  Tag,
} from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import Switch from "@/app/_components/dashboard/Switch";
import { categories, products as initialProducts } from "@/features/menu/data";
import { cn } from "@/lib/cn";

type StatusFilter = "all" | "available" | "unavailable";

const selectClass =
  "h-9 appearance-none rounded-lg border border-[#f0dccd] bg-white/80 pl-3 pr-8 text-xs text-primary focus:border-secondary focus:outline-none";

export default function MenuView() {
  const [products, setProducts] = useState(initialProducts);
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");

  const setAvailable = (id: string, available: boolean) =>
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, available } : p)),
    );

  const countIn = (name: string) =>
    products.filter((p) => p.category === name).length;

  const available = products.filter((p) => p.available).length;
  const subcategoryCount = categories.reduce(
    (n, c) => n + c.subcategories.length,
    0,
  );

  const q = query.trim().toLowerCase();
  const visible = products
    .filter((p) => category === "all" || p.category === category)
    .filter((p) =>
      status === "all" ? true : status === "available" ? p.available : !p.available,
    )
    .filter(
      (p) =>
        !q ||
        [p.name, p.category, p.subcategory].some((v) =>
          v.toLowerCase().includes(q),
        ),
    );

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total products"
          value={products.length}
          hint="0 OCR drafts"
          icon={Coffee}
          iconPosition="right"
        />
        <StatCard
          label="Categories"
          value={categories.length}
          hint={`${subcategoryCount} subcategories`}
          icon={LayoutGrid}
          iconPosition="right"
        />
        <StatCard
          label="Available"
          value={available}
          hint="live on menus"
          icon={CircleCheck}
          iconPosition="right"
        />
        <StatCard
          label="Unavailable"
          value={products.length - available}
          hint="hidden from menus"
          icon={Ban}
          iconPosition="right"
        />
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-[250px_1fr]">
        {/* Categories */}
        <aside
          aria-label="Categories"
          className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] p-3 shadow-sm"
        >
          <div className="flex items-center justify-between gap-2 px-1">
            <h3 className="flex items-center gap-2 text-xs font-bold text-primary">
              <Tag className="size-3.5 text-secondary" aria-hidden />
              Categories
              <span className="rounded-full bg-[#f6e6da] px-1.5 py-0.5 text-[10px] text-secondary">
                {categories.length}
              </span>
            </h3>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-[#f0dccd] bg-white/70 px-2.5 py-1.5 text-[11px] font-semibold text-primary hover:bg-white"
            >
              <Plus className="size-3" aria-hidden />
              Create
            </button>
          </div>

          <ul className="mt-3 space-y-1">
            <li>
              <button
                type="button"
                aria-pressed={category === "all"}
                onClick={() => setCategory("all")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-primary transition-colors",
                  category === "all" ? "bg-[#f4efc8]" : "hover:bg-white/60",
                )}
              >
                All categories
                <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-secondary">
                  {products.length}
                </span>
              </button>
            </li>

            {categories.map((c) => (
              <li key={c.name}>
                <button
                  type="button"
                  aria-pressed={category === c.name}
                  onClick={() => setCategory(c.name)}
                  className={cn(
                    "w-full rounded-lg px-3 py-2 text-left transition-colors",
                    category === c.name ? "bg-[#f4efc8]" : "hover:bg-white/60",
                  )}
                >
                  <span className="flex items-center justify-between text-xs font-semibold text-primary">
                    {c.name}
                    <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-secondary">
                      {countIn(c.name)}
                    </span>
                  </span>
                  <span className="mt-1.5 flex flex-wrap gap-1">
                    {c.subcategories.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-[#f0dccd] bg-white/70 px-1.5 py-0.5 text-[10px] text-secondary"
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                  <span className="mt-1.5 block text-[10px] text-secondary underline-offset-2 hover:underline">
                    Organize subcategories
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products */}
        <section
          aria-label="Products"
          className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] p-3 shadow-sm"
        >
          <div className="flex flex-wrap items-center gap-2">
            <label className="relative min-w-[180px] flex-1">
              <span className="sr-only">Search products</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
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
                {categories.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
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
                <option value="all">All status</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
                aria-hidden
              />
            </label>

            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#f1e2cf] px-3.5 text-xs font-semibold text-primary transition-colors hover:bg-[#ebd8c2]"
            >
              <Plus className="size-3.5" aria-hidden />
              Add Product
            </button>
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-3.5 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              <ScanLine className="size-3.5" aria-hidden />
              OCR Import
            </button>
          </div>

          <p className="mt-3 text-[11px] text-secondary">
            Showing {visible.length} of {products.length} products
          </p>

          {visible.length === 0 ? (
            <p className="py-12 text-center text-sm text-secondary">
              No products match your filters.
            </p>
          ) : (
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
              {visible.map((p) => (
                <li
                  key={p.id}
                  className="rounded-xl border border-[#f3dccb] bg-white/60 p-3.5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f4ecd0] text-lg"
                    >
                      {p.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-sm font-bold text-primary">
                        {p.name}
                      </h4>
                      <p className="truncate text-[11px] text-secondary">
                        {p.category} · {p.subcategory}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`More actions for ${p.name}`}
                      className="grid size-6 shrink-0 place-items-center rounded-md text-secondary hover:bg-white"
                    >
                      <Ellipsis className="size-4" aria-hidden />
                    </button>
                  </div>

                  <p className="mt-3 text-sm font-bold text-primary">
                    EGP {p.price}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-[#7b7b45]">
                    {p.sizes}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-secondary">
                    <Clock className="size-3" aria-hidden />
                    {p.prepMinutes} min
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-primary">
                    {p.available ? "Available" : "Unavailable"}
                    <Switch
                      checked={p.available}
                      onChange={(v) => setAvailable(p.id, v)}
                      label={`${p.name} availability`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}