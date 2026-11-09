export type Category = {
  name: string;
  subcategories: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number; // EGP
  sizes: string;
  prepMinutes: number;
  available: boolean;
  emoji: string;
};