import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const baseStyle =
    "rounded-full bg-yellow-400 tracking-wide text-stone-800 uppercase transition-colors duration-300 font-bold hover:bg-yellow-300 hover:cursor-pointer focus:bg-yellow-300 focus:ring focus:ring-yellow-600 focus:ring-offset-2 focus:outline-none  disabled:cursor-not-allowed ";
  const buttonType = {
    primary: `${baseStyle} px-4 py-2 sm:px-6 sm:py-4 text-sm`,
    secondary: `text-sm font-bold border-2 border-stone-300 py-2 px-4 rounded-full sm:px-6 sm:py-4 text-stone-600 hover:bg-stone-200 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-400 focus:bg-stone-200 hover:cursor-pointer`,
    round: `${baseStyle} px-4 py-2 rounded-full`,
    small: `${baseStyle} text-xs px-2 py-1 sm: px-4 py-2`,
  };
  if (to)
    return (
      <Link className={`${buttonType[type]}`} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        disabled={disabled}
        className={`${buttonType[type]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={`${buttonType[type]}`}>
      {children}
    </button>
  );
}

export default Button;
