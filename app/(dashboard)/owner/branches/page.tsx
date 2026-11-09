import { Plus } from "lucide-react";
import PageHeader from "@/app/_components/dashboard/PageHeader";
import BranchesView from "@/features/branches/components/BranchesView";
import { branches } from "@/features/branches/data";

export default function BranchesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Branches"
        description={`Green Bean Café runs ${branches.length} branches across Alexandria. Compare performance, jump into a branch workspace or request a new location.`}
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b2693b] to-[#97502f] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <Plus className="size-4" aria-hidden />
            Add Branch
          </button>
        }
      />
      <BranchesView />
    </div>
  );
}