import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useStudentCart from "../../../hooks/useStudentCart";

const SelectedClasses = ({ classes }) => {
  // console.log(classes);
  const {
    price,
    availableSeats,
    courseDuration,
    instructorName,
    image,
    subName,
    totalClass,
    totalSeats,
    _id,
    noOfStudents,
  } = classes;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useStudentCart();

  const handleAddToCart = (item) => {
    //    console.log(user);
    if (user && user.email) {
      const SelectedClasses = {
        classId: _id,
        price,
        availableSeats,
        courseDuration,
        instructorName,
        image,
        subName,
        totalClass,
        totalSeats,
        email: user.email,
      };
      fetch("http://localhost:5000/student-carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(SelectedClasses),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // we refetch to update the number of items in the cart
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Class added successfully in the student-carts",
              showConfirmButton: false,
              timer: 2000,
            });
            refetch();
          } else {
            Swal.fire({
              icon: "error",
              title: "You already select the class.",
            });
          }
        });
    }
    //   main if ar else ar por hobe
    else {
      // console.log("else");
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div key={_id} className="card w-full bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="images" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-center font-semibold text-3xl mb-3 ">
              {subName}
            </h2>
            <h2 className="text-center text-xl mb-2 ">
              <span className="font-semibold "> Instructor: </span>
              <span className="text-normal">{instructorName}</span>
            </h2>
            <div className="flex">
              {/* left */}
              <div className="w-1/2  text-base ">
                <p className="mb-2">
                  <span className="font-semibold"> Duration:</span>
                  {courseDuration}
                </p>
                <p className="mb-2">
                  <span className="font-semibold"> Total Class:</span>
                  {totalClass}
                </p>
                <p>
                  <span className="font-semibold"> Price:</span>$ {price}
                </p>
              </div>
              {/* right */}
              <div className="text-right text-base">
                <p className="mb-2">
                  <span className="font-semibold"> Total Seats:</span>{" "}
                  {totalSeats}
                </p>
                <p className="mb-2">
                  {" "}
                  <span className="font-semibold"> Available Seats: </span>{" "}
                  {availableSeats}
                </p>
                <p className="mb-2">
                  <span className="font-semibold"> No. Of Students:</span>{" "}
                  {noOfStudents}
                </p>
              </div>
            </div>
          </div>
          <div className="card-actions w-full">
            <button
              onClick={() => handleAddToCart(classes)}
              className="btn btn-primary w-full font-semibold"
            >
              select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedClasses;
