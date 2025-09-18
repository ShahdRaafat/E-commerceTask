import { Product } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-primary-100 rounded-2xl transition-transform duration-300 hover:-translate-y-1 ">
      <div className="relative w-full h-50 hover:scale-105 transition-transform duration-300">
        <Image
          src={product.image}
          className="object-contain"
          alt={`${product.title}`}
          fill
        />
      </div>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription className="text-primary-500 font-bold">
          {product.category}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center mt-auto ">
        <p>{product.price}</p>
        <Button className=" rounded-4xl" size="lg">
          <ShoppingCartIcon />
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
