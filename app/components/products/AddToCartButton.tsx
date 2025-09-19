"use client";
import { useCart } from "@/app/_contexts/CartContext";
import { Product } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { toast } from "sonner";

interface AddToCartButtonProps {
  product: Product;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, cart } = useCart();

  function handleClick() {
    addToCart(product);
    toast.success("Item was added successfully to cart");
  }

  return (
    <Button className=" rounded-4xl" size="lg" onClick={handleClick}>
      <ShoppingCartIcon />
    </Button>
  );
}

export default AddToCartButton;
