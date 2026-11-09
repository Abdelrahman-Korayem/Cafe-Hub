import PageHeader from "@/app/_components/dashboard/PageHeader";
import AttendanceView from "@/features/attendance/components/AttendanceView";
import LateArrivalsChip from "@/features/attendance/components/LateArrivalsChip";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Attendance"
        description="Daily check-in board and 7-day attendance history per staff member, per branch."
        chips={<LateArrivalsChip />}
      />
      <AttendanceView />
    </div>
  );
}