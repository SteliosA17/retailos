import { Product } from "@/lib/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Pencil, Trash2 } from "lucide-react";

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

  onEditProduct: (product: Product) => void;

  onDeleteProduct: (product: Product) => void;
}

export default function InventoryTable({
  products,
  onEditProduct,
  onDeleteProduct,
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
            <TableHead className="text-center">
              Actions
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

              <TableCell>{product.category}</TableCell>

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

              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEditProduct(product)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDeleteProduct(product)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}