import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-8 mb-6">
        Your cart, <span className="font-bold">{userName.toUpperCase()}</span>
      </h2>
      <ul className="mb-8">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type={"secondary"} onClick={handleClearCart}>
          Clear cart{" "}
        </Button>
      </div>
    </div>
  );
}

export default Cart;
