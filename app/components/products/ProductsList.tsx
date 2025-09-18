import { getProducts } from "@/app/_lib/api";
import ProductCard from "./ProductCard";
import { Product } from "@/app/types/product";

async function ProductsList() {
  const products = await getProducts();

  return (
    <div
      className="px-4 py-6 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-6 md:gap-y-8 lg:gap-y-10 sm:gap-x-5 md:gap-x-8
 "
    >
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
