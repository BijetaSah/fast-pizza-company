import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="items-center justify-between border-b border-stone-200 py-3 last:border-b-0 sm:flex">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-3">
        <p className="text-sm font-bold text-stone-700">
          {formatCurrency(totalPrice)}
        </p>
        <Button type={"small"}>Remove</Button>
      </div>
    </li>
  );
}

export default CartItem;
