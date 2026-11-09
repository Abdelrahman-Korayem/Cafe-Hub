import PageHeader from "@/app/_components/dashboard/PageHeader";
import InventoryView from "@/features/inventory/components/InventoryView";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory"
        description="Branch-level operational stock — items, batches, movements and manual receiving. Every tab respects the branch scope selected above."
      />
      <InventoryView />
    </div>
  );
}