import Image from "next/image";
import Container from "@/app/_components/ui/Container";
import { cn } from "@/lib/cn";

const items = [
  {
    icon: "/icons/bar/easy-setup.svg",
    title: "Easy Setup",
    text: "Get Started in minutes",
    order: "order-1 lg:order-1",
  },
  {
    icon: "/icons/bar/trusted.svg",
    title: "Trusted by 500+",
    text: "Cafes World Wide",
    order: "order-3 lg:order-2",
  },
  {
    icon: "/icons/bar/secure.svg",
    title: "Secure & reliable",
    text: "Your Data is always Safe",
    order: "order-2 lg:order-3",
  },
  {
    icon: "/icons/bar/support.svg",
    title: "24/7 Support",
    text: "Partner Companies",
    order: "order-4 lg:order-4",
  },
];

export default function FeaturesBar() {
  return (
    <section
      aria-label="Highlights"
      className="border-y border-black/10 bg-white py-8 lg:border-y-0 lg:bg-gradient-to-b lg:from-[#fdf6ea] lg:to-[#f8ebd8] lg:py-7"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {items.map(({ icon, title, text, order }) => (
            <li key={title} className={cn("flex items-center gap-3 lg:gap-4", order)}>
              <Image
                src={icon}
                alt=""
                width={40}
                height={40}
                className="h-9 w-auto shrink-0 lg:h-10"
              />
              <div>
                <p className="text-base font-bold leading-tight text-ink lg:text-xl">
                  {title}
                </p>
                <p className="mt-1 text-xs text-ink/80 lg:text-sm">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}