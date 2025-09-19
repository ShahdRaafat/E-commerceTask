"use client";

import { useCart } from "@/app/_contexts/CartContext";
import CartItem from "./CartItem";
import Heading from "../Heading";

function CartList() {
  const { cart } = useCart();
  return (
    <div className=" lg:col-span-4 px-4 py-6 sm:px-6 lg:px-8">
      <div className=" bg-white rounded-2xl ">
        <Heading>Cart Items {`(${cart.products.length})`}</Heading>
        <div className="px-4 py-3">
          {cart.products.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartList;
