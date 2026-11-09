import type { Category, Product } from "./types";

export const categories: Category[] = [
  { name: "Hot Drinks", subcategories: ["Coffee", "Tea & Alternatives"] },
  { name: "Cold Drinks", subcategories: ["Iced Coffee", "Refreshers"] },
  { name: "Desserts", subcategories: ["Cakes & Slices", "Bakery"] },
  { name: "Food", subcategories: ["Sandwiches & Panini", "Plates & Breakfast"] },
];

const SML = "S/M/L +0/10/18";
const SINGLE = "Single size";

export const products: Product[] = [
  // Hot Drinks
  { id: "spanish-latte", name: "Spanish Latte", category: "Hot Drinks", subcategory: "Coffee", price: 85, sizes: SML, prepMinutes: 3, available: true, emoji: "☕" },
  { id: "cappuccino", name: "Cappuccino", category: "Hot Drinks", subcategory: "Coffee", price: 70, sizes: SML, prepMinutes: 3, available: true, emoji: "☕" },
  { id: "americano", name: "Americano", category: "Hot Drinks", subcategory: "Coffee", price: 55, sizes: SML, prepMinutes: 3, available: true, emoji: "☕" },
  { id: "flat-white", name: "Flat White", category: "Hot Drinks", subcategory: "Coffee", price: 75, sizes: SML, prepMinutes: 3, available: true, emoji: "☕" },
  { id: "mocha", name: "Mocha", category: "Hot Drinks", subcategory: "Coffee", price: 85, sizes: SML, prepMinutes: 4, available: true, emoji: "🍫" },
  { id: "turkish-coffee", name: "Turkish Coffee", category: "Hot Drinks", subcategory: "Coffee", price: 45, sizes: SINGLE, prepMinutes: 6, available: true, emoji: "🫖" },
  { id: "fresh-mint-tea", name: "Fresh Mint Tea", category: "Hot Drinks", subcategory: "Tea & Alternatives", price: 40, sizes: SINGLE, prepMinutes: 4, available: true, emoji: "🌿" },
  { id: "hot-chocolate", name: "Hot Chocolate", category: "Hot Drinks", subcategory: "Tea & Alternatives", price: 80, sizes: SML, prepMinutes: 4, available: true, emoji: "🍫" },

  // Cold Drinks
  { id: "iced-spanish-latte", name: "Iced Spanish Latte", category: "Cold Drinks", subcategory: "Iced Coffee", price: 90, sizes: SML, prepMinutes: 4, available: true, emoji: "🧊" },
  { id: "iced-matcha", name: "Iced Matcha", category: "Cold Drinks", subcategory: "Iced Coffee", price: 95, sizes: SML, prepMinutes: 5, available: true, emoji: "🍵" },
  { id: "cold-brew", name: "Cold Brew", category: "Cold Drinks", subcategory: "Iced Coffee", price: 85, sizes: SML, prepMinutes: 2, available: true, emoji: "🧊" },
  { id: "fresh-lemonade", name: "Fresh Lemonade", category: "Cold Drinks", subcategory: "Refreshers", price: 60, sizes: SML, prepMinutes: 3, available: true, emoji: "🍋" },
  { id: "hibiscus-iced-tea", name: "Hibiscus Iced Tea", category: "Cold Drinks", subcategory: "Refreshers", price: 55, sizes: SML, prepMinutes: 3, available: false, emoji: "🌺" },

  // Desserts
  { id: "ny-cheesecake", name: "New York Cheesecake", category: "Desserts", subcategory: "Cakes & Slices", price: 95, sizes: SINGLE, prepMinutes: 2, available: true, emoji: "🍰" },
  { id: "kunafa-cheesecake", name: "Kunafa Cheesecake", category: "Desserts", subcategory: "Cakes & Slices", price: 100, sizes: SINGLE, prepMinutes: 2, available: true, emoji: "🍰" },
  { id: "chocolate-lava-cake", name: "Chocolate Lava Cake", category: "Desserts", subcategory: "Cakes & Slices", price: 90, sizes: SINGLE, prepMinutes: 6, available: true, emoji: "🍫" },
  { id: "butter-croissant", name: "Butter Croissant", category: "Desserts", subcategory: "Bakery", price: 45, sizes: SINGLE, prepMinutes: 4, available: true, emoji: "🥐" },
  { id: "chocolate-muffin", name: "Chocolate Muffin", category: "Desserts", subcategory: "Bakery", price: 40, sizes: SINGLE, prepMinutes: 2, available: true, emoji: "🧁" },

  // Food
  { id: "chicken-club", name: "Chicken Club", category: "Food", subcategory: "Sandwiches & Panini", price: 130, sizes: SINGLE, prepMinutes: 8, available: true, emoji: "🥪" },
  { id: "halloumi-panini", name: "Halloumi Panini", category: "Food", subcategory: "Sandwiches & Panini", price: 120, sizes: SINGLE, prepMinutes: 8, available: true, emoji: "🥪" },
  { id: "eggs-benedict", name: "Eggs Benedict", category: "Food", subcategory: "Plates & Breakfast", price: 145, sizes: SINGLE, prepMinutes: 10, available: true, emoji: "🍳" },
  { id: "shakshuka", name: "Shakshuka", category: "Food", subcategory: "Plates & Breakfast", price: 125, sizes: SINGLE, prepMinutes: 10, available: true, emoji: "🍳" },
];
