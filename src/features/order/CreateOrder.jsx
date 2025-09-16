import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const username = useSelector((state) => state.user.userName);
  console.log(username);
  const navigation = useNavigation();
  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <h2 className="mb-6">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row">
          <label className="shrink-0 sm:basis-40">Phone number</label>
          <div className="">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors && (
              <p className="mt-2 rounded-lg bg-red-50 px-2 py-1 text-xs text-red-700">
                {formErrors}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 rounded-sm accent-yellow-400 focus:border-none focus:ring focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order" : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  const error = {};

  if (!isValidPhone(order.phone)) {
    return (error.phone =
      "Please provide a valid phone number, we will require it to connect to you regarding your order");
  }

  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);
  console.log(newOrder);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
