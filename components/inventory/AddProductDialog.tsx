"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface AddProductDialogProps {
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
    status: string;
  }) => void;
}

const initialForm = {
  sku: "",
  name: "",
  category: "Dairy",
  supplier: "",
  costPrice: "",
  sellingPrice: "",
  stock: "",
  minStock: "",
};

export default function AddProductDialog({
  onAddProduct,
}: AddProductDialogProps) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState(initialForm);

  const handleCreateProduct = () => {
    console.log(form);
    onAddProduct({
      id: Date.now(),
      sku: form.sku,
      name: form.name,
      category: form.category,
      supplier: form.supplier,
      costPrice: Number(form.costPrice),
      sellingPrice: Number(form.sellingPrice),
      stock: Number(form.stock),
      minStock: Number(form.minStock),
      status:
        Number(form.stock) === 0
          ? "Out of Stock"
          : Number(form.stock) <= Number(form.minStock)
          ? "Low Stock"
          : "In Stock",
    });

    setForm(initialForm);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <Plus size={18} />
          Add Product
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[420px] border-zinc-800 bg-zinc-950 text-white overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl text-white">
            Add Product
          </SheetTitle>

          <SheetDescription>
            Create a new inventory item.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              SKU
            </label>

            <Input
  value={form.sku}
  onChange={(e) =>
    setForm({ ...form, sku: e.target.value })
  }
  placeholder="MILK003"
/>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Product Name
            </label>

            <input
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
              placeholder="Full Cream Milk 500ml"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Category
            </label>

            <select
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
            >
              <option>Dairy</option>
              <option>Bakery</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Supplier
            </label>

            <input
              value={form.supplier}
              onChange={(e) =>
                setForm({
                  ...form,
                  supplier: e.target.value,
                })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
              placeholder="Fresh Farms"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Cost Price (£)
            </label>

            <input
              type="number"
              step="0.01"
              value={form.costPrice}
              onChange={(e) =>
                setForm({
                  ...form,
                  costPrice: e.target.value,
                })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
              placeholder="1.25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Selling Price (£)
            </label>

            <input
              type="number"
              step="0.01"
              value={form.sellingPrice}
              onChange={(e) =>
                setForm({
                  ...form,
                  sellingPrice: e.target.value,
                })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
              placeholder="1.99"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Current Stock
            </label>

            <input
              type="number"
              value={form.stock}
              onChange={(e) =>
                setForm({
                  ...form,
                  stock: e.target.value,
                })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
              placeholder="50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Minimum Stock
            </label>

            <input
              type="number"
              value={form.minStock}
              onChange={(e) =>
                setForm({
                  ...form,
                  minStock: e.target.value,
                })
              }
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2"
              placeholder="10"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleCreateProduct}>
              Create Product
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}