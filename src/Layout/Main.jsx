import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";
import { Helmet } from "react-helmet-async";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Iron Fist | Menu </title>
      </Helmet>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
