"use client";

import { useState } from "react";
import { ChevronDown, Info, Wifi } from "lucide-react";
import QrPattern from "@/app/_components/dashboard/QrPattern";

const modes = ["Free + Paid packages", "Free only", "Paid packages only"];

export default function WifiPolicy() {
  const [mode, setMode] = useState(modes[0]);
  const [savedMode, setSavedMode] = useState(modes[0]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.9fr_1fr]">
      {/* Policy */}
      <section
        aria-labelledby="wifi-policy"
        className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#f3dccb] px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-lg bg-[#f4ecd0] text-secondary">
              <Wifi className="size-4" aria-hidden />
            </span>
            <div>
              <h3 id="wifi-policy" className="text-sm font-bold text-primary">
                WiFi policy
              </h3>
              <p className="text-[11px] text-secondary">
                Applies to every branch until branch-level configuration ships
              </p>
            </div>
          </div>
          <span className="rounded-full border border-[#e3cdb8] bg-white/70 px-3 py-1 text-[10px] font-semibold text-secondary">
            {savedMode}
          </span>
        </div>

        <div className="space-y-3 p-4">
          <label className="block">
            <span className="text-xs font-semibold text-primary">WiFi mode</span>
            <span className="relative mt-2 block max-w-xs">
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="h-10 w-full appearance-none rounded-lg border border-[#f0dccd] bg-white/80 pl-3 pr-9 text-xs text-primary focus:border-secondary focus:outline-none"
              >
                {modes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
                aria-hidden
              />
            </span>
          </label>
          <p className="text-[11px] text-secondary">
            Controls what guests see when they connect at any branch.
          </p>

          <p className="flex items-center gap-2 rounded-lg border border-[#f3dccb] bg-[#fdf1e8] px-3 py-3 text-[11px] text-secondary">
            <Info className="size-3.5 shrink-0" aria-hidden />
            Static QR per branch, printed once and placed on tables.
          </p>

          <div className="flex justify-end">
            <button
              type="button"
              disabled={mode === savedMode}
              onClick={() => setSavedMode(mode)}
              className="rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Save policy
            </button>
          </div>
        </div>
      </section>

      {/* Static QR concept */}
      <section
        aria-labelledby="wifi-qr"
        className="rounded-xl border border-[#f3dccb] bg-[#fdf1e8] p-4 shadow-sm"
      >
        <div className="flex items-center justify-between gap-2">
          <h3 id="wifi-qr" className="text-sm font-bold text-secondary">
            Static free-WiFi QR
          </h3>
          <span className="rounded-full border border-[#e3b896] bg-white/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-secondary">
            Concept
          </span>
        </div>

        <figure className="mt-3 rounded-xl bg-white p-4 text-center">
          <QrPattern
            label="Static free-WiFi QR concept visual"
            seed={3}
            className="mx-auto size-28 text-primary"
          />
          <figcaption className="mt-3 text-[10px] font-semibold text-secondary">
            Static free-WiFi QR — concept
          </figcaption>
        </figure>

        <p className="mt-3 text-[11px] leading-relaxed text-secondary">
          One static QR per branch for the free tier, configured at branch level
          and printed once for the tables. Paid packages live on the same
          landing page.
        </p>
      </section>
    </div>
  );
}