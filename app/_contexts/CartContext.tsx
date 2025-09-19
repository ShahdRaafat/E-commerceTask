"use client";
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Cart, CartContextProviderProps, CartContextType } from "../types/cart";
import { Product } from "../types/product";

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

  function deleteFromCart(productId: number) {
    setCart({
      products: cart.products.filter((p) => p.id !== productId),
    });
  }

  function increaseQuantity(productId: number) {
    setCart({
      products: cart.products.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      ),
    });
  }

  function decreaseQuantity(productId: number) {
    setCart({
      products: cart.products
        .map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0),
    });
  }

  function getTotalItems() {
    const totalItems = cart.products.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  }
  function getTotalPrice() {
    const totalPrice = cart.products.reduce(
      (acc, p) => acc + p.quantity * p.price,
      0
    );
    return totalPrice;
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalItems,
        getTotalPrice,
      }}
    >
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
