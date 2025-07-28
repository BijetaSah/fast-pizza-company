import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
function Applayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default Applayout;
