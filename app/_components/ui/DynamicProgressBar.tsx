import React from "react";

export default function DynamicProgressBar({ progress }: { progress: number }) {
  // progress هنا رقم من 0 لـ 100

  // دالة لتحديد لون الشريط بناءً على النسبة
  const getProgressBarColor = (value: number) => {
    if (value >= 85) {
      return "bg-emerald-600"; // قبل الأخير / قرب النهاية (أحمر)
    } else if (value >= 50) {
      return "bg-yellow-400"; // لما يوصل النص (أصفر)
    } else {
      return "bg-red-500"; // في البداية (أخضر أو اللون الافتراضي)
    }
  };

  return (
    <div className="w-full bg-pink-100 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ${getProgressBarColor(
          progress
        )}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
