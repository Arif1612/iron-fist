import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);

  const handleInstructor = (user) => {
    const newRole = "instructor";

    axiosSecure
      .patch(`/users/${user._id}`, { role: newRole })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleAdmin = (user) => {
    const newRole = "admin";

    axiosSecure
      .patch(`/users/${user._id}`, { role: newRole })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
        <title>Iron Fist | All Users </title>
      </Helmet>
      <div className="overflow-x-auto my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <div className="btn-group btn-group-vertical ">
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-success"
                      >
                        Make Instructor
                      </button>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-warning"
                      >
                        Make Admin
                      </button>
                    </div>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-400 hover:bg-red-600  hover:text-white text-xl "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
