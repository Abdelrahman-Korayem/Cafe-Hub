import { Star } from "lucide-react";
import Container from "@/app/_components/ui/Container";

const testimonials = [
  {
    name: "Lina S.",
    role: "Cafe Owner",
    quote:
      "CafeHub took our bookings and daily operations from scattered notes to one clear dashboard. We save hours every week.",
  },
  {
    name: "Jason M.",
    role: "Cafe Manager",
    quote:
      "The analytics showed me exactly which hours and menu items drive our revenue, and the setup took minutes.",
  },
  {
    name: "Priya K.",
    role: "Cafe Owner",
    quote:
      "Our customers love ordering with a scan, and my team finally has one place for orders, staff shifts and memberships.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            What cafe Owners Say
          </h2>
          <p className="mt-5 text-base text-ink/80">
            CafeHub helps you spend less time managing operations and more time
            creating memorable customer experiences.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, role, quote }) => (
            <li
              key={name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5"
            >
              <div className="flex gap-1 text-secondary" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/85">
                “{quote}”
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-sand text-sm font-bold text-primary"
                >
                  {name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight text-ink">{name}</p>
                  <p className="text-xs text-ink/70">{role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}