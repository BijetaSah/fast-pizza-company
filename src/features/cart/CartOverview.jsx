import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-5 py-3 text-yellow-50 md:px-7 md:py-5">
      <p className="space-x-4 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Go to cart</Link>
    </div>
  );
}

export default CartOverview;
