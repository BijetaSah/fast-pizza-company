import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = fakeCart;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-8 mb-6">
        Your cart, <span className="font-bold">{userName.toUpperCase()}</span>
      </h2>
      <ul className="mb-8">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type={"secondary"}>Clear cart </Button>
      </div>
    </div>
  );
}

export default Cart;
