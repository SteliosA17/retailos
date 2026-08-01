"use client";

import { useMemo, useState } from "react";

import { Product } from "@/lib/types";
import { products as initialProducts } from "@/lib/mock-data";

import InventoryStats from "@/components/inventory/InventoryStats";
import InventoryTable from "@/components/inventory/InventoryTable";
import InventoryToolbar from "@/components/inventory/InventoryToolbar";
import EditProductDialog from "@/components/inventory/EditProductDialog";
import DeleteProductDialog from "@/components/inventory/DeleteProductDialog";

type SortColumn =
  | "sku"
  | "name"
  | "stock"
  | "sellingPrice";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Sorting
  const [sortBy, setSortBy] =
    useState<SortColumn>("name");

  const [sortDirection, setSortDirection] =
    useState<"asc" | "desc">("asc");

  // Edit
  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);

  // Delete
  const [deletingProduct, setDeletingProduct] =
    useState<Product | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const handleAddProduct = (product: Product) => {
    setProducts((previous) => [...previous, product]);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsEditOpen(true);
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    setProducts((previous) =>
      previous.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setEditingProduct(updatedProduct);
  };

  const handleDeleteProduct = (product: Product) => {
    setDeletingProduct(product);
    setIsDeleteOpen(true);
  };

  const confirmDeleteProduct = (product: Product) => {
    setProducts((previous) =>
      previous.filter((p) => p.id !== product.id)
    );

    setDeletingProduct(null);
    setIsDeleteOpen(false);
  };

  const handleSort = (column: string) => {
    if (column === sortBy) {
      setSortDirection((previous) =>
        previous === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(column as SortColumn);
      setSortDirection("asc");
    }
  };

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.sku
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesStatus =
        status === "All" ||
        (status === "In Stock" &&
          product.stock > product.minStock) ||
        (status === "Low Stock" &&
          product.stock > 0 &&
          product.stock <= product.minStock) ||
        (status === "Out of Stock" &&
          product.stock === 0);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });

    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "sku":
          comparison = a.sku.localeCompare(b.sku);
          break;

        case "name":
          comparison = a.name.localeCompare(b.name);
          break;

        case "stock":
          comparison = a.stock - b.stock;
          break;

        case "sellingPrice":
          comparison =
            a.sellingPrice - b.sellingPrice;
          break;
      }

      return sortDirection === "asc"
        ? comparison
        : -comparison;
    });

    return filtered;
  }, [
    products,
    search,
    category,
    status,
    sortBy,
    sortDirection,
  ]);

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">
          Inventory
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage products, stock levels and suppliers.
        </p>

        <div className="mt-8">
          <InventoryStats
            products={filteredProducts}
          />
        </div>

        <InventoryToolbar
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          status={status}
          onStatusChange={setStatus}
          onAddProduct={handleAddProduct}
        />

        <InventoryTable
          products={filteredProducts}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
          sortBy={sortBy}
          onSort={handleSort}
        />

        <EditProductDialog
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
          product={editingProduct}
          onSave={handleSaveProduct}
        />

        <DeleteProductDialog
          open={isDeleteOpen}
          onOpenChange={setIsDeleteOpen}
          product={deletingProduct}
          onDelete={confirmDeleteProduct}
        />
      </div>
    </main>
  );
}