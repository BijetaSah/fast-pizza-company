import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQunaity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const totalPizzaQuantity = useSelector(getTotalCartQunaity);
  const totalPizzaPrice = useSelector(getTotalCartPrice);

  if (!totalPizzaQuantity || !totalPizzaPrice) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-5 py-3 text-yellow-50 md:px-7 md:py-5">
      <p className="space-x-4 font-semibold">
        <span>{totalPizzaQuantity} pizzas</span>
        <span> {formatCurrency(totalPizzaPrice)}</span>
      </p>
      <Link to="/cart">Go to cart</Link>
    </div>
  );
}

export default CartOverview;
