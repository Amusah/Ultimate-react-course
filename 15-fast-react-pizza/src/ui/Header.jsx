import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 upper">
      <Link to={"/"} className="tracking-widest">Fast React Pizza Co.</Link>

      <SearchOrder />
      <Username />

      <p>Designed by Nerdy</p>
    </header>
  );
}

export default Header;
