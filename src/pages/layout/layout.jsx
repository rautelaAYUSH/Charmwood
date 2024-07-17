import { Outlet } from "react-router-dom";
import "./layout.scss";
import Nav from "../../components/hero/Nav";
import Footer from "../../components/footer";

const Layout = () => {
  return (
    <div className="homeContainer">
      <div className="nav">
        <Nav />
      </div>
      <div className="outletContainer">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
