import { Check, Info, Minus } from "lucide-react";
import { permissionGroups } from "@/features/staff/permissions";
import { roles } from "@/features/staff/types";

export default function RolesPermissions() {
  return (
    <section
      aria-labelledby="roles-title"
      className="overflow-hidden rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
        <div>
          <h3 id="roles-title" className="text-sm font-bold text-primary">
            Roles and permissions
          </h3>
          <p className="text-[11px] text-secondary">
            What each role can do across the owner portal
          </p>
        </div>
        <span className="rounded-full bg-[#f6e6da] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-secondary">
          Requires product decision
        </span>
      </div>

      <p className="flex items-start gap-2 border-y border-[#f3dccb] bg-[#fdf1e8] px-4 py-3 text-[11px] text-secondary">
        <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
        This matrix is an illustrative proposal. The final role-permission
        configuration still requires a product decision before rollout — values
        below are read-only.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-xs">
          <thead>
            <tr className="border-b border-[#f3dccb] text-[10px] font-bold uppercase tracking-wider text-secondary">
              <th scope="col" className="px-4 py-3">Permission</th>
              {roles.map((r) => (
                <th key={r} scope="col" className="px-4 py-3 text-center">
                  {r}
                </th>
              ))}
            </tr>
          </thead>

          {permissionGroups.map((g) => (
            <tbody key={g.group}>
              <tr>
                <th
                  colSpan={5}
                  scope="colgroup"
                  className="bg-[#f8ece2] px-4 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-secondary"
                >
                  {g.group}
                </th>
              </tr>
              {g.rows.map((row) => (
                <tr key={row.label} className="border-b border-[#f6e3d6] last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-normal text-primary">
                    {row.label}
                  </th>
                  {row.access.map((allowed, i) => (
                    <td key={roles[i]} className="px-4 py-3 text-center">
                      {allowed ? (
                        <Check
                          role="img"
                          aria-label="Allowed"
                          className="mx-auto size-4 text-[#6a6b2b]"
                        />
                      ) : (
                        <Minus
                          role="img"
                          aria-label="Not allowed"
                          className="mx-auto size-3.5 text-primary/30"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}