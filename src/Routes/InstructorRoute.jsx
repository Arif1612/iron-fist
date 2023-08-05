import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useInstructorDashboard from "../hooks/useInstructorDashboard";


const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructorDashboard();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 p-10 rounded-lg ">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
