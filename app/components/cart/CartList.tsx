"use client";

import { useCart } from "@/app/_contexts/CartContext";
import CartItem from "./CartItem";
import Heading from "../Heading";

function CartList() {
  const { cart, getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <div className=" lg:col-span-4 ">
      <div className=" bg-white rounded-2xl ">
        <Heading>Cart Items {`(${totalItems})`}</Heading>
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
