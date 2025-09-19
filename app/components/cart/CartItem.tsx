import { CartItemType } from "@/app/types/cart";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const totalPrice = item.quantity * item.price;

  return (
    <Card className="sm:flex-row items-center justify-between gap-4 mb-5 p-4 bg-gray-100 rounded-2xl">
      <div className="flex flex-col sm:flex-row flex-1 gap-4 lg:gap-5 items-center">
        <div className="relative w-full h-30 md:h-20  md:w-20 ">
          <Image
            src={item.image}
            className="object-contain"
            alt={item.title}
            fill
          />
        </div>
        <CardTitle>{item.title}</CardTitle>{" "}
      </div>
      <div className="flex-1 flex items-center ">
        <div className="flex items-center flex-1  ">
          <Button size="icon" className="rounded-full">
            <Minus />
          </Button>
          <span className="px-3">{item.quantity}</span>
          <Button size="icon" className="rounded-full">
            <Plus />
          </Button>
        </div>

        <p className="w-20 text-center font-bold text-primary-500">
          ${item.price}
        </p>
        <p className="w-20 text-center font-bold text-primary-500">
          ${totalPrice}
        </p>
      </div>
      <div>
        <Button
          size="icon"
          variant="ghost"
          className="text-red-500 hover:bg-red-100 rounded-full"
        >
          <Trash />
        </Button>
      </div>
    </Card>
  );
}

export default CartItem;
