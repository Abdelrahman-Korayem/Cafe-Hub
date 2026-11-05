import Image from "next/image";
import Link from "next/link";
import { Coffee, Radio, Zap } from "lucide-react";

export default function AuthVisual() {
  return (
    <section className="relative hidden overflow-hidden bg-primary lg:block">
      <Image
        src="/auth/register-bg.png"
        alt=""
        fill
        priority
        sizes="50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

      <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
            <span className="grid size-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20 backdrop-blur">
              <Coffee className="size-5" aria-hidden />
            </span>
            CafeHub
          </Link>
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider ring-1 ring-white/20 backdrop-blur">
            <span className="size-1.5 rounded-full bg-secondary" />
            Specialty Roastery OS
          </span>
        </div>

        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Smarter Cafes,
            <br />
            Happier Guests.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
            The comprehensive multi-tenant operations suite crafted for
            specialty roasters, fast-casual bistros, and high-volume espresso
            bars.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur">
              <span className="grid size-9 place-items-center rounded-lg bg-white/10">
                <Radio className="size-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold">Active Roastery Session</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/70">
                  <span className="size-1.5 rounded-full bg-green-400" />
                  Live Hub connected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur">
              <Zap className="size-4 text-secondary" aria-hidden />
              <p className="text-xs font-semibold">Ticket Latency</p>
              <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-semibold">
                &lt; 1.2s avg
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}