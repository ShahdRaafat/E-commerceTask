import ProductsList from "./components/products/ProductsList";
export default function Home() {
  return (
    <>
      <h2 className=" text-primary-500  py-4 text-xl md:text-2xl font-semibold text-center">
        Products
      </h2>
      <ProductsList />
    </>
  );
}
