"use client";
import { createContext, useContext, useState } from "react";
import { Cart, CartContextProviderProps, CartContextType } from "../types/cart";
import { Product } from "../types/product";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext<undefined | CartContextType>(undefined);

function CartProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useLocalStorage<Cart>("cart", { products: [] });

  function addToCart(product: Product) {
    const existing = cart.products.find((p) => p.id === product.id);
    if (!existing)
      setCart({ products: [...cart.products, { ...product, quantity: 1 }] });
    else {
      setCart({
        products: cart.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      });
    }
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { CartProvider, useCart };
