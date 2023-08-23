import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <header className="navbar__container-header">
        <p>Logo</p>
        <nav className="navlinks__container">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
