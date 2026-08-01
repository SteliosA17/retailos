"use client";

import { useMemo, useState } from "react";

import { products } from "@/lib/mock-data";

import InventoryStats from "@/components/inventory/InventoryStats";
import InventoryTable from "@/components/inventory/InventoryTable";
import InventoryToolbar from "@/components/inventory/InventoryToolbar";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.sku.toLowerCase().includes(search.toLowerCase());
  
      const matchesCategory =
        category === "All" || product.category === category;
  
      const matchesStatus =
        status === "All" ||
        (status === "In Stock" && product.stock > product.minStock) ||
        (status === "Low Stock" &&
          product.stock > 0 &&
          product.stock <= product.minStock) ||
        (status === "Out of Stock" && product.stock === 0);
  
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);
  
  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Inventory</h1>

        <p className="mt-2 text-zinc-400">
          Manage products, stock levels and suppliers.
        </p>

        <div className="mt-8">
          <InventoryStats products={filteredProducts} />
        </div>

        <InventoryToolbar
  search={search}
  onSearchChange={setSearch}
  category={category}
  onCategoryChange={setCategory}
  status={status}
  onStatusChange={setStatus}
/>

        <InventoryTable products={filteredProducts} />
      </div>
    </main>
  );
}