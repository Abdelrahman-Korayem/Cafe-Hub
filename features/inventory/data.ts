import type { BatchStats, InventoryItem } from "./types";

const DT = "Downtown Alexandria";
const SM = "Smouha";
const SP = "Sporting";

type Row = [
  name: string,
  sku: string,
  category: string,
  unit: string,
  onHand: number,
  min: number,
  branch: string,
];

const rows: Row[] = [
  ["Arabica Coffee Beans (house blend)", "BRN-001", "Coffee & Tea", "kg", 24, 12, DT],
  ["Arabica Coffee Beans (house blend)", "BRN-001", "Coffee & Tea", "kg", 9.5, 10, SM],
  ["Arabica Coffee Beans (house blend)", "BRN-001", "Coffee & Tea", "kg", 18, 8, SP],
  ["Caramel Syrup", "SYR-006", "Syrups & Toppings", "L", 1, 2, SP],
  ["Cream Cheese (for cheesecake)", "DRY-012", "Fresh & Frozen", "kg", 5, 4, SM],
  ["Croissant Dough (frozen)", "FRZ-015", "Fresh & Frozen", "pcs", 40, 60, SM],
  ["Cups 16oz (large)", "PKG-009", "Packaging", "pcs", 380, 300, DT],
  ["Cups 16oz (large)", "PKG-009", "Packaging", "pcs", 180, 300, SP],
  ["Cups 8oz (small)", "PKG-008", "Packaging", "pcs", 640, 400, DT],
  ["Cups 8oz (small)", "PKG-008", "Packaging", "pcs", 460, 400, SP],
  ["Dark Chocolate Syrup", "SYR-005", "Syrups & Toppings", "L", 6.5, 3, DT],
  ["Fresh Full-fat Milk", "MLK-002", "Dairy", "L", 8, 20, DT],
  ["Fresh Full-fat Milk", "MLK-002", "Dairy", "L", 26, 15, SM],
  ["Fresh Full-fat Milk", "MLK-002", "Dairy", "L", 19, 12, SP],
  ["Matcha Powder", "TEA-003", "Coffee & Tea", "kg", 2.4, 1, DT],
  ["Mozzarella (shredded)", "DRY-013", "Fresh & Frozen", "kg", 7, 5, SM],
  ["Oat Milk (barista)", "MLK-004", "Dairy", "L", 6, 10, DT],
  ["Paper Napkins", "PKG-012", "Packaging", "pcs", 120, 200, SM],
  ["Sourdough Bread", "BKR-020", "Bakery", "pcs", 18, 10, SP],
  ["Vanilla Syrup", "SYR-004", "Syrups & Toppings", "L", 4, 2, SM],
];

export const items: InventoryItem[] = rows.map(
  ([name, sku, category, unit, onHand, min, branch]) => ({
    id: `${sku}-${branch}`,
    name,
    sku,
    category,
    unit,
    onHand,
    min,
    branch,
  }),
);

export const batchStats: Record<string, BatchStats> = {
  [DT]: { nearExpiry: 2, expired: 1 },
  [SM]: { nearExpiry: 2, expired: 0 },
  [SP]: { nearExpiry: 1, expired: 0 },
};