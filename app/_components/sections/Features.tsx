import {
  CalendarDays,
  Users,
  BookOpen,
  UserRound,
  BarChart3,
  ShoppingBag,
  Settings,
} from "lucide-react";
import Container from "@/app/_components/ui/Container";
import Image from "next/image";

const features = [
  {
    icon: CalendarDays,
    title: "Bookings",
    text: "Manage table reservations and walk-in guests effortlessly.",
  },
  {
    icon: Users,
    title: "Memberships",
    text: "Reward loyal customers and build lasting relationships.",
  },
  {
    icon: BookOpen,
    title: "Menu Management",
    text: "Update your menu, prices, and availability in real time.",
  },
  {
    icon: UserRound,
    title: "Staff Management",
    text: "Organize your team, roles, and daily shifts.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    text: "Track performance and make smarter business decisions.",
  },
  {
    icon: Users,
    title: "Customer Management",
    text: "Understand customer preferences and encourage repeat visits.",
  },
  {
    icon: ShoppingBag,
    title: "Order Management",
    text: "Manage dine-in and takeaway orders from one place.",
  },
  {
    icon: Settings,
    title: "Settings",
    text: "Configure your cafe, preferences, and integrations in one place.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16  mx-auto  relative">
         <div className="absolute right-[0.5%] top-[3%] z-30 w-[15%] hidden lg:block">
                    <Image
                      src="/features/FeaturesMuffin.png"
                      alt=""
                      width={400}
                      height={400}
                      className="h-auto w-full"
                    />
                  </div>
   
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Everything You Need to Run Your Cafe in one Place
          </h2>
          <p className="mt-5 text-base text-ink/80">
            From bookings to staff management, CafeHub brings your daily
            operations together in one simple platform.
          </p>

        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto">
          {features.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-xl border border-sand/60 bg-white p-4 shadow-sm"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f6ebd9] text-secondary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-bold leading-tight text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/70">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      
    </section>
  );
}