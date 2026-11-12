import type { StaffAttendance } from "./types";

const DT = "Downtown Alexandria";
const SM = "Smouha";
const SP = "Sporting";

const MORNING = "Morning 08–16";
const EVENING = "Evening 16–00";

export const staff: StaffAttendance[] = [
  { id: "st-01", name: "Mahmoud Ali", branch: DT, shift: MORNING, checkIn: "07:54", checkOut: null, status: "checked-in", late: false },
  { id: "st-02", name: "Ahmed Hassan", branch: DT, shift: MORNING, checkIn: "08:06", checkOut: null, status: "checked-in", late: true },
  { id: "st-03", name: "Sara Ibrahim", branch: DT, shift: MORNING, checkIn: "07:49", checkOut: null, status: "checked-in", late: false },
  { id: "st-04", name: "Omar Khaled", branch: DT, shift: EVENING, checkIn: null, checkOut: null, status: "not-checked-in", late: false },

  { id: "st-05", name: "Dina Fathy", branch: SM, shift: MORNING, checkIn: "08:22", checkOut: null, status: "checked-in", late: true },
  { id: "st-06", name: "Mariam Adel", branch: SM, shift: MORNING, checkIn: "08:25", checkOut: null, status: "checked-in", late: true },
  { id: "st-07", name: "Youssef Tarek", branch: SM, shift: EVENING, checkIn: null, checkOut: null, status: "not-checked-in", late: false },
  { id: "st-08", name: "Nour El-Sayed", branch: SM, shift: MORNING, checkIn: "07:56", checkOut: null, status: "checked-in", late: false },

  { id: "st-09", name: "Hassan Gamal", branch: SP, shift: MORNING, checkIn: "07:58", checkOut: "16:01", status: "checked-out", late: false },
  { id: "st-10", name: "Karim Mostafa", branch: SP, shift: EVENING, checkIn: null, checkOut: null, status: "not-checked-in", late: false },
  { id: "st-11", name: "Salma Nabil", branch: SP, shift: MORNING, checkIn: null, checkOut: null, status: "absent", late: false },
  { id: "st-12", name: "Rana Sherif", branch: SP, shift: EVENING, checkIn: null, checkOut: null, status: "day-off", late: false },
];