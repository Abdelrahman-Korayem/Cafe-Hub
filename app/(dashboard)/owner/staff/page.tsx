import { Wallet } from "lucide-react";
import PageHeader from "@/app/_components/dashboard/PageHeader";
import RolesPermissions from "@/features/staff/components/RolesPermissions";
import StaffView from "@/features/staff/components/StaffView";

const payrollPoints = [
  "Salary setup, payslips and payroll runs",
  "Loans, advances and deductions",
  "Bonuses, promotions and contract management",
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Staff"
        description="Team directory, roles and permissions for Green Bean Café. Branch view follows the global scope selector."
      />

      <StaffView />
      <RolesPermissions />

      <section
        aria-labelledby="payroll-title"
        className="rounded-xl border border-[#f3dccb] bg-[#fbf3e6] p-5"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-lg bg-white/70 text-secondary">
            <Wallet className="size-4" aria-hidden />
          </span>
          <span className="rounded-full bg-[#f1e2cf] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-secondary">
            Future · Out of MVP
          </span>
        </div>
        <h3 id="payroll-title" className="mt-3 text-sm font-bold text-primary">
          Payroll and HR management
        </h3>
        <p className="mt-1 text-xs text-secondary">
          Salary administration and HR workflows are out of MVP scope for the
          owner portal.
        </p>
        <ul className="mt-3 space-y-1.5 text-xs text-secondary">
          {payrollPoints.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span aria-hidden className="size-1 rounded-full bg-secondary" />
              {p}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}