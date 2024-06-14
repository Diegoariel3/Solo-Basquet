import { CartWidget } from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <img
        src="https://res.cloudinary.com/dxdrdrdmp/image/upload/v1718156531/logo_g1fio1.png"
        alt="logo"
        className="logo"
      />
      <ul className="navbar-list">
        <li>Camisetas</li>
        <li>Shorts</li>
        <li>Gorras</li>
      </ul>
      <CartWidget />
    </div>
  );
};
