export type PermissionRow = {
  label: string;
  access: [boolean, boolean, boolean, boolean];
};

export type PermissionGroup = {
  group: string;
  rows: PermissionRow[];
};

const Y = true;
const N = false;

export const permissionGroups: PermissionGroup[] = [
  {
    group: "Orders",
    rows: [
      { label: "View orders", access: [Y, Y, Y, Y] },
      { label: "Accept / reject orders", access: [Y, Y, Y, N] },
      { label: "Mark orders ready & complete", access: [Y, Y, Y, N] },
      { label: "Reject paid orders (with reason)", access: [Y, N, N, N] },
    ],
  },
  {
    group: "Menu",
    rows: [
      { label: "View menu & availability", access: [Y, Y, Y, Y] },
      { label: "Toggle branch product availability", access: [Y, N, N, N] },
    ],
  },
  {
    group: "Inventory",
    rows: [
      { label: "View stock levels", access: [Y, Y, Y, N] },
      { label: "Receive stock & manage batches", access: [Y, N, N, N] },
      { label: "Adjust stock & record waste", access: [Y, N, N, N] },
    ],
  },
  {
    group: "Payments",
    rows: [
      { label: "View payments & bills", access: [Y, N, N, N] },
      { label: "Void / refund payment records", access: [N, N, N, N] },
    ],
  },
  {
    group: "Staff",
    rows: [
      { label: "View staff directory", access: [Y, N, N, N] },
      { label: "Manage staff accounts & permissions", access: [N, N, N, N] },
    ],
  },
  {
    group: "WiFi",
    rows: [{ label: "Manage WiFi policy & packages", access: [N, N, N, N] }],
  },
  {
    group: "Insights",
    rows: [{ label: "View branch analytics", access: [Y, N, N, N] }],
  },
  {
    group: "Settings",
    rows: [{ label: "Change branch / café settings", access: [N, N, N, N] }],
  },
];