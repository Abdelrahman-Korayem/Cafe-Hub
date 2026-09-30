import Link from "next/link";
import {
  Rocket,
  Play,
  ShieldAlert,
  WifiOff,
  Percent,
  Layers,
  WifiHigh,
  ScrollText,
  Hotel,
  CreditCard,
  Monitor,
  Smartphone,
  Banknote,
  TrendingUp,
  Headphones,
  Coffee
} from "lucide-react";

export default function Home() {
  const faqItems = [
    {
      question: "How does the integrated WiFi billing module work?",
      answer:
        "Cafés can define custom WiFi packages with different durations and rates. When a guest adds a WiFi package to their table order, the system creates a unique access code and merges it into the same bill for a single reconciled receipt.",
    },
    {
      question: "What fulfillment types are supported in the first version?",
      answer:
        "The platform supports dine-in table ordering, cashier confirmation for cash payments, and instant online card payment for guests who prefer digital checkout.",
    },
    {
      question: "Are there any per-order transaction commissions?",
      answer:
        "No. Nuvo is designed to eliminate commission-heavy third-party ordering fees, helping café owners protect margins while keeping direct guest relationships.",
    },
    {
      question: "What are the branch and table limits included in standard packages?",
      answer:
        "Standard packages support up to 3 branches and up to 15 tables per location, with easy branch-level management and table QR reprints.",
    },
    {
      question: "How does payment work for guests who prefer to pay cash?",
      answer:
        "Guests can choose cash at counter, and the cashier confirms the order from the admin panel before fulfillment. This keeps the checkout flow flexible for local café operations.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#FDFBF7] text-neutral-800 font-sans selection:bg-emerald-500 selection:text-white">
        <main>
          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20"
            aria-labelledby="hero-heading"
          >
            <div className="inline-flex items-center gap-2 bg-[#F5EFE6] border border-[#EBE3D5] px-3 py-1.5 rounded-full text-xs font-medium text-amber-900 mb-6 shadow-sm bg-amber-400">
              <Rocket
                className="w-3.5 h-3.5 text-amber-800"
                aria-hidden="true"
              />
              <span>48-Hour Rapid Onboarding • Multi-Branch Café Platform</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]"
                >
                  Smart café POS and QR ordering built for faster service in{" "}
                  <span className="text-amber-700 underline decoration-amber-300 decoration-wavy underline-offset-8">
                    48 hours
                  </span>
                </h1>

                <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
                  Help guests order from their table, pay digitally, and buy
                  WiFi access through one streamlined café system—without
                  third-party fees or manual billing chaos.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="Subscription"
                    className="inline-flex items-center justify-center bg-[#0F291E] hover:bg-[#183d2d] text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    Start now
                  </Link>

                  <Link
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 font-medium px-6 py-3.5 rounded-xl transition-all shadow-sm"
                  >
                    <Play
                      className="w-4 h-4 fill-neutral-800"
                      aria-hidden="true"
                    />
                    Watch demo
                  </Link>
                </div>

                <div
                  className="grid grid-cols-3 gap-6 pt-10 border-t border-neutral-200/60 mt-8"
                  aria-label="Business highlights"
                >
                  <div>
                    <p className="text-3xl font-bold text-neutral-900">0%</p>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">
                      Per-order commission
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-neutral-900">100%</p>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">
                      Reconciled WiFi revenue
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-neutral-900">48h</p>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">
                      Standard launch time
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="lg:col-span-5 relative"
                aria-label="Product overview image"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative h-[420px] overflow-hidden rounded-3xl border-4 border-white bg-neutral-100 shadow-2xl">
    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-neutral-300 font-medium text-neutral-500">
      <img
        src="/logo/4da414ac0fa4b53dcc16b7184afbf8a01383e24b.jpg"
        alt="Logo"
        className="h-full w-full object-cover"
      />
    </div>
                  </div>

                  <div className="  absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
                    <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600 font-bold">
                      QR
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900">
                        Table QR ordering
                      </p>
                      <p className="text-[10px] text-neutral-500">
                        Zero waiter bottleneck
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
                    <div className="bg-amber-50 p-2 rounded-xl text-amber-600 font-bold">
                      WiFi
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900">
                        Integrated WiFi billing
                      </p>
                      <p className="text-[10px] text-neutral-500">
                        Single reconciled bill
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-neutral-200/60 text-center bg-[#F5EFE6]/30 p-5 ">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-8">
                Trusted by specialty roasters and coffee shops across Cairo and
                Alexandria
              </p>
              <div
                className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all"
                aria-label="Brand partners"
              >
                <span className="font-semibold text-sm tracking-tight text-neutral-600">
                  <Coffee /> Riverside Roasters
                </span>
                <span className="font-semibold text-sm tracking-tight text-neutral-600">
                  <Coffee /> Artisan Brew Co.
                </span>
                <span className="font-semibold text-sm tracking-tight text-neutral-600">
                  <Coffee /> The Daily Grind
                </span>
                <span className="font-semibold text-sm tracking-tight text-neutral-600">
                  <Coffee /> Velvet Bean
                </span>
                <span className="font-semibold text-sm tracking-tight text-neutral-600">
                  <Coffee /> Amber & Roast
                </span>
                <span className="font-semibold text-sm tracking-tight text-neutral-600">
                  <Coffee /> Heritage Espresso
                </span>
              </div>
            </div>
          </section>

          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            aria-labelledby="pain-points-heading"
          >
            <div className="max-w-2xl mb-16">
              <h2
                id="pain-points-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight"
              >
                Built to reduce café bottlenecks and protect profit margins
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/80 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldAlert className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Peak-hour ordering bottlenecks
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Manual order taking leads to missed modifications, long
                    queues, and frustrated guests during busy coffee rushes.
                  </p>
                </div>
              </article>

              <article className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/80 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <WifiOff className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Untracked WiFi voucher sales
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Paper vouchers create cash gaps, delayed reconciliation, and
                    wasted staff time at the counter.
                  </p>
                </div>
              </article>

              <article className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/80 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Percent className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    High commission fees from aggregators
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Third-party platforms take a sizeable cut from guest orders
                    even when customers are already seated in your café.
                  </p>
                </div>
              </article>

              <article className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/80 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Multi-branch operations at scale
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Manage several locations, table availability, and QR codes
                    from one unified café dashboard.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section
            id="how-it-works"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5EFE6]/40 rounded-3xl my-12 border border-[#EBE3D5]"
            aria-labelledby="how-it-works-heading"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <h2
                  id="how-it-works-heading"
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight"
                >
                  How Nuvo streamlines your café floor in 3 steps
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Launch online table ordering, WiFi monetization, and real-time
                  operations in a single setup designed for modern coffee
                  businesses.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200/70 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0F291E] text-white rounded-xl font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">
                      Configure your branches and tables
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Set up your coffee menu, table layout, and branch details
                      in minutes to prepare for live ordering.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200/70 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0F291E] text-white rounded-xl font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">
                      Add your branding and WiFi tiers
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Customize your café identity, pricing, and internet
                      packages so guests can order and purchase access from one
                      flow.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200/70 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0F291E] text-white rounded-xl font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">
                      Deploy QR stands and monitor orders
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Guests scan a table code, place orders instantly, and
                      cashiers keep full visibility over each table and payment
                      state.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            aria-labelledby="features-heading"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
              <div className="lg:col-span-5 bg-[#0F291E] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between h-[420px]">
                <div>
                  <span className="text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full font-semibold">
                    Features
                  </span>
                  <h2
                    id="features-heading"
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-6 leading-tight"
                  >
                    Everything your café needs in one platform
                  </h2>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed border-t border-white/10 pt-6">
                  A single ordering and operations system built to reduce
                  friction, improve guest satisfaction, and protect your café
                  margins.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
                  <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-4">
                    <Coffee />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    Dine-in QR ordering
                  </h3>
                  <p className="text-xs text-neutral-600 mb-3">
                    Send orders directly to the barista or kitchen with no extra
                    app download needed.
                  </p>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    Direct kitchen sync →
                  </span>
                </article>

                <article className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
                  <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    Live sales reports
                  </h3>
                  <p className="text-xs text-neutral-600 mb-3">
                    Track order trends, WiFi revenue, and busiest hours with
                    real-time reporting tools.
                  </p>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    Real-time insights →
                  </span>
                </article>

                <article className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                    <Headphones />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    Dedicated support
                  </h3>
                  <p className="text-xs text-neutral-600 mb-3">
                    Get quick technical help when your team needs assistance
                    during service rushes.
                  </p>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    Fast response →
                  </span>
                </article>

                <article className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <WifiHigh />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    WiFi and loyalty offers
                  </h3>
                  <p className="text-xs text-neutral-600 mb-3">
                    Bundle access plans and discounts with digital orders to
                    grow guest engagement.
                  </p>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    Smart packages →
                  </span>
                </article>
              </div>
            </div>

            <div className="mb-12">
              <span className="text-[10px] font-bold tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md uppercase">
                Core capabilities • BRD v1 scope
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-3">
                High-volume café operations without the overhead
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Engineered for coffee shops, roasteries, and multi-location
                hospitality operators that need better table control and WiFi
                revenue visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-4">
                    <Smartphone />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-2">
                    Table-level QR self-ordering
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    Every table gets a dedicated QR code tied to its branch and
                    table number, allowing guests to browse the menu and order
                    without waiting for staff.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                  <div className="bg-white p-3 rounded-xl shadow-xs border border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 block">
                      TABLE 02
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 block mt-1">
                      2× Cortado + almond milk
                    </span>
                    <span className="text-[9px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full inline-block mt-2">
                      Pending barista
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-xs border border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 block">
                      TABLE 05
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 block mt-1">
                      1× Chemex + 2-hour WiFi
                    </span>
                    <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full inline-block mt-2">
                      Preparing
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-xs border border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 block">
                      TABLE 11
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 block mt-1">
                      1× Flat white, 1× croissant
                    </span>
                    <span className="text-[9px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full inline-block mt-2">
                      Cash at till due
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0F291E] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    <WifiHigh />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">
                    Integrated WiFi card billing
                  </h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed mb-6">
                    Offer time-based internet packages and attach them to the
                    customer receipt for a single, auditable checkout flow.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-emerald-200">
                      Auto-generated voucher
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      35 EGP
                    </span>
                  </div>
                  <div className="bg-black/30 p-2.5 rounded-xl text-center font-mono text-xs tracking-wider text-amber-300 font-bold border border-white/5">
                    ROAST-8832-ACCESS
                  </div>
                  <p className="text-[9px] text-emerald-200/60 mt-2 text-center">
                    Zero separate slips and full daily revenue visibility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            aria-labelledby="operations-heading"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <article className="lg:col-span-4 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-4">
                    <Hotel />
                  </div>
                  <h3
                    id="operations-heading"
                    className="font-bold text-lg text-neutral-900 mb-2"
                  >
                    Multi-branch table control
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    Manage up to three branches and fifteen tables per location,
                    monitor occupancy, and reprint QR codes with minimal effort.
                  </p>
                </div>
                <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-neutral-800">
                    Branch 01 • Zamalek
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold">
                    Live
                  </span>
                </div>
              </article>

              <article className="lg:col-span-8 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center">
                      <CreditCard />
                    </div>
                    <span className="text-[10px] bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-medium">
                      Segregated order and payment states
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-2">
                    Dual settlement: cash at counter or online
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    Guests can pay in cash after cashier confirmation or
                    complete online card checkout directly from the table flow.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-center inline-flex flex-col items-center justify-center">
                    <span className="text-sm block mb-1">
                      <Banknote />
                    </span>
                    <span className="text-[10px] font-bold text-neutral-800 block">
                      Cashier till confirmation
                    </span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-center inline-flex flex-col items-center justify-center">
                    <span className="text-sm block mb-1 ">
                      <CreditCard />
                    </span>
                    <span className="text-[10px] font-bold text-neutral-800 block">
                      Card checkout
                    </span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-center inline-flex flex-col items-center justify-center">
                    <span className="text-sm block mb-1">
                      <Percent />
                    </span>
                    <span className="text-[10px] font-bold text-neutral-800 block">
                      0% per-order fee
                    </span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 inline-flex flex-col items-center justify-center text-center">
                    <span className="text-sm block mb-1">
                      <ScrollText />
                    </span>
                    <span className="text-[10px] font-bold text-neutral-800 block">
                      Single audited receipt
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5EFE6]/50 rounded-3xl my-8 border border-[#EBE3D5]"
            aria-labelledby="experience-heading"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold tracking-wider text-amber-900 bg-white px-3 py-1 rounded-full uppercase border border-amber-200">
                Live experience • zero friction
              </span>
              <h2
                id="experience-heading"
                className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-4"
              >
                See how Nuvo powers the daily café floor
              </h2>
              <p className="text-xs text-neutral-600 mt-2">
                Built for high-volume coffee shops and specialty cafés that need
                a cleaner, faster guest experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#0F291E] text-white rounded-xl flex items-center justify-center mb-4">
                    <Smartphone />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    At-the-table QR ordering
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Guests scan a code, browse a full menu, and place their
                    order without installing an app or waiting for a server.
                  </p>
                </div>
                <div className="bg-amber-50/70 text-amber-900 p-2.5 rounded-xl text-[10px] font-medium">
                  Instant orders with zero app install needed
                </div>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-4">
                    <WifiHigh />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Instant reconciled WiFi cards
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Generate guest internet credentials directly from the order
                    flow and reconcile them to one payment receipt.
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-xl text-[10px] font-medium">
                  Fully reconciled on the central till register
                </div>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#0F291E] text-white rounded-xl flex items-center justify-center mb-4">
                    <Monitor />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Unified barista and cashier hub
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    View kitchen updates, cash payment statuses, and table
                    progress from a single operational dashboard.
                  </p>
                </div>
                <div className="bg-neutral-100 text-neutral-800 p-2.5 rounded-xl text-[10px] font-medium">
                  Real-time kitchen and counter status sync
                </div>
              </article>
            </div>
          </section>

          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12"
            aria-labelledby="testimonials-heading"
          >
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[10px] font-bold tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase">
                Success stories
              </span>
              <h2
                id="testimonials-heading"
                className="text-3xl font-extrabold text-neutral-900 mt-3"
              >
                What café owners say about working with Nuvo
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Real stories from operators focused on service speed and margin
                growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 text-xs mb-4">★★★★★</div>
                  <p className="text-xs text-neutral-700 leading-relaxed italic mb-6">
                    “Combining our table ordering and WiFi voucher workflow was
                    a major upgrade. We recovered unrecorded revenue in the
                    first month and doubled our table turn speed.”
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-9 h-9 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    SM
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      Sara Mohamed
                    </p>
                    <p className="text-[10px] text-neutral-500">Founder</p>
                  </div>
                </div>
              </article>

              <article className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 text-xs mb-4">★★★★★</div>
                  <p className="text-xs text-neutral-700 leading-relaxed italic mb-6">
                    “Setup took 48 hours. Our QR stands were ready to display,
                    staff learned the counter flow in minutes, and we pay zero
                    commission on orders.”
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-9 h-9 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    MA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      Mohamed Ali
                    </p>
                    <p className="text-[10px] text-neutral-500">Team leader</p>
                  </div>
                </div>
              </article>

              <article className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 text-xs mb-4">★★★★★</div>
                  <p className="text-xs text-neutral-700 leading-relaxed italic mb-6">
                    “Our branded ordering flow gave the café more authority.
                    Guests enjoy table tabs and a simpler payment experience,
                    whether cash or card.”
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-9 h-9 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    AA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      Abdelrahman Ahmed
                    </p>
                    <p className="text-[10px] text-neutral-500">Owner</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section
            id="faq"
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20"
            aria-labelledby="faq-heading"
          >
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-wider text-neutral-600 bg-white px-3 py-1 rounded-full uppercase border border-neutral-200">
                FAQ • architecture
              </span>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-4"
              >
                Frequently asked questions
              </h2>
              <p className="text-xs text-neutral-600 mt-2">
                Learn how Nuvo handles table ordering, WiFi billing, and café
                operations in one streamlined platform.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm transition-all hover:border-neutral-300"
                >
                  <summary className="flex justify-between items-center gap-4 cursor-pointer">
                    <h3 className="font-bold text-sm text-neutral-900">
                      {index + 1}. {item.question}
                    </h3>
                    <span className="text-neutral-500 font-bold text-sm">
                      ▼
                    </span>
                  </summary>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-3 pt-3 border-t border-neutral-100">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
