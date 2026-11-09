export type AttendanceStatus =
  | "checked-in"
  | "checked-out"
  | "not-checked-in"
  | "absent"
  | "day-off";

export type StaffAttendance = {
  id: string; // e.g. "st-01"
  name: string;
  branch: string;
  shift: string;
  checkIn: string | null; // "HH:MM"
  checkOut: string | null;
  status: AttendanceStatus;
  late: boolean;
};