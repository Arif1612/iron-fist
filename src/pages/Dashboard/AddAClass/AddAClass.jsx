import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // all this thing taken from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="w-full">
      <Helmet>
        <title>Iron Fist | Add A Class </title>
      </Helmet>

      {/* form related */}
      <div className="hero min-h-screen bg-base-200">
        <div className="w-6/12 ">
          <div className="card  max-w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                {/*class name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Name</span>
                  </label>
                  <input
                    {...register("className", { required: true })}
                    type="text"
                    placeholder="class name"
                    className="input input-bordered"
                  />
                  {/* error message */}
                  {errors.className && (
                    <span className="text-red-500">Class name is required</span>
                  )}
                </div>
                {/*instructor name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Name</span>
                  </label>
                  <input
                    {...register("instructorName", { required: true })}
                    type="text"
                    placeholder="instructor name"
                    className="input input-bordered"
                    value={user.displayName}
                  />
                  {/* error message */}
                  {errors.className && (
                    <span className="text-red-500">
                      Instructor name is required
                    </span>
                  )}
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    value={user.email}
                  />
                  {/* shown error */}
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>

                {/* Available Seats */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Seats</span>
                  </label>
                  <input
                    {...register("availableSeats", { required: true })}
                    type="text"
                    placeholder="availableSeats"
                    className="input input-bordered"
                  />
                  {/* error message */}
                  {errors.className && (
                    <span className="text-red-500">
                      Available seats value is required
                    </span>
                  )}
                </div>

                {/*price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    placeholder="price"
                    className="input input-bordered"
                  />
                  {/* error message */}
                  {errors.className && (
                    <span className="text-red-500">Price is required</span>
                  )}
                </div>

                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Class Image*</span>
                  </label>
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="file-input file-input-bordered w-full "
                  />
                  {/* error message */}
                  {errors.className && (
                    <span className="text-red-500">Image is required</span>
                  )}
                </div>

                {/* login */}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* form releted end */}
    </div>
  );
};

export default AddAClass;
