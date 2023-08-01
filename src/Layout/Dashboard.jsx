import { Link, Outlet } from "react-router-dom";
import {
  FaSchool,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaHome,
  FaLayerGroup,
  FaMale,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full mx-3 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li>
              <Link to="/dashboard/selected-classes">
                <FaSchool /> Selected Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolled-classes">
                <FaShoppingCart /> Enrolled Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/payment-history">
                <FaMoneyBillAlt /> Payment History
              </Link>
            </li>

            {/* divider */}
            <div className="divider"></div>

            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <FaLayerGroup /> Classes
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <FaMale /> Instructors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
