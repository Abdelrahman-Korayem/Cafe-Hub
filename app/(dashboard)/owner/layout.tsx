import DashboardShell from "@/app/_components/shell/DashboardShell";
import { ownerNav } from "@/lib/dashboard/nav/owner";

const branches = ["All Branches", "Downtown Alexandria", "Smouha", "Sporting"];

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      nav={ownerNav}
      brand={{ name: "CafeHub", subtitle: "Green Bean Café" }}
      user={{ name: "Karim El-Masry", role: "Owner", scope: "All branches" }}
      branches={branches}
      notificationCount={5}
    >
      {children}
    </DashboardShell>
  );
}