import Heading from "@/app/components/Heading";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

function Page() {
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-5 md:gap-4 lg:gap-6">
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
}

export default Page;
