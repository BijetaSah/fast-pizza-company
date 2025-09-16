// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import OrderItem from "./OrderItem";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const data = useLoaderData();
  console.log(data);
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = data;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-between gap-3">
        <h2 className="text-xl font-bold text-stone-800">
          {" "}
          Order #{id} status
        </h2>

        <div className="space-x-3">
          {priority && (
            <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-bold tracking-wider text-red-50 uppercase">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-2 py-1 text-xs font-bold tracking-wider text-green-50 uppercase">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3 rounded-lg bg-stone-200 px-6 py-5">
        <p className="text-base font-bold text-stone-800">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-700">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="mt-10 mb-15 space-y-2 border-t-2 border-stone-200">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-y-3 rounded-lg bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-800">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-800">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-base font-bold text-stone-800">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
