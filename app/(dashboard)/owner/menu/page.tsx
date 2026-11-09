import PageHeader from "@/app/_components/dashboard/PageHeader";
import MenuView from "@/features/menu/components/MenuView";

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Menu Management"
        description="Maintain the Green Bean Café catalog — categories, pricing, sizes, add-ons and branch availability. Changes apply to menus across branches."
      />
      <MenuView />
    </div>
  );
}