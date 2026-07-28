export default function DashboardPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">RetailOS Dashboard</h1>
          <p className="mt-2 text-zinc-400">
            Welcome back. Here's an overview of your business.
          </p>
  
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Revenue</p>
              <h2 className="mt-2 text-3xl font-bold">£24,580</h2>
            </div>
  
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Orders</p>
              <h2 className="mt-2 text-3xl font-bold">142</h2>
            </div>
  
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Customers</p>
              <h2 className="mt-2 text-3xl font-bold">1,284</h2>
            </div>
  
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Low Stock</p>
              <h2 className="mt-2 text-3xl font-bold">7</h2>
            </div>
          </div>
        </div>
      </main>
    );
  }