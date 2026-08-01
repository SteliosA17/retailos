"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import ProductForm from "@/components/inventory/ProductForm";

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
    if (
      !form.sku.trim() ||
      !form.name.trim() ||
      !form.supplier.trim()
    ) {
      return;
    }
  
    if (
      Number(form.costPrice) <= 0 ||
      Number(form.sellingPrice) <= 0
    ) {
      return;
    }
  
    if (
      Number(form.stock) < 0 ||
      Number(form.minStock) < 0
    ) {
      return;
    }
  
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

  const isFormValid =
  form.sku.trim() !== "" &&
  form.name.trim() !== "" &&
  form.supplier.trim() !== "" &&
  Number(form.costPrice) > 0 &&
  Number(form.sellingPrice) > 0 &&
  Number(form.stock) >= 0 &&
  Number(form.minStock) >= 0;

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[420px] overflow-y-auto border-zinc-800 bg-zinc-950 text-white">
        <SheetHeader>
          <SheetTitle>
            Add Product
          </SheetTitle>

          <SheetDescription>
            Create a new inventory item.
          </SheetDescription>
        </SheetHeader>

        <ProductForm
          form={form}
          setForm={setForm}
        />

<div className="mt-6 flex justify-end">
  <Button
    onClick={handleCreateProduct}
    disabled={!isFormValid}
  >
    Create Product
  </Button>
</div>
      </SheetContent>
    </Sheet>
  );
}