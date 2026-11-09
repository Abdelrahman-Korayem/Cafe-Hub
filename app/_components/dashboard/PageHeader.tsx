"use client";

import { Check } from "lucide-react";
import { useBranchScope } from "@/app/_components/shell/BranchScope";

type PageHeaderProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
  chips?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  action,
  chips,
}: PageHeaderProps) {
  const { branch } = useBranchScope();

  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="min-w-0">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <p className="mt-1 max-w-3xl text-sm text-secondary">{description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[11px] text-secondary ring-1 ring-[#f0dccd]">
            <Check className="size-3" aria-hidden />
            Showing <strong className="text-primary">{branch}</strong> · Today
          </span>
          {chips}
        </div>
      </div>
      {action}
    </div>
  );
}