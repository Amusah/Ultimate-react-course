import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.li} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.li} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.li} to="/product">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
