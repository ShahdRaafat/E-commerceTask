"use client";
import { useCart } from "@/app/_contexts/CartContext";
import { Product } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
}
function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, cart } = useCart();
  return (
    <Button
      className=" rounded-4xl"
      size="lg"
      onClick={() => addToCart(product)}
    >
      <ShoppingCartIcon />
    </Button>
  );
}

export default AddToCartButton;
