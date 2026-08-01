import { Package, Wallet, TriangleAlert, CircleX } from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import { Product } from "@/lib/types";

interface InventoryStatsProps {
  products: Product[];
}

export default function InventoryStats({
  products,
}: InventoryStatsProps) {
  const inventoryValue = products.reduce(
    (total, product) => total + product.costPrice * product.stock,
    0
  );

  const lowStock = products.filter(
    (product) => product.stock <= product.minStock && product.stock > 0
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  const stats = [
    {
      title: "Products",
      value: products.length.toString(),
      subtitle: "Active products",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Inventory Value",
      value: `£${inventoryValue.toFixed(2)}`,
      subtitle: "Based on cost price",
      icon: <Wallet className="h-5 w-5" />,
    },
    {
      title: "Low Stock",
      value: lowStock.toString(),
      subtitle: "Need reordering",
      icon: <TriangleAlert className="h-5 w-5" />,
    },
    {
      title: "Out of Stock",
      value: outOfStock.toString(),
      subtitle: "Unavailable",
      icon: <CircleX className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
