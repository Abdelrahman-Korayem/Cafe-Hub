"use client";

import {
  Armchair,
  Building2,
  ChevronRight,
  Clock,
  MapPin,
  Pencil,
  Phone,
  TriangleAlert,
  Users,
} from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import StatusPill from "@/app/_components/dashboard/StatusPill";
import Sparkline from "@/app/_components/dashboard/Sparkline";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { branches } from "@/features/branches/data";
import { cn } from "@/lib/cn";

const formatEgp = (n: number) =>
  n >= 1000 ? `EGP ${(n / 1000).toFixed(1)}K` : `EGP ${n}`;

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

export default function BranchesView() {
  const { branch, isAll } = useBranchScope();

  // Everything follows the global branch scope
  const scoped = isAll ? branches : branches.filter((b) => b.name === branch);
  const operational = scoped.filter((b) => b.status === "operational").length;

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Branches"
          value={scoped.length}
          hint={
            operational === scoped.length
              ? "all operational"
              : `${operational} operational`
          }
          icon={Building2}
        />
        <StatCard
          label="Team members"
          value={sum(scoped.map((b) => b.staff))}
          hint={isAll ? "across all branches" : "at this branch"}
          icon={Users}
        />
        <StatCard
          label="Tables"
          value={sum(scoped.map((b) => b.tables))}
          hint="QR-enabled floor plan"
          icon={Armchair}
        />
        <StatCard
          label="Open alerts"
          value={sum(scoped.map((b) => b.alerts))}
          hint={`${sum(scoped.map((b) => b.attention))} need attention`}
          icon={TriangleAlert}
        />
      </div>

      {/* Branch network */}
      <section aria-labelledby="branch-network">
        <h3 id="branch-network" className="text-sm font-bold text-primary">
          Branch network
          <span className="ml-2 text-[11px] font-normal text-secondary">
            Revenue for today · every card links into the branch workspace
          </span>
        </h3>

        <ul className="mt-3 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {scoped.map((b) => {
            const down = b.revenueDelta < 0;
            return (
              <li
                key={b.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#f0c9ad] bg-[#fef7f2] p-5 shadow-sm"
              >
                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-primary">
                      <span
                        aria-hidden
                        className={cn("size-2 rounded-full", b.dotClass)}
                      />
                      {b.name}
                    </h4>
                    <p className="mt-0.5 text-[11px] text-secondary">
                      {b.area} · {b.seats} seats
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <StatusPill tone={b.status === "operational" ? "success" : "neutral"}>
                      {b.status === "operational" ? "Operational" : "Closed"}
                    </StatusPill>
                    {b.alerts > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#f9e0d4] px-2 py-0.5 text-[10px] font-medium text-[#a2402a]">
                        <TriangleAlert className="size-3" aria-hidden />
                        {b.alerts} alerts
                      </span>
                    )}
                  </div>
                </div>

                {/* Details */}
                <ul className="mt-4 space-y-2 text-xs text-primary/85">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-secondary" aria-hidden />
                    {b.address}
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-3.5 shrink-0 text-secondary" aria-hidden />
                    {b.phone}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="size-3.5 shrink-0 text-secondary" aria-hidden />
                    {b.hours}
                  </li>
                </ul>

                {/* Today */}
                <dl className="mt-4 grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-2 rounded-xl bg-[#f8e9de] p-3">
                  <div>
                    <dt className="text-[9px] font-bold uppercase tracking-wide text-secondary">
                      Revenue
                    </dt>
                    <dd className="mt-0.5 text-xs font-bold text-primary">
                      {formatEgp(b.revenue)}
                    </dd>
                    <dd
                      className={cn(
                        "text-[10px] font-semibold",
                        down ? "text-[#b0452d]" : "text-[#4f7a2e]",
                      )}
                    >
                      {down ? "▼" : "▲"} {Math.abs(b.revenueDelta)}%
                    </dd>
                  </div>
                  {[
                    ["Orders", b.orders],
                    ["Tables", b.tables],
                    ["Staff", b.staff],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[9px] font-bold uppercase tracking-wide text-secondary">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-xs font-bold text-primary">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Sparkline
                  data={b.trend}
                  className="-mx-5 mt-3 h-10 w-[calc(100%+2.5rem)] max-w-none text-secondary"
                />

                {/* Actions */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                  >
                    Open workspace
                    <ChevronRight className="size-3.5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e3b896] bg-white/70 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-white"
                  >
                    <Pencil className="size-3.5" aria-hidden />
                    Edit branch
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-[#f6e6da] px-3.5 py-2 text-xs font-semibold text-secondary transition-colors hover:bg-[#f1dccb]"
                  >
                    Performance
                  </button>
                  <button
                    type="button"
                    className="rounded-lg px-3.5 py-2 text-xs font-semibold text-secondary transition-colors hover:bg-[#f6e6da]"
                  >
                    Settings
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}