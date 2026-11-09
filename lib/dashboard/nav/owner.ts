import type { NavSection } from "../types";

export const ownerNav: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Business Overview", href: "/owner", icon: "overview", exact: true },
      { label: "Live Operations", href: "/owner/live", icon: "live" },
    ],
  },
  {
    title: "Business Management",
    items: [
      { label: "Branches", href: "/owner/branches", icon: "branches" },
      { label: "Tables & QR Codes", href: "/owner/tables", icon: "tables" },
      { label: "Menu Management", href: "/owner/menu", icon: "menu" },
      { label: "Inventory", href: "/owner/inventory", icon: "inventory" },
      { label: "Staff Management", href: "/owner/staff", icon: "staff" },
      { label: "Attendance", href: "/owner/attendance", icon: "attendance" },
      { label: "WiFi Management", href: "/owner/wifi", icon: "wifi" },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Orders", href: "/owner/orders", icon: "orders" },
      { label: "Payments & Bills", href: "/owner/payments", icon: "payments" },
      { label: "Receipts & Printing", href: "/owner/receipts", icon: "receipts" },
    ],
  },
  {
    title: "Insights",
    items: [
      { label: "Analytics Dashboard", href: "/owner/analytics", icon: "analytics" },
      { label: "Sales Reports", href: "/owner/sales", icon: "sales" },
      { label: "Product Performance", href: "/owner/products", icon: "products" },
      {
        label: "Branch Performance",
        href: "/owner/branch-performance",
        icon: "branchPerformance",
      },
      {
        label: "Inventory Reports",
        href: "/owner/inventory-reports",
        icon: "inventoryReports",
      },
      { label: "AI Insights", href: "/owner/ai-insights", icon: "ai" },
      {
        label: "Revenue Leakage Monitoring",
        href: "/owner/revenue-leakage",
        icon: "leakage",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Café Profile & Branding", href: "/owner/profile", icon: "profile" },
      {
        label: "Business Configuration",
        href: "/owner/configuration",
        icon: "configuration",
      },
      { label: "Notifications", href: "/owner/notifications", icon: "notifications" },
      { label: "Audit Logs", href: "/owner/audit-logs", icon: "audit" },
    ],
  },
  {
    title: "Future",
    items: [
      { label: "Roadmap", href: "/owner/roadmap", icon: "roadmap", badge: "FUTURE" },
    ],
  },
];