import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-5 py-3 tracking-wider md:px-7 md:py-5">
      <Link to="/" className="text-xl text-stone-700 uppercase">
        Fast Pizza co.
      </Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
