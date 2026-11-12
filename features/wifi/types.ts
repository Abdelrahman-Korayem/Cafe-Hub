export type WifiPackage = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number; // EGP
  active: boolean;
  color: string; // used by the charts
};

export type WifiPurchase = {
  ref: string;
  token: string;
  packageId: string;
  branch: string;
  table: string;
  when: string;
  device: "iPhone" | "Android" | "Laptop";
};