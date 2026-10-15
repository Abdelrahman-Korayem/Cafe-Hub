import { ChevronRight, Package, Sparkles, TriangleAlert , CircleCheckBig , ChartNoAxesCombined , Handshake} from "lucide-react";
import Container from "@/app/_components/ui/Container";
import Pill from "@/app/_components/ui/Pill";
import Button from "@/app/_components/ui/Button";
import DynamicProgressBar from "../ui/DynamicProgressBar";

const stock = [
  {
    img: "/images/Oat milk.png",
    name: "Oat milk",
    unit: "Cartons",
    remaining: "6 cartons",
    bar: <DynamicProgressBar progress={70} />,
    pct: 40,
    status: "Near expiry" as const,
  },
  {
    img: "/images/Cheesecake.png",
    name: "Cheesecake",
    unit: "Slices",
    remaining: "4 slices",
    bar: <DynamicProgressBar progress={15} />,
    pct: 30,
    status: "expiry" as const,
  },
  {
    img: "/images/Espresso.png",
    name: "Espresso beans",
    unit: "Kilograms",
    remaining: "18 kg",
    bar: <DynamicProgressBar progress={85} />,
    pct: 85,
    status: "Healthy" as const,
  },
];

export default function Inventory() {
  return (
    <section id="Inventory" className="bg-olive-100 py-16 sm:py-20">
      <Container>
        <div className="mx-auto w-full max-w-[1224px] px-4 sm:px-6 lg:px-8">
          {/* Left: stock table */}
          <div>
            <Pill tone="green" className="bg-green-500/10">
              <Package className="size-3" aria-hidden /> Inventory awareness
            </Pill>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance">
              Catch stock signals <span className="text-green-500">before</span>{" "}
              they become waste.
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink/65">
              Lightweight visibility for received stock, remaining quantity, low
              stock, and expiry. Not warehouse complexity.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-black/5 bg-white">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="text-xs text-ink/50">
                  <tr>
                    <th className="px-5 py-3 font-medium">Item</th>
                    <th className="px-2 py-3 font-medium">Remaining</th>
                    <th className="px-2 py-3 font-medium">Status</th>
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody>
                  {stock.map((row) => (
                    <tr key={row.name} className="border-t border-black/5">
                      <td className="px-5 py-3 inline-flex items-center gap-3">
                        <img
                          src={row.img}
                          alt={row.name}
                          className="size-10 "
                        />
                        <div>
                          <p className="font-semibold">{row.name}</p>
                          <p className="text-xs text-ink/50">{row.unit}</p>
                        </div>
                      </td>
                      <td className="px-2 py-3">
                        <p className="text-xs">{row.remaining}</p>
                        {row.bar}
                        <div className="mt-1.5 h-1 w-24 rounded-full bg-brand-100">
                          <div
                            className="h-full rounded-full bg-brand-600"
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-2 py-3">
                        <Pill
                          tone={
                            row.status === "Healthy"
                              ? "green"
                              : row.status === "Near expiry"
                              ? "amber"
                              : "red"
                          }
                        >
                          {row.status === "Healthy" ? (
                            <CircleCheckBig
                              className="size-3 bg-emerald-50 "
                              aria-hidden
                            />
                          ) : (
                            <TriangleAlert className="size-3 " aria-hidden />
                          )}
                          {row.status}
                        </Pill>
                      </td>
                      <td className="pr-3 text-ink/30">
                        <ChevronRight className="size-4" aria-hidden />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: recommendations */}
          <div>
            <Pill tone="green" className="bg-green-500/10">
              <Sparkles className="size-3" aria-hidden /> Inventory awareness
            </Pill>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance">
              Turn café data{" "}
              <span className="text-green-500">into useful actions.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink/65">
              Signals, context, and a recommended action. The system calculates;
              your team decides.
            </p>

            <div className="mt-6 space-y-4">
              <article className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5">
                <div>
                  <Pill tone="amber">
                    {" "}
                    <ChartNoAxesCombined className="size-4" aria-hidden />{" "}
                    Revenue leakage
                  </Pill>
                  <h3 className="mt-3 text-base font-bold">
                    Review repeated cancellations
                  </h3>
                  <p className="mt-1 text-xs text-ink/55">
                    Several cancelled or rejected orders are contributing to a
                    measurable revenue gap.
                  </p>
                  <Button href="#" arrow={false} className="mt-4">
                    Review orders
                  </Button>
                </div>
                <img
                  src="/images/Illustration2.png"
                  alt=""
                  className="overflow-auto"
                />
              </article>

              <article className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5">
                <div>
                  <Pill tone="green">
                    <Handshake className="size-4" aria-hidden />
                    Business recommendation
                  </Pill>
                  <h3 className="mt-3 text-base font-bold">
                    Match promotion to peak demand
                  </h3>
                  <p className="mt-1 text-xs text-ink/55">
                    Consider featuring high-demand iced drinks during the late
                    afternoon peak.
                  </p>
                  <a
                    href="#"
                    className=" bg-emerald-50 p-2 rounded-xl text-emerald-600 font-bold mt-4 inline-flex rounded-lg bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 hover:bg-brand-100"
                  >
                    See reasoning →
                  </a>
                </div>
                <img
                  src="/images/Illustration.png"
                  alt=""
                  className="overflow-auto"
                />
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
