import { Product } from "./product";
export interface Order {
    products: Product[];
    subtotal: number;
    tax: number;
    total: number;
}
