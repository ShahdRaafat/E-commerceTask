import { Product } from "./product";

interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  products: CartItem[];
}

export interface CartContextType {
  cart: Cart;
  addToCart: (product: Product) => void;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
