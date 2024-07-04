import { CartWidget } from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dxdrdrdmp/image/upload/v1719537160/logo2_z9fgk1.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <ul className="navbar-list">
        <Link to="/">Todas</Link>
        <Link to="/category/Fibra de Vidrio">Fibra de Vidrio</Link>
        <Link to="/category/Carbono">Carbono</Link>
      </ul>
      <CartWidget />
    </div>
  );
};
