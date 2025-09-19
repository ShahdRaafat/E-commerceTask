"use client";

import { useCart } from "../_contexts/CartContext";

function Page() {
  const { cart } = useCart();
  console.log(cart);
  return <div>hi</div>;
}

export default Page;
