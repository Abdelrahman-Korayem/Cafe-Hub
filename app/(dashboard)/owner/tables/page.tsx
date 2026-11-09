import PageHeader from "@/app/_components/dashboard/PageHeader";
import TablesView from "@/features/tables/components/TablesView";

export default function TablesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tables & QR"
        description="Floor plan, QR ordering codes and table availability. Change the branch scope in the header to focus on one location — counts and occupancy follow the global scope."
      />
      <TablesView />
    </div>
  );
}