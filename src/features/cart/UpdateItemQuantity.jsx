import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ totalQuantity, pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="font-semibold">{totalQuantity}</span>
      <Button
        type={"round"}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
