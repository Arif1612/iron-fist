import React from "react";
import { Helmet } from "react-helmet-async";
import useStudentCart from "../../../hooks/useStudentCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const [studentCarts, refetch] = useStudentCart();

  // Calculate noOfStudents (totalSeats - availableSeats) for each class
  const classesWithNoOfStudents = studentCarts.map((singleClass) => ({
    ...singleClass,
    noOfStudents: singleClass.totalSeats - singleClass.availableSeats,
  }));

  // Sort the classes array based on noOfStudents in descending order
  const sortedClasses = [...classesWithNoOfStudents].sort(
    (a, b) => b.noOfStudents - a.noOfStudents
  );

  const totalPrice = studentCarts.reduce(
    (acc, singleClass) => acc + singleClass.price,
    0
  );

  const handleDelete = (singleClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/student-carts/${singleClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Iron Fist | Selected Class </title>
      </Helmet>
      <div>
        {/* alada */}
        <div>
          <div className="flex w-10/12 text-2xl font-bold mb-4 justify-center items-center">
            <h1 className="ml-5">Subject Taken: {studentCarts.length}</h1>
            <h1 className="ml-5"> Total Price: $ {totalPrice}</h1>
            {/* pay button */}
            <div className="ml-5">
              <Link to="/dashboard/payment">
                <button className="btn btn-active btn-primary w-full">
                  Payment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 sm:w-11/12 lg:w-9/12 mx-auto  grid-cols-1 gap-8">
            {sortedClasses.map((singleClass) => (
              <div key={singleClass._id} className="card bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={singleClass.image}
                    alt="class image"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body">
                  <div>
                    <h2 className="text-center font-semibold text-3xl mb-3 ">
                      {singleClass.subName}
                    </h2>
                    <h2 className="text-center text-xl mb-2 ">
                      <span className="font-semibold "> Instructor: </span>
                      <span className="text-normal">
                        {singleClass.instructorsName}
                      </span>
                    </h2>
                    <div className="flex">
                      <div className="w-1/2 text-lg">
                        <p className="mb-2">
                          <span className="font-semibold"> Duration:</span>
                          {singleClass.courseDuration}
                        </p>
                        <p className="mb-2">
                          <span className="font-semibold"> Total Class:</span>
                          {singleClass.totalClass}
                        </p>
                        <p>
                          <span className="font-semibold"> Price:</span>
                          {singleClass.price}
                        </p>
                      </div>
                      <div className="text-right text-lg">
                        <p className="mb-2">
                          <span className="font-semibold"> Total Seats:</span>{" "}
                          {singleClass.totalSeats}
                        </p>
                        <p className="mb-2">
                          {" "}
                          <span className="font-semibold">
                            {" "}
                            Available Seats:{" "}
                          </span>{" "}
                          {singleClass.availableSeats}
                        </p>
                        <p>
                          {" "}
                          <span className="font-semibold">
                            {" "}
                            No. Of Students:{" "}
                          </span>{" "}
                          {singleClass.noOfStudents}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* button container */}
                  <div className="card-actions  mt-3 absolute top-0 right-0">
                    <button
                      onClick={() => handleDelete(singleClass)}
                      className="btn btn-square btn-neutral"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedClasses;
