export type TableRecord = {
  id: string;
  label: string;
  branch: string;
  zone: string;
  seats: number;
  qrCode: string;
  qrActive: boolean;
  active: boolean;
  orderId: number | null; // open order number if the table is occupied
};