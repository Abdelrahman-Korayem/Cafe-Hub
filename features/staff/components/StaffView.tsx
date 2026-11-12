"use client";

import { useState } from "react";
import {
  Building2,
  ChevronDown,
  Eye,
  LogIn,
  Pencil,
  Plus,
  Power,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import StatusPill from "@/app/_components/dashboard/StatusPill";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { staff as attendance } from "@/features/attendance/data";
import { staff as initialStaff } from "@/features/staff/data";
import { roles, type Role } from "@/features/staff/types";
import { branchDot } from "@/lib/dashboard/branches";
import { cn } from "@/lib/cn";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const iconButton =
  "grid size-7 place-items-center rounded-md text-secondary transition-colors hover:bg-white hover:text-primary";

export default function StaffView() {
  const { branches, branch, isAll } = useBranchScope();
  const [members, setMembers] = useState(initialStaff);
  const [role, setRole] = useState<"all" | Role>("all");
  const [query, setQuery] = useState("");

  const toggleActive = (id: string) =>
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, active: !m.active } : m)),
    );

  // Everything follows the global branch scope
  const inScope = (b: string) => isAll || b === branch;
  const scoped = members.filter((m) => inScope(m.branch));
  const activeCount = scoped.filter((m) => m.active).length;
  const checkedIn = attendance.filter(
    (a) => a.status === "checked-in" && inScope(a.branch),
  ).length;
  const branchList = branches.slice(1).filter(inScope); // skip "All Branches"

  const q = query.trim().toLowerCase();
  const visible = scoped
    .filter((m) => role === "all" || m.role === role)
    .filter(
      (m) =>
        !q ||
        [m.name, m.email, m.phone, m.id].some((v) => v.toLowerCase().includes(q)),
    );

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total staff"
          value={scoped.length}
          hint="people in scope"
          icon={Users}
          iconPosition="right"
        />
        <StatCard
          label="Active"
          value={activeCount}
          hint={`${scoped.length - activeCount} inactive`}
          icon={UserCheck}
          iconPosition="right"
        />
        <StatCard
          label="Checked in now"
          value={checkedIn}
          hint="from today attendance"
          icon={LogIn}
          iconPosition="right"
        />

        <div className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] p-4 shadow-sm">
          <p className="flex items-center gap-2 text-xs text-secondary">
            <Building2 className="size-3.5" aria-hidden />
            Staff by branch
          </p>
          <ul className="mt-3 space-y-2">
            {branchList.map((name) => {
              const inBranch = members.filter((m) => m.branch === name);
              const act = inBranch.filter((m) => m.active).length;
              return (
                <li key={name} className="flex items-center gap-2 text-xs text-primary">
                  <span
                    aria-hidden
                    className={cn("size-1.5 rounded-full", branchDot[name] ?? "bg-secondary")}
                  />
                  <span className="flex-1 truncate">{name}</span>
                  <span className="font-bold">{inBranch.length}</span>
                  <span className="w-11 text-right text-[10px] text-secondary">
                    {act} act.
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Team directory */}
      <section
        aria-label="Team directory"
        className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <h3 className="text-sm font-bold text-primary">Team directory</h3>
            <p className="text-[11px] text-secondary">
              {visible.length} of {scoped.length} staff shown
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <li
                key={r}
                className="rounded-full border border-[#f0dccd] bg-white/70 px-3 py-1 text-[11px] text-secondary"
              >
                {r}{" "}
                <strong className="text-primary">
                  {scoped.filter((m) => m.role === r).length}
                </strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[#f3dccb] px-4 py-3">
          <label className="relative w-full max-w-[260px]">
            <span className="sr-only">Search staff</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, phone..."
              className="h-9 w-full rounded-lg border border-[#f0dccd] bg-white/80 pl-9 pr-3 text-xs text-ink placeholder:text-ink/45 focus:border-secondary focus:outline-none"
            />
          </label>

          <label className="relative">
            <span className="sr-only">Filter by role</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "all" | Role)}
              className="h-9 appearance-none rounded-lg border border-[#f0dccd] bg-white/80 pl-3 pr-8 text-xs text-primary focus:border-secondary focus:outline-none"
            >
              <option value="all">All roles</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
              aria-hidden
            />
          </label>

          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-4 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <Plus className="size-3.5" aria-hidden />
            Add Staff Member
          </button>
        </div>

        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full min-w-[900px] overflow-hidden rounded-xl text-left text-xs">
            <thead>
              <tr className="bg-[#f6e6da] text-[10px] font-bold uppercase tracking-wider text-secondary">
                <th scope="col" className="px-4 py-3">Staff member</th>
                <th scope="col" className="px-4 py-3">Role</th>
                <th scope="col" className="px-4 py-3">Branch</th>
                <th scope="col" className="px-4 py-3">Station</th>
                <th scope="col" className="px-4 py-3">Contact</th>
                <th scope="col" className="px-4 py-3">Status</th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-10 text-center text-sm text-secondary"
                  >
                    No staff match your filters.
                  </td>
                </tr>
              ) : (
                visible.map((m) => (
                  <tr
                    key={m.id}
                    className="border-b border-[#f6e3d6] bg-white/40 last:border-0"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f1e6c8] text-[11px] font-bold text-primary">
                          {initials(m.name)}
                        </span>
                        <div>
                          <p className="font-bold text-primary">{m.name}</p>
                          <p className="text-[10px] text-secondary">{m.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-primary">{m.role}</td>
                    <td className="px-4 py-3 text-primary">
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden
                          className={cn(
                            "size-1.5 rounded-full",
                            branchDot[m.branch] ?? "bg-secondary",
                          )}
                        />
                        {m.branch}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-secondary">{m.station}</td>
                    <td className="px-4 py-3">
                      <p className="text-primary">{m.email}</p>
                      <p className="text-[11px] text-secondary">{m.phone}</p>
                    </td>
                    <td className="px-4 py-3">
                      <StatusPill
                        tone={m.active ? "success" : "neutral"}
                        dot={m.active}
                      >
                        {m.active ? "Active" : "Inactive"}
                      </StatusPill>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          aria-label={`View ${m.name}`}
                          className={iconButton}
                        >
                          <Eye className="size-4" aria-hidden />
                        </button>
                        <button
                          type="button"
                          aria-label={`Edit ${m.name}`}
                          className={iconButton}
                        >
                          <Pencil className="size-4" aria-hidden />
                        </button>
                        <button
                          type="button"
                          aria-label={`Permissions for ${m.name}`}
                          className={iconButton}
                        >
                          <ShieldCheck className="size-4" aria-hidden />
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleActive(m.id)}
                          aria-label={`${m.active ? "Deactivate" : "Activate"} ${m.name}`}
                          className={iconButton}
                        >
                          <Power className="size-4" aria-hidden />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}