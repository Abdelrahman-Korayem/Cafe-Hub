"use client";

import { CreditCard, Info, KeyRound, ScanLine, Wifi } from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { branches as branchRecords } from "@/features/branches/data";
import { initialPackages, purchases, sampleToken } from "@/features/wifi/data";
import { branchDot } from "@/lib/dashboard/branches";
import { cn } from "@/lib/cn";

const R = 40;
const C = 2 * Math.PI * R;

export default function WifiAnalytics() {
  const { branch, isAll } = useBranchScope();

  // Everything follows the global branch scope
  const scoped = isAll ? purchases : purchases.filter((p) => p.branch === branch);
  const orders = branchRecords
    .filter((b) => isAll || b.name === branch)
    .reduce((n, b) => n + b.orders, 0);

  const sold = initialPackages
    .map((pkg) => {
      const count = scoped.filter((p) => p.packageId === pkg.id).length;
      return { ...pkg, count, revenue: count * pkg.price };
    })
    .filter((p) => p.count > 0)
    .sort((a, b) => b.count - a.count);

  const total = scoped.length;
  const revenue = sold.reduce((n, p) => n + p.revenue, 0);
  const attachRate = orders ? (total / orders) * 100 : 0;
  const popular = sold[0];

  const segments = sold.reduce<
    { pkg: (typeof sold)[number]; len: number; start: number }[]
  >((acc, pkg) => {
    const prev = acc[acc.length - 1];
    acc.push({
      pkg,
      len: (pkg.count / total) * C,
      start: prev ? prev.start + prev.len : 0,
    });
    return acc;
  }, []);

  // Bar chart axis: 4 even steps
  const step = Math.max(1, Math.ceil(total / 4));
  const axisMax = step * 4;
  const ticks = [0, 1, 2, 3, 4].map((i) => i * step);

  const recent = scoped.slice(0, 10);
  const nameOf = (id: string) =>
    initialPackages.find((p) => p.id === id)?.name ?? id;
  const priceOf = (id: string) =>
    initialPackages.find((p) => p.id === id)?.price ?? 0;

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Paid WiFi purchases"
          value={total}
          hint="in selected range"
          icon={ScanLine}
          iconPosition="right"
        />
        <StatCard
          label="WiFi revenue"
          value={`EGP ${revenue.toLocaleString("en-US")}`}
          hint="packages sold × price"
          icon={CreditCard}
          iconPosition="right"
        />
        <StatCard
          label="WiFi Attach Rate"
          value={`${attachRate.toFixed(1)}%`}
          hint="▲ 0.6pp vs previous period"
          icon={Wifi}
          iconPosition="right"
        />
        <StatCard
          label="Popular package"
          value={popular ? popular.name : "—"}
          hint={
            popular
              ? `${Math.round((popular.count / total) * 100)}% of purchases`
              : "no purchases yet"
          }
          icon={KeyRound}
          iconPosition="right"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section
          aria-labelledby="popularity"
          className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
        >
          <div className="border-b border-[#f3dccb] px-4 py-3">
            <h3 id="popularity" className="text-sm font-bold text-primary">
              Package popularity
            </h3>
            <p className="text-[11px] text-secondary">
              Share of paid purchases per package
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 p-5">
            <div className="relative size-44">
              <svg
                viewBox="0 0 100 100"
                role="img"
                aria-label="Share of paid purchases per package"
                className="size-full -rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={R}
                  fill="none"
                  stroke="#f3e4d6"
                  strokeWidth="14"
                />
                {segments.map(({ pkg, len, start }) => (
                  <circle
                    key={pkg.id}
                    cx="50"
                    cy="50"
                    r={R}
                    fill="none"
                    stroke={pkg.color}
                    strokeWidth="14"
                    strokeDasharray={`${len} ${C - len}`}
                    strokeDashoffset={-start}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="text-2xl font-bold leading-none text-primary">
                    {total}
                  </p>
                  <p className="mt-1 text-[10px] text-secondary">
                    paid
                    <br />
                    purchases
                  </p>
                </div>
              </div>
            </div>

            <ul className="w-full max-w-xs space-y-2">
              {sold.map((p) => (
                <li key={p.id} className="flex items-center gap-2 text-[11px]">
                  <span
                    aria-hidden
                    className="size-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="flex-1 text-primary">{p.name}</span>
                  <span className="font-bold text-primary">{p.count} sold</span>
                  <span className="w-16 text-right text-secondary">
                    EGP {p.revenue}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="by-day"
          className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
        >
          <div className="border-b border-[#f3dccb] px-4 py-3">
            <h3 id="by-day" className="text-sm font-bold text-primary">
              Purchases by day
            </h3>
            <p className="text-[11px] text-secondary">
              Paid WiFi purchases across the selected range
            </p>
          </div>

          <div className="p-5">
            <div className="flex h-56 gap-3">
              <div className="flex flex-col-reverse justify-between text-[10px] text-secondary">
                {ticks.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="relative flex-1">
                {ticks.map((t, i) => (
                  <div
                    key={t}
                    aria-hidden
                    className="absolute inset-x-0 border-t border-[#f0dccd]"
                    style={{ bottom: `${i * 25}%` }}
                  />
                ))}
                <div className="relative flex h-full items-end justify-center">
                  <div
                    role="img"
                    aria-label={`${total} purchases today`}
                    className="w-[72%] rounded-t-sm bg-[#b2693b]"
                    style={{ height: `${(total / axisMax) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-[10px] text-secondary">Today</p>
          </div>
        </section>
      </div>

      {/* Recent purchases */}
      <section
        aria-labelledby="recent"
        className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <div>
            <h3 id="recent" className="text-sm font-bold text-primary">
              Recent purchases
            </h3>
            <p className="text-[11px] text-secondary">
              {recent.length} purchases in view · {isAll ? "All Branches" : branch}
            </p>
          </div>
          <span className="rounded-full border border-[#f0dccd] bg-white/70 px-3 py-1 text-[11px] text-secondary">
            Sample token{" "}
            <strong className="text-primary">{sampleToken}</strong>
          </span>
        </div>

        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full min-w-[820px] overflow-hidden rounded-xl text-left text-xs">
            <thead>
              <tr className="bg-[#f6e6da] text-[10px] font-bold uppercase tracking-wider text-secondary">
                <th scope="col" className="px-4 py-3">Ref</th>
                <th scope="col" className="px-4 py-3">Token</th>
                <th scope="col" className="px-4 py-3">Package</th>
                <th scope="col" className="px-4 py-3">Branch</th>
                <th scope="col" className="px-4 py-3">Table</th>
                <th scope="col" className="px-4 py-3 text-right">Amount</th>
                <th scope="col" className="px-4 py-3">When</th>
                <th scope="col" className="px-4 py-3">Device</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((p) => (
                <tr
                  key={p.ref}
                  className="border-b border-[#f6e3d6] bg-white/40 last:border-0"
                >
                  <td className="px-4 py-3 font-bold text-primary">{p.ref}</td>
                  <td className="px-4 py-3 text-secondary">{p.token}</td>
                  <td className="px-4 py-3 text-primary">{nameOf(p.packageId)}</td>
                  <td className="px-4 py-3 text-primary">
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden
                        className={cn(
                          "size-1.5 rounded-full",
                          branchDot[p.branch] ?? "bg-secondary",
                        )}
                      />
                      {p.branch}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-primary">{p.table}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary">
                    EGP {priceOf(p.packageId)}
                  </td>
                  <td className="px-4 py-3 text-secondary">{p.when}</td>
                  <td className="px-4 py-3 text-secondary">{p.device}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="flex items-center gap-2 border-t border-[#f3dccb] px-4 py-3 text-[11px] text-secondary">
          <Info className="size-3.5 shrink-0" aria-hidden />
          Payment for WiFi is taken with the bill or online — no payment gateway
          integrations are configured yet.
        </p>
      </section>
    </>
  );
}