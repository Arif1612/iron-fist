import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  FaSchool,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaHome,
  FaLayerGroup,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructorDashboard from "../hooks/useInstructorDashboard";

const Dashboard = () => {
  // TODO: NEED TO TAKE FROM USER
  // const isInstructor = true;
  // const isAdmin = false;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorDashboard();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="w-full">
            <Outlet></Outlet>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary my-10 drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-6 w-full mx-3 h-full bg-gray-300  text-base-content">
            {/* Sidebar content here */}

            {/* title */}
            <li>
              <Link
                className="flex justify-center items-center text-2xl font-bold p-3  rounded hover:bg-gray-500 hover:text-white"
                to="/"
              >
                <img
                  className=" rounded-full"
                  width="60px"
                  height="30px"
                  src={logo}
                  alt=""
                />

                <h3 className="ml-1">Iron Fist</h3>
              </Link>
            </li>

            {/* title end */}

            {/* divider */}
            <div className="divider  "></div>

            {/* check instructor or not */}
            {/* Check if the user is an Instructor */}

            {/* check admin or not */}

            {/* check admin or instructor or normal user */}
            {isAdmin ? (
              <>
                <h2 className="text-lg font-bold ml-4 my-2">Admin Dashboard</h2>
                <li>
                  <Link
                    to="/dashboard/manage-classes"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                    <FaBook /> Manage Classes
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/all-users"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                    <FaUsers /> Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <h2 className="text-lg font-bold ml-4 my-2">
                  Instructor Dashboard
                </h2>
                <li>
                  <Link
                    to="/dashboard/add-a-class"
                    className="hover:bg-gray-500 hover:text-white rounded text-base"
                  >
                    <FaBook /> Add a Class
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-classes"
                    className="hover:bg-gray-500 hover:text-white rounded text-base"
                  >
                    <FaUsers /> My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/dashboard/selected-classes"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                    <FaSchool /> Selected Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/enrolled-classes"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                    <FaShoppingCart /> Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/payment"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                    <FaMoneyBillAlt /> Payment History
                  </Link>
                </li>
              </>
            )}

            {/* divider */}
            <div className="divider"></div>

            <li>
              <Link
                to="/"
                className="hover:bg-gray-500 hover:text-white rounded  text-base"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="hover:bg-gray-500 hover:text-white rounded text-base  "
              >
                <FaLayerGroup /> Classes
              </Link>
            </li>
            <li>
              <Link
                to="/instructors"
                className="hover:bg-gray-500 hover:text-white rounded  text-base"
              >
                <FaUsers /> Instructors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
