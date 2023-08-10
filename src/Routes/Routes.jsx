import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";

import Classes from "../pages/Classes/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledCasses/EnrolledClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },

      {
        path: "add-a-class",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
      },
    ],
  },
]);
