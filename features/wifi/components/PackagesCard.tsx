"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import StatusPill from "@/app/_components/dashboard/StatusPill";
import Switch from "@/app/_components/dashboard/Switch";
import { initialPackages } from "@/features/wifi/data";

const iconButton =
  "grid size-7 place-items-center rounded-md text-secondary transition-colors hover:bg-white hover:text-primary";

export default function PackagesCard() {
  const [packages, setPackages] = useState(initialPackages);

  const toggle = (id: string) =>
    setPackages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p)),
    );

  const activeCount = packages.filter((p) => p.active).length;

  return (
    <section
      aria-labelledby="paid-packages"
      className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div>
          <h3 id="paid-packages" className="text-sm font-bold text-primary">
            Paid packages
          </h3>
          <p className="text-[11px] text-secondary">
            {activeCount} active of {packages.length} packages
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          <Plus className="size-3.5" aria-hidden />
          Create Package
        </button>
      </div>

      <div className="overflow-x-auto border-t border-[#f3dccb] px-4 py-4">
        <table className="w-full min-w-[640px] overflow-hidden rounded-xl text-left text-xs">
          <thead>
            <tr className="bg-[#f6e6da] text-[10px] font-bold uppercase tracking-wider text-secondary">
              <th scope="col" className="px-4 py-3">Name</th>
              <th scope="col" className="px-4 py-3">Duration</th>
              <th scope="col" className="px-4 py-3 text-right">Price</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {packages.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[#f6e3d6] bg-white/40 last:border-0"
              >
                <td className="px-4 py-3">
                  <p className="font-bold text-primary">{p.name}</p>
                  <p className="text-[11px] text-secondary">{p.description}</p>
                </td>
                <td className="px-4 py-3 text-primary">{p.duration}</td>
                <td className="px-4 py-3 text-right font-bold text-primary">
                  EGP {p.price}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={p.active}
                      onChange={() => toggle(p.id)}
                      label={`${p.name} package active`}
                    />
                    <StatusPill tone={p.active ? "success" : "neutral"}>
                      {p.active ? "Active" : "Inactive"}
                    </StatusPill>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      aria-label={`Edit ${p.name}`}
                      className={iconButton}
                    >
                      <Pencil className="size-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      aria-label={`Delete ${p.name}`}
                      className={iconButton}
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}