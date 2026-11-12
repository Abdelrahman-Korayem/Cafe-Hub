import PageHeader from "@/app/_components/dashboard/PageHeader";
import PackagesCard from "@/features/wifi/components/PackagesCard";
import PurchaseFlow from "@/features/wifi/components/PurchaseFlow";
import WifiAnalytics from "@/features/wifi/components/WifiAnalytics";
import WifiPolicy from "@/features/wifi/components/WifiPolicy";

export default function WifiPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="WiFi"
        description="Guest WiFi policy, paid packages and uptake analytics for Green Bean Café."
      />
      <WifiPolicy />
      <PackagesCard />
      <PurchaseFlow />
      <WifiAnalytics />
    </div>
  );
}