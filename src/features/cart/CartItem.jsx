import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import DeleteButton from "./DeleteButton";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="items-center justify-between border-b border-stone-200 py-3 last:border-b-0 sm:flex">
      <p>
        <span className="font-bold">{quantity}</span> &times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-3">
        <p className="text-sm font-bold text-stone-700">
          {formatCurrency(totalPrice)}
        </p>
        <DeleteButton pizzaId={id} />
      </div>
    </li>
  );
}

export default CartItem;
