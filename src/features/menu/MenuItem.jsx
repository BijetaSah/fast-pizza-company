import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddItemCart() {
    const quantity = 1;
    const newItem = {
      id,
      name,
      unitPrice,
      quantity,
      totalPrice: unitPrice * quantity,
    };
    console.log(newItem);
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 border-b border-stone-200 py-2 last:border-b-0">
      <img
        src={imageUrl}
        alt={name}
        className={`w-24 ${soldOut ? "opacity-[50%] grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col">
        <p className="">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm font-bold">
          {!soldOut ? (
            <p className="text-stone-700">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-500">Sold out</p>
          )}
          {!soldOut && (
            <Button onClick={handleAddItemCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
