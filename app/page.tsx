import Link from "next/link";

const features = [
  {
    title: "Inventory",
    description:
      "Track stock levels, reorder points, and supplier orders in real time across every location.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Sales",
    description:
      "Unified POS, online orders, and payment reconciliation — all in one dashboard.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Employees",
    description:
      "Scheduling, time tracking, and role-based permissions for your entire team.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Customers",
    description:
      "Build loyalty programs, capture purchase history, and personalize every interaction.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Analytics",
    description:
      "Real-time dashboards, custom reports, and actionable insights across your business.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "AI Assistant",
    description:
      "Ask questions, get forecasts, and automate routine tasks with built-in AI.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For single-location shops getting started.",
    features: ["Up to 3 users", "Inventory & sales", "Basic analytics", "Email support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "For growing businesses with multiple locations.",
    features: [
      "Up to 15 users",
      "All modules included",
      "Advanced analytics",
      "AI Assistant",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large retail chains with custom needs.",
    features: [
      "Unlimited users",
      "Custom integrations",
      "Dedicated account manager",
      "SLA & on-prem options",
    ],
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100">
      {/* Gradient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[40%] left-1/2 h-[80%] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/20 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute top-[20%] -right-[20%] h-[50%] w-[50%] rounded-full bg-gradient-to-bl from-blue-500/10 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Sticky navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
              <span className="text-sm font-bold text-white">R</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">RetailOS</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-zinc-400 transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-sm text-zinc-400 transition hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-sm text-zinc-400 transition hover:text-white">
              Docs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden text-sm text-zinc-400 transition hover:text-white sm:block"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center md:pt-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now in public beta
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.1]">
            The Operating System for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Physical Businesses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Run inventory, sales, staff, and customers from one platform. Built for
            retailers who need speed, clarity, and control.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </Link>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Everything you need to run your business
            </h2>
            <p className="mt-4 text-zinc-400">
              Six powerful modules, one unified platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-violet-400 transition group-hover:text-violet-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-zinc-400">
              Start free for 14 days. No credit card required.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-violet-500/50 bg-gradient-to-b from-violet-500/10 to-transparent"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-0.5 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-medium text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-zinc-400">{plan.period}</span>
                  )}
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                      <svg
                        className="h-4 w-4 shrink-0 text-violet-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-medium transition ${
                    plan.highlighted
                      ? "bg-white text-zinc-900 hover:bg-zinc-200"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact sales" : "Start free trial"}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                  <span className="text-sm font-bold text-white">R</span>
                </div>
                <span className="text-lg font-semibold">RetailOS</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                The operating system for physical businesses.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white">Product</h4>
              <ul className="mt-4 space-y-2">
                {["Features", "Pricing", "Integrations", "Changelog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-zinc-500 transition hover:text-zinc-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white">Company</h4>
              <ul className="mt-4 space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-zinc-500 transition hover:text-zinc-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white">Legal</h4>
              <ul className="mt-4 space-y-2">
                {["Privacy", "Terms", "Security"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-zinc-500 transition hover:text-zinc-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} RetailOS. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-zinc-500 transition hover:text-zinc-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}