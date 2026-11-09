export type BranchRecord = {
  id: string;
  name: string;
  area: string;
  seats: number;
  status: "operational" | "maintenance" | "offline";
  alerts: number;
  attention: number;
  address: string;
  phone: string;
  hours: string;
  revenue: number;
  revenueDelta: number;
  orders: number;
  tables: number;
  staff: number;
  dotClass: string;
  trend: number[];
};

export const branches: BranchRecord[] = [
  {
    id: "downtown-alexandria",
    name: "Downtown Alexandria",
    area: "Downtown",
    seats: 58,
    status: "operational",
    alerts: 3,
    attention: 2,
    address: "52 Saad Zaghloul St., Downtown, Alexandria",
    phone: "+20 3 486 2145",
    hours: "08:00 – 00:30 daily",
    revenue: 6600,
    revenueDelta: -50.9,
    orders: 73,
    tables: 16,
    staff: 4,
    dotClass: "bg-[#7b7b45]",
    trend: [2, 3, 3, 4, 5, 5, 6, 6, 1, 1, 1, 1],
  },
  {
    id: "smouha",
    name: "Smouha",
    area: "Smouha",
    seats: 44,
    status: "operational",
    alerts: 3,
    attention: 2,
    address: "26 Fawzy Moalem St., Smouha, Alexandria",
    phone: "+20 3 427 6690",
    hours: "08:30 – 00:00 daily",
    revenue: 3800,
    revenueDelta: -55.9,
    orders: 44,
    tables: 12,
    staff: 4,
    dotClass: "bg-[#4f6b3a]",
    trend: [2, 2, 3, 4, 4, 5, 5, 5, 1, 1, 1, 1],
  },
  {
    id: "sporting",
    name: "Sporting",
    area: "Sporting",
    seats: 36,
    status: "operational",
    alerts: 2,
    attention: 1,
    address: "7 Abu Qir St., Sporting, Alexandria",
    phone: "+20 3 445 8823",
    hours: "09:00 – 00:00 daily",
    revenue: 2600,
    revenueDelta: -62.1,
    orders: 31,
    tables: 10,
    staff: 4,
    dotClass: "bg-[#c8743c]",
    trend: [1, 2, 3, 3, 4, 4, 5, 5, 1, 1, 1, 1],
  },
];