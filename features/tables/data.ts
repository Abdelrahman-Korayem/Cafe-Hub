import type { TableRecord } from "./types";

const branchConfigs = [
  { branch: "Downtown Alexandria", code: "DT", prefix: "T", count: 16 },
  { branch: "Smouha", code: "SM", prefix: "S", count: 12 },
  { branch: "Sporting", code: "SP", prefix: "P", count: 10 },
];

const seatsCycle = [4, 4, 2, 4, 6, 2, 4, 4, 2, 6];
const suffixes = [
  "1GW",
  "219",
  "2LM",
  "35Z",
  "3QC",
  "4AP",
  "4V2",
  "5FF",
  "5ZS",
  "6K5",
];

const occupied: Record<string, number> = {
  P2: 1041,
  P5: 1046,
  T3: 1038,
  T7: 1039,
  T9: 1040,
  T12: 1042,
  S2: 1043,
  S5: 1044,
  S8: 1045,
  T1: 1047,
  S9: 1048,
  T11: 1049,
};

const inactive = new Set(["T15", "S11"]);

export const tables: TableRecord[] = branchConfigs.flatMap(
  ({ branch, code, prefix, count }) =>
    Array.from({ length: count }, (_, i) => {
      const n = i + 1;
      const label = `${prefix}${n}`;
      const isActive = !inactive.has(label);

      return {
        id: `${code}-${label}`,
        label,
        branch,
        zone: n >= 10 && code !== "SP" ? "Garden" : "Indoor",
        seats: seatsCycle[i % 10],
        qrCode: `GB-${code}-${prefix}${String(n).padStart(2, "0")}-${suffixes[i % 10]}`,
        qrActive: isActive,
        active: isActive,
        orderId: occupied[label] ?? null,
      };
    }),
);