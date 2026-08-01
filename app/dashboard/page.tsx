import StatCard from "@/components/dashboard/StatCard";
import {
  DollarSign,
  ShoppingCart,
  Package,
  TrendingUp,
} from "lucide-react";

const stats = [
    {
      title: "Today's Sales",
      value: "£0.00",
      subtitle: "No sales yet",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "0",
      subtitle: "No orders yet",
      icon: ShoppingCart,
    },
    {
      title: "Low Stock",
      value: "0",
      subtitle: "Everything looks good",
      icon: Package,
    },
    {
      title: "Profit",
      value: "£0.00",
      subtitle: "No data yet",
      icon: TrendingUp,
    },
  ];

export default function DashboardPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">RetailOS Dashboard</h1>
          <p className="mt-2 text-zinc-400">
            Welcome back. Here's an overview of your business.
          </p>
  
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {stats.map((stat) => (
    <StatCard
      key={stat.title}
      title={stat.title}
      value={stat.value}
      subtitle={stat.subtitle}
      icon={<stat.icon className="h-5 w-5" />}
    />
  ))}
</div>

</div>
</main>

);
}



