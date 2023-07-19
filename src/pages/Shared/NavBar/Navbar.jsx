import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { FaBeer } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error);
  };
  return (
    <div className="navbar  bg-gray-200 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden bg-neutral text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm flex flex-col dropdown-content  p-2 shadow bg-base-300 rounded-box w-60 text-center text-black absolute top-0"
          >
            <FaBeer />
            <Link className=" mr-5 " to="/">
              Home
            </Link>
            <Link className=" mr-5 " to="/instruction">
              Instructors
            </Link>
            <Link className=" mr-5 " to="/classes">
              Classes
            </Link>
            <Link className=" mr-5 " to="/dashboard">
              Dashboard
            </Link>
          </ul>
        </div>
        <div>
          <Link
            className="flex justify-center items-center text-2xl font-bold ms-3 me-3 p-3 rounded hover:bg-gray-500 hover:text-white"
            to="/"
          >
            <img
              className=" ms-3 rounded-full"
              width="70px"
              height="34px"
              src={logo}
              alt=""
            />

            <h3 className="ml-3">Iron Fist</h3>
          </Link>
        </div>
      </div>

      {/* start end  */}

      {/* nav lg screen  (middle part) */}
      <div className="navbar-center hidden lg:flex">
        <Link
          className=" mr-5  hover:bg-gray-500 px-3 py-2 rounded hover:text-lg  hover:text-white"
          to="/"
        >
          Home
        </Link>

        <Link
          className=" mr-5  hover:bg-gray-500 px-3 py-2 rounded hover:text-lg hover:text-white "
          to="/instructors"
        >
          Instructors
        </Link>
        <Link
          className=" mr-5  hover:bg-gray-500 px-3 py-2 rounded hover:text-lg hover:text-white  "
          to="/classes"
        >
          Classes
        </Link>
        <Link
          className=" mr-5  hover:bg-gray-500 px-3 py-2 rounded hover:text-lg hover:text-white "
          to="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      {/* end */}

      <div className="navbar-end">
        {user && (
          <>
            <span className="mr-4 ">
              <img
                style={{ height: 54 }}
                className="rounded-full "
                src={user.photoURL}
                alt=""
              />
            </span>
            <span className="mr-5">{user.displayName}</span>
          </>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn hover:bg-gray-500 px-5 py-2  rounded-lg hover:font-bold  hover:text-xl hover:text-white text-xl"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn hover:bg-gray-500 px-5 py-2  rounded-lg hover:font-bold  hover:text-xl hover:text-white text-xl">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
