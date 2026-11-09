"use client";

import { useState } from "react";
import { CalendarOff, ChevronDown, LogIn, LogOut, UserX } from "lucide-react";
import StatCard from "@/app/_components/dashboard/StatCard";
import StatusPill from "@/app/_components/dashboard/StatusPill";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { staff as initialStaff } from "@/features/attendance/data";
import type {
  AttendanceStatus,
  StaffAttendance,
} from "@/features/attendance/types";
import { branchDot } from "@/lib/dashboard/branches";
import { getInitials } from "@/lib/dashboard/utils";
import { cn } from "@/lib/cn";
import QrCheckinConcept from "./QrCheckinConcept";

type Tab = "today" | "history";

const count = (list: StaffAttendance[], status: AttendanceStatus) =>
  list.filter((s) => s.status === status).length;

function StatusCell({ s }: { s: StaffAttendance }) {
  switch (s.status) {
    case "checked-in":
      return (
        <span className="inline-flex items-center gap-1.5">
          <StatusPill tone="success">Checked in</StatusPill>
          {s.late && (
            <StatusPill tone="warning" dot={false}>
              Late
            </StatusPill>
          )}
        </span>
      );
    case "checked-out":
      return <StatusPill tone="neutral">Checked out</StatusPill>;
    case "not-checked-in":
      return (
        <StatusPill tone="warning" dot={false}>
          Not checked in
        </StatusPill>
      );
    case "absent":
      return (
        <StatusPill tone="danger" dot={false}>
          Absent
        </StatusPill>
      );
    case "day-off":
      return (
        <StatusPill tone="neutral" dot={false}>
          Day off
        </StatusPill>
      );
  }
}

const dash = <span className="text-primary/40">—</span>;

export default function AttendanceView() {
  const { branch, isAll } = useBranchScope();
  const [records, setRecords] = useState(initialStaff);
  const [tab, setTab] = useState<Tab>("today");
  const [staffId, setStaffId] = useState("all");

  const scoped = isAll ? records : records.filter((s) => s.branch === branch);
  const selected = scoped.find((s) => s.id === staffId);
  const visible = selected ? [selected] : scoped;

  const pending = scoped.find((s) => s.status === "not-checked-in");
  const dayOff = count(scoped, "day-off");

  const simulateCheckIn = () => {
    if (!pending) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes(),
    ).padStart(2, "0")}`;
    setRecords((prev) =>
      prev.map((s) =>
        s.id === pending.id
          ? { ...s, status: "checked-in", checkIn: time }
          : s,
      ),
    );
  };

  return (
    <>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Checked in"
          value={count(scoped, "checked-in")}
          hint="on shift right now"
          icon={LogIn}
          iconPosition="right"
        />
        <StatCard
          label="Checked out"
          value={count(scoped, "checked-out")}
          hint="finished shift today"
          icon={LogOut}
          iconPosition="right"
        />
        <StatCard
          label="Not checked in"
          value={count(scoped, "not-checked-in")}
          hint="expected but no scan yet"
          icon={UserX}
          iconPosition="right"
        />
        <StatCard
          label="Absent / Day off"
          value={count(scoped, "absent") + dayOff}
          hint={`${dayOff} on scheduled day off`}
          icon={CalendarOff}
          iconPosition="right"
        />
      </div>

      {/* Tabs + staff filter */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label="Attendance views"
          className="inline-flex rounded-xl bg-white/70 p-1 shadow-sm ring-1 ring-[#f0dccd]"
        >
          {(
            [
              ["today", "Today"],
              ["history", "7-Day History"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-semibold transition-colors",
                tab === id
                  ? "bg-gradient-to-r from-[#b2693b] to-[#97502f] text-white shadow-sm"
                  : "text-primary hover:bg-[#f6e6da]",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "today" && (
          <label className="relative">
            <span className="sr-only">Filter by staff member</span>
            <select
              value={selected ? selected.id : "all"}
              onChange={(e) => setStaffId(e.target.value)}
              className="h-9 appearance-none rounded-lg border border-[#f0dccd] bg-white/80 pl-3 pr-8 text-xs text-primary focus:border-secondary focus:outline-none"
            >
              <option value="all">All staff</option>
              {scoped.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-secondary"
              aria-hidden
            />
          </label>
        )}
      </div>

      {tab === "history" ? (
        <div
          role="tabpanel"
          className="rounded-xl border border-dashed border-[#e3b896] bg-[#fef7f2] py-16 text-center text-sm text-secondary"
        >
          The 7-Day History view is coming soon.
        </div>
      ) : (
        <div role="tabpanel" className="space-y-6">
          <QrCheckinConcept
            onSimulate={simulateCheckIn}
            canSimulate={Boolean(pending)}
          />

          {/* Today board */}
          <section
            aria-label="Today board"
            className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
              <div>
                <h3 className="text-sm font-bold text-primary">Today board</h3>
                <p className="text-[11px] text-secondary">
                  {visible.length} staff in view · {isAll ? "All Branches" : branch}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill tone="success">
                  {count(visible, "checked-in")} checked in
                </StatusPill>
                <StatusPill tone="warning" dot={false}>
                  {count(visible, "not-checked-in")} pending
                </StatusPill>
                <StatusPill tone="danger" dot={false}>
                  {count(visible, "absent")} absent
                </StatusPill>
              </div>
            </div>

            <div className="overflow-x-auto px-4 pb-4">
              <table className="w-full min-w-[760px] overflow-hidden rounded-xl text-left text-xs">
                <thead>
                  <tr className="bg-[#f6e6da] text-[10px] font-bold uppercase tracking-wider text-secondary">
                    <th scope="col" className="px-4 py-3">Staff</th>
                    <th scope="col" className="px-4 py-3">Branch</th>
                    <th scope="col" className="px-4 py-3">Shift</th>
                    <th scope="col" className="px-4 py-3">Check-in</th>
                    <th scope="col" className="px-4 py-3">Check-out</th>
                    <th scope="col" className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-10 text-center text-sm text-secondary"
                      >
                        No staff to show.
                      </td>
                    </tr>
                  ) : (
                    visible.map((s) => (
                      <tr
                        key={s.id}
                        className="border-b border-[#f6e3d6] bg-white/40 last:border-0"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f1e6c8] text-[11px] font-bold text-primary">
                              {getInitials(s.name)}
                            </span>
                            <div>
                              <p className="font-bold text-primary">{s.name}</p>
                              <p className="text-[10px] text-secondary">{s.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-primary">
                          <span className="inline-flex items-center gap-2">
                            <span
                              aria-hidden
                              className={cn(
                                "size-1.5 rounded-full",
                                branchDot[s.branch] ?? "bg-secondary",
                              )}
                            />
                            {s.branch}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-secondary">{s.shift}</td>
                        <td className="px-4 py-3 font-bold text-primary">
                          {s.checkIn ?? dash}
                        </td>
                        <td className="px-4 py-3 font-bold text-primary">
                          {s.checkOut ?? dash}
                        </td>
                        <td className="px-4 py-3">
                          <StatusCell s={s} />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </>
  );
}