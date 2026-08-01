"use client";

import { Input } from "@/components/ui/input";

interface ProductFormData {
  sku: string;
  name: string;
  category: string;
  supplier: string;
  costPrice: string;
  sellingPrice: string;
  stock: string;
  minStock: string;
}

interface ProductFormProps {
  form: ProductFormData;
  setForm: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

export default function ProductForm({
  form,
  setForm,
}: ProductFormProps) {
  return (
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

        <Input
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
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

        <Input
          value={form.supplier}
          onChange={(e) =>
            setForm({
              ...form,
              supplier: e.target.value,
            })
          }
          placeholder="Fresh Farms"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Cost Price (£)
        </label>

        <Input
          type="number"
          value={form.costPrice}
          onChange={(e) =>
            setForm({
              ...form,
              costPrice: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Selling Price (£)
        </label>

        <Input
          type="number"
          value={form.sellingPrice}
          onChange={(e) =>
            setForm({
              ...form,
              sellingPrice: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Current Stock
        </label>

        <Input
          type="number"
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Minimum Stock
        </label>

        <Input
          type="number"
          value={form.minStock}
          onChange={(e) =>
            setForm({
              ...form,
              minStock: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}