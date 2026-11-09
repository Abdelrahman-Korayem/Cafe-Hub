"use client";

import { Clock } from "lucide-react";
import { useBranchScope } from "@/app/_components/shell/BranchScope";
import { staff } from "@/features/attendance/data";

export default function LateArrivalsChip() {
  const { branch, isAll } = useBranchScope();
  const late = staff.filter(
    (s) => s.late && (isAll || s.branch === branch),
  ).length;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fbe8cf] px-3 py-1 text-[11px] text-[#9a5f1d] ring-1 ring-[#f0dccd]">
      <Clock className="size-3" aria-hidden />
      {late} late {late === 1 ? "arrival" : "arrivals"} today
    </span>
  );
}