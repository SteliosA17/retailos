export interface Product {
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
  }