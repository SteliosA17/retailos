import { Product } from "@/lib/types";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InventoryTableProps {
  products: Product[];
}

export default function InventoryTable({
  products,
}: InventoryTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SKU</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              Selling Price
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-mono">
                {product.sku}
              </TableCell>

              <TableCell className="font-medium">
                {product.name}
              </TableCell>

              <TableCell>
                {product.category}
              </TableCell>

              <TableCell className="font-semibold">
                {product.stock}
              </TableCell>

              <TableCell>
                {product.stock === 0 ? (
                  <Badge variant="destructive">
                    Out of Stock
                  </Badge>
                ) : product.stock <= product.minStock ? (
                  <Badge className="bg-yellow-600 hover:bg-yellow-600">
                    Low Stock
                  </Badge>
                ) : (
                  <Badge className="bg-green-600 hover:bg-green-600">
                    In Stock
                  </Badge>
                )}
              </TableCell>

              <TableCell className="text-right font-medium">
                £{product.sellingPrice.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}