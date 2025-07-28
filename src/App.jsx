import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Applayout from "./ui/Applayout";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
