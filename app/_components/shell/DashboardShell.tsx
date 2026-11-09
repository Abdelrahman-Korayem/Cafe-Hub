import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BranchScopeProvider } from "./BranchScope";
import type { NavSection, ShellUser } from "@/lib/dashboard/types";

type DashboardShellProps = {
  nav: NavSection[];
  brand: { name: string; subtitle: string };
  user: ShellUser;
  branches?: string[];
  notificationCount?: number;
  children: React.ReactNode;
};

export default function DashboardShell({
  nav,
  brand,
  user,
  branches = ["All Branches"],
  notificationCount,
  children,
}: DashboardShellProps) {
  return (
    <BranchScopeProvider branches={branches}>
      <div className="flex min-h-screen">
        <Sidebar nav={nav} brand={brand} user={user} />
        <div className="flex min-w-0 flex-1 flex-col bg-[#fcefe6]">
          <Topbar nav={nav} user={user} notificationCount={notificationCount} />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </BranchScopeProvider>
  );
}