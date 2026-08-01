import { Product } from "./types";

export const products: Product[] = [
    {
        id: 1,
        sku: "MILK001",
        name: "Full Cream Milk 2L",
        category: "Dairy",
        supplier: "Fresh Farms",
        costPrice: 1.15,
        sellingPrice: 1.79,
        stock: 42,
        minStock: 10,
        status: "In Stock",
      },
    
      {
        id: 2,
        sku: "BREAD001",
        name: "White Bread",
        category: "Bakery",
        supplier: "Sunrise Bakery",
        costPrice: 0.62,
        sellingPrice: 1.09,
        stock: 8,
        minStock: 15,
        status: "Low Stock",
      },
  ];