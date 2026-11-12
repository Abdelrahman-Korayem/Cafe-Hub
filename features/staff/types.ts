export const roles = [
  "Branch Manager",
  "Captain / Order Staff",
  "Barista / Kitchen",
  "Cashier",
] as const;

export type Role = (typeof roles)[number];

export type StaffMember = {
  id: string;
  name: string;
  role: Role;
  branch: string;
  station: string;
  email: string;
  phone: string;
  active: boolean;
};
