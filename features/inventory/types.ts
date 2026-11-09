export type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  category: string;
  unit: string;
  onHand: number;
  min: number; // minimum threshold
  branch: string;
};

export type BatchStats = {
  nearExpiry: number;
  expired: number;
};