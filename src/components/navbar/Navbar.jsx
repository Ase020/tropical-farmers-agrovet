import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import "./navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div
      className={
        active || pathname !== "/"
          ? "navbar__container active"
          : "navbar__container"
      }
    >
      <header className="navbar__container-header">
        <Link to="/">
          <img src="/tropical-logo.png" alt="logo" className="logo" />
        </Link>
        <nav className="navlinks__container" data-aos="fade-down">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </nav>

        {/* mobile navlink */}
        <MenuOutlinedIcon
          className="mobile_navlink-btn"
          onClick={() => setMobile((prev) => !prev)}
        />

        {mobile && (
          <nav className="navlinks__mobile">
            <Link onClick={() => setMobile(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setMobile(false)} to="/">
              Products
            </Link>
            <Link onClick={() => setMobile(false)} to="/">
              About Us
            </Link>
            <Link onClick={() => setMobile(false)} to="/">
              Contact
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
