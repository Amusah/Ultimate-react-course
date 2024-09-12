import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-400 uppercase font-semibold tracking-wide text-stone-800 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "px-4 py-2.5 md:px-6 md:py-3.5 border-2 hover:text-stone-800 hover:bg-stone-300 border-stone-300 uppercase font-semibold tracking-wide text-stone-400 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-300 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
