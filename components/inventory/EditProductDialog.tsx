"use client";

import { useEffect, useState } from "react";

import { Product } from "@/lib/types";

import ProductForm from "@/components/inventory/ProductForm";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface EditProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onSave: (product: Product) => void;
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

export default function EditProductDialog({
  open,
  onOpenChange,
  product,
  onSave,
}: EditProductDialogProps) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!product) return;

    setForm({
      sku: product.sku,
      name: product.name,
      category: product.category,
      supplier: product.supplier,
      costPrice: product.costPrice.toString(),
      sellingPrice: product.sellingPrice.toString(),
      stock: product.stock.toString(),
      minStock: product.minStock.toString(),
    });
  }, [product]);

  const handleSave = () => {
    if (!product) return;

    onSave({
      ...product,
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

    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] overflow-y-auto border-zinc-800 bg-zinc-950 text-white">
        <SheetHeader>
          <SheetTitle>Edit Product</SheetTitle>

          <SheetDescription>
            Update the selected product.
          </SheetDescription>
        </SheetHeader>

        <ProductForm
          form={form}
          setForm={setForm}
        />

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}