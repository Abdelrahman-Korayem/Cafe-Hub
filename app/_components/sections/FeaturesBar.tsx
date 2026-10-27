import { Coffee, Users, ShieldCheck, Headset } from "lucide-react";

const items = [
  { icon: Coffee, title: "Easy Setup", text: "Get Started in minutes" },
  { icon: Users, title: "Trusted by 500+", text: "Cafes World Wide" },
  { icon: ShieldCheck, title: "Secure & reliable", text: "Your Data is always Safe" },
  { icon: Headset, title: "24/7 Support", text: "Partner Companies" },
];

export default function FeaturesBar() {
  return (
    <section aria-label="Highlights" className="pb-16  ">
     
        <ul className="grid grid-cols-1 gap-6  bg-[#fbf3e6] px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center gap-4">
              <Icon className="size-9 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="text-lg font-bold leading-tight text-ink">
                  {title}
                </p>
                <p className="mt-1 text-sm text-ink/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
     
    </section>
  );
}