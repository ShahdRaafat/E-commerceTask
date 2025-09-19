import { Product } from "./product";

export interface CartItemType extends Product {
  quantity: number;
}

export interface Cart {
  products: CartItemType[];
}

export interface CartContextType {
  cart: Cart;
  addToCart: (product: Product) => void;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
