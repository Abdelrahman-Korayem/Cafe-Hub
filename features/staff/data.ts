import type { Role, StaffMember } from "./types";

const DT = "Downtown Alexandria";
const SM = "Smouha";
const SP = "Sporting";

type Row = [
  id: string,
  name: string,
  role: Role,
  branch: string,
  station: string,
  emailName: string,
  phone: string,
  active?: boolean,
];

const rows: Row[] = [
  ["st-01", "Mahmoud Ali", "Branch Manager", DT, "Floor", "mahmoud.ali", "+20 100 445 2210"],
  ["st-02", "Ahmed Hassan", "Captain / Order Staff", DT, "Main Bar", "ahmed.hassan", "+20 101 223 8845"],
  ["st-03", "Sara Ibrahim", "Barista / Kitchen", DT, "Main Bar", "sara.ibrahim", "+20 122 780 3312"],
  ["st-04", "Omar Khaled", "Cashier", DT, "Cashier", "omar.khaled", "+20 111 502 7743"],
  ["st-05", "Dina Fathy", "Branch Manager", SM, "Floor", "dina.fathy", "+20 106 334 9921"],
  ["st-06", "Mariam Adel", "Captain / Order Staff", SM, "Floor", "mariam.adel", "+20 109 661 2205"],
  ["st-07", "Youssef Tarek", "Barista / Kitchen", SM, "Cold Bar", "youssef.tarek", "+20 100 918 4467"],
  ["st-08", "Nour El-Sayed", "Cashier", SM, "Cashier", "nour.elsayed", "+20 112 447 5590"],
  ["st-09", "Hassan Gamal", "Branch Manager", SP, "Floor", "hassan.gamal", "+20 114 220 6634"],
  ["st-10", "Karim Mostafa", "Captain / Order Staff", SP, "Floor", "karim.mostafa", "+20 115 883 1172"],
  ["st-11", "Salma Nabil", "Barista / Kitchen", SP, "Main Bar", "salma.nabil", "+20 120 556 8841"],
  ["st-12", "Rana Sherif", "Cashier", SP, "Cashier", "rana.sherif", "+20 128 330 9926", false],
];

export const staff: StaffMember[] = rows.map(
  ([id, name, role, branch, station, emailName, phone, active = true]) => ({
    id,
    name,
    role,
    branch,
    station,
    email: `${emailName}@greenbeancafe.eg`,
    phone,
    active,
  }),
);