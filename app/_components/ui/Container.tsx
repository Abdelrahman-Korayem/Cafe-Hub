import { cn } from "@/lib/cn";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-[95%] mx-auto", className)}>
      {children}
    </div>
  );
}