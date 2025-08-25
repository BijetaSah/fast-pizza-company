import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto h-full max-w-3xl px-5 py-5">
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
}

export default Applayout;
