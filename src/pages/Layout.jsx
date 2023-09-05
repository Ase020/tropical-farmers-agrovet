import { Outlet } from "react-router-dom";
import { Footer, Navbar, Products } from "../components";

const Layout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Layout;
