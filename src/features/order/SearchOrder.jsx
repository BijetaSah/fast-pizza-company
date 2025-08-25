import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search using order Id #1235"
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-yellow-100 px-4 py-1 text-stone-700 transition-all duration-300 placeholder:text-sm placeholder:text-stone-400 focus:w-45 focus:ring focus:ring-yellow-500 focus:ring-offset-3 focus:outline-none sm:w-70 sm:focus:w-80 md:w-90 md:px-4 md:py-2 md:placeholder:text-base md:focus:w-95"
      />
    </form>
  );
}

export default SearchOrder;
