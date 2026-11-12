import type { WifiPackage, WifiPurchase } from "./types";

const DT = "Downtown Alexandria";
const SM = "Smouha";
const SP = "Sporting";

export const initialPackages: WifiPackage[] = [
  {
    id: "30m",
    name: "30 Minutes",
    description: "Quick browsing while you finish your coffee.",
    duration: "30 min",
    price: 25,
    active: true,
    color: "#7b7b45",
  },
  {
    id: "1h",
    name: "1 Hour",
    description: "The most popular choice for work sessions.",
    duration: "1 hr",
    price: 40,
    active: true,
    color: "#97502f",
  },
  {
    id: "3h",
    name: "3 Hours",
    description: "Extended work or study session.",
    duration: "3 hrs",
    price: 90,
    active: true,
    color: "#d9a56a",
  },
  {
    id: "day",
    name: "Full Day",
    description: "Deactivated after low uptake — kept for reference.",
    duration: "10 hr",
    price: 120,
    active: false,
    color: "#c9b8a8",
  },
];

type Row = [
  packageId: string,
  branch: string,
  table: string,
  when: string,
  device: WifiPurchase["device"],
];

// Newest first. The first 10 rows are from the Figma, the rest are demo rows.
const rows: Row[] = [
  ["1h", DT, "T8", "just now", "iPhone"],
  ["30m", SM, "S5", "14 min ago", "Android"],
  ["1h", DT, "T3", "33 min ago", "Laptop"],
  ["3h", SM, "S1", "1h 1m ago", "iPhone"],
  ["30m", SP, "P4", "1h 28m ago", "Android"],
  ["1h", DT, "T12", "2h 0m ago", "Laptop"],
  ["1h", SP, "P2", "2h 45m ago", "iPhone"],
  ["30m", SM, "S8", "3h 30m ago", "Android"],
  ["3h", DT, "T5", "4h 20m ago", "Laptop"],
  ["1h", SP, "P6", "5h 20m ago", "iPhone"],
  ["1h", DT, "T2", "5h 50m ago", "Laptop"],
  ["1h", SM, "S3", "6h 15m ago", "iPhone"],
  ["30m", SP, "P8", "6h 40m ago", "Android"],
  ["1h", DT, "T9", "7h 5m ago", "iPhone"],
  ["1h", SM, "S6", "7h 30m ago", "Laptop"],
  ["3h", SP, "P1", "7h 55m ago", "Laptop"],
  ["1h", DT, "T7", "8h 20m ago", "Android"],
  ["30m", SM, "S2", "8h 45m ago", "iPhone"],
  ["1h", SP, "P7", "9h 10m ago", "Laptop"],
  ["30m", DT, "T11", "9h 35m ago", "Android"],
  ["1h", SM, "S4", "10h 0m ago", "iPhone"],
];

export const purchases: WifiPurchase[] = rows.map(
  ([packageId, branch, table, when, device], i) => ({
    ref: `GBW-${4820 + i}`,
    token: `GB-${(1000 + 77 * i).toString(16).toUpperCase()}-${(7000 + 13 * i)
      .toString(16)
      .toUpperCase()}`,
    packageId,
    branch,
    table,
    when,
    device,
  }),
);

export const sampleToken = purchases[0].token;