"use client";

import { Search } from "lucide-react";

import AddProductDialog from "@/components/inventory/AddProductDialog";
import { Input } from "@/components/ui/input";

interface InventoryToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  onAddProduct: (product: {
    id: number;
    sku: string;
    name: string;
    category: string;
    supplier: string;
    costPrice: number;
    sellingPrice: number;
    stock: number;
    minStock: number;
  }) => void;
}

export default function InventoryToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
  onAddProduct,
}: InventoryToolbarProps) {
  return (
    <div className="mt-8 mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-4 md:flex-row">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />

          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="pl-10 bg-zinc-900 border-zinc-800"
          />
        </div>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
        >
          <option>All</option>
          <option>Dairy</option>
          <option>Bakery</option>
        </select>

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
        >
          <option>All</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      <AddProductDialog onAddProduct={onAddProduct} />
    </div>
  );
}