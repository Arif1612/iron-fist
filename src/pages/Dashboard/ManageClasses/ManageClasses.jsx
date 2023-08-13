import React from "react";
import "../../../hooks/useClass";
import useClass from "../../../hooks/useClass";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const ManageClasses = () => {
  const [classes, refetch] = useClass();
  const [axiosSecure] = useAxiosSecure();
  const [disableButtons, setDisableButtons] = useState(false);

  const handleApproved = (item) => {
    setDisableButtons(true);
    const newStatus = "approved";

    axiosSecure
      .patch(`/classes/${item._id}`, { status: newStatus })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "approved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDenied = (item) => {
    setDisableButtons(true); // Disable buttons after approving
    // Update the status to "approved" here
    const newStatus = "denied"; // Update the status to "denied" for Deny action

    axiosSecure
      .patch(`/classes/${item._id}`, { status: newStatus })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "denied ",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFeedback = (item) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Feedback functionality is not available!",
    });
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.subName}</td>
                <td>{item.instructorName}</td>
                <td>{item.email}</td>
                <td>{item.availableSeats}</td>

                <td className="text-right">${item.price}</td>
                <td className="text-right">{item.status}</td>
                <td>
                  <div className="btn-group btn-group-vertical ">
                    <button
                      onClick={() => handleApproved(item)}
                      className="btn btn-success"
                      disabled={disableButtons} // Disable the button when needed
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenied(item)}
                      className="btn btn-error"
                      disabled={disableButtons} // Disable the button when needed
                    >
                      Deny
                    </button>

                    <button
                      onClick={() => handleFeedback(item)}
                      className="btn btn-warning"
                    >
                      Feedback
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
