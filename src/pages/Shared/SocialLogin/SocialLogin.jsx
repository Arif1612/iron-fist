import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className=" border-2 mx-10 my-2 border-gray-500 "></div>

      <div className="w-full text-center  ">
        <button onClick={handleGoogleSignIn}>
          <FaGoogle className=" text-5xl my-3 hover:bg-gray-700 hover:text-white p-2 rounded-xl "></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;