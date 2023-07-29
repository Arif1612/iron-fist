import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SelectedClasses = ({ classes }) => {
  const {
    price,
    availableSeats,
    courseDuration,
    instructorsName,
    picture,
    subName,
    totalClass,
    totalSeats,
    _id,
  } = classes;
  //   console.log(classes);

  const { user } = useContext(AuthContext);
  //   console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    //    console.log(user);
    if (user && user.email) {
      const SelectedClasses = {
        classId: _id,
        price,
        availableSeats,
        courseDuration,
        instructorsName,
        picture,
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
            console.log("if");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added successfully in the student-carts",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            console.log("else");
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
        });
    }
    //   main if ar else ar por hobe
  };

  return (
    <div>
      <div key={_id} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-center font-bold text-3xl mb-3 ">{subName}</h2>
            <h2 className="text-center text-xl mb-2 ">
              <span className="font-bold "> Instructor: </span>
              <span className="text-normal">{instructorsName}</span>
            </h2>
            <div className="flex">
              <div className="w-1/2 text-lg">
                <p className="mb-2">
                  <span className="font-bold"> Duration:</span>
                  {courseDuration}
                </p>
                <p className="mb-2">
                  <span className="font-bold"> Total Class:</span>
                  {totalClass}
                </p>
                <p>
                  <span className="font-bold"> Price:</span>
                  {price}
                </p>
              </div>
              <div className="text-right text-lg">
                <p className="mb-2">
                  <span className="font-bold"> Total Seats:</span> {totalSeats}
                </p>
                <p>
                  {" "}
                  <span className="font-bold"> Available Seats: </span>{" "}
                  {availableSeats}
                </p>
              </div>
            </div>
          </div>
          <div className="card-actions w-full">
            <button
              onClick={() => handleAddToCart(classes)}
              className="btn btn-primary w-full font-bold"
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
