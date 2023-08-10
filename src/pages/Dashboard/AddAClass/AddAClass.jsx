import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAClass = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [updateClass, setUpdateClass] = useState(0);

  // console.log(user.photoURL);

  // all this thing taken from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddClass = () => {
    setUpdateClass((prevValue) => prevValue + 1); // Increment updateClass by 1
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(data);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            availableSeats,
            subName,
            email,
            instructorName,
            price,
            courseDuration,
            totalClass,
            status,
          } = data;
          const newClass = {
            availableSeats: parseFloat(availableSeats),
            subName,
            email,
            instructorName,
            courseDuration: parseFloat(courseDuration),
            totalClass: parseFloat(totalClass),
            price: parseFloat(price),
            totalSeats: parseFloat(availableSeats),
            image: imgURL,
            status,
          };
          console.log(newClass);
          console.log("photoUrl", user.photoURL);

          const newInstructor = {
            email,
            name: instructorName,
            image: user.photoURL,
            noOfClass: updateClass + 1,
            subName,
            status,
          };

          // instructors
          axiosSecure.post("/instructors", newInstructor).then((data) => {
            if (data.data.insertedId) {
              reset();
            }
          });
          // axiosSecure.patch("/instructors/:_id",).then((data) => {
          //   if (data.data.insertedId) {
          //     reset();
          //   }
          // });
          axiosSecure.post("/classes", newClass).then((data) => {
            console.log("after posting new classes item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Iron Fist | Add A Class </title>
      </Helmet>

      {/* form related */}
      <div className="hero min-h-screen bg-base-200">
        <div className="w-10/12 ">
          <div className="card m-3  max-w-full shadow-2xl bg-base-100">
            <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                {/* main div  */}
                <div className="flex justify-center items-center  mr-3">
                  {/* left */}
                  <div className="w-1/2 mr-3">
                    {" "}
                    {/*class name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Class Name / Sub Name
                        </span>
                      </label>
                      <input
                        {...register("subName", { required: true })}
                        type="text"
                        placeholder="class name"
                        className="input input-bordered"
                      />
                      {/* error message */}
                      {errors.className && (
                        <span className="text-red-500">
                          Class name is required
                        </span>
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
                    {/* Course Duration */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Course Duration</span>
                      </label>
                      <input
                        {...register("courseDuration", { required: true })}
                        type="text"
                        placeholder="course duration (months in digit)"
                        className="input input-bordered"
                      />
                      {/* error message */}
                      {errors.className && (
                        <span className="text-red-500">
                          course duration value is required
                        </span>
                      )}
                    </div>
                  </div>
                  {/* right */}
                  <div className="w-1/2 ml-3">
                    {/* Total class */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Total Class</span>
                      </label>
                      <input
                        {...register("totalClass", { required: true })}
                        type="text"
                        placeholder="total class"
                        className="input input-bordered"
                      />
                      {/* error message */}
                      {errors.className && (
                        <span className="text-red-500">
                          total class value is required
                        </span>
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
                    {/*status */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Status</span>
                      </label>
                      <input
                        {...register("status", { required: true })}
                        type="text"
                        placeholder="price"
                        className="input input-bordered"
                        value="pending"
                      />
                      {/* error message */}
                      {errors.className && (
                        <span className="text-red-500">Price is required</span>
                      )}
                    </div>
                  </div>
                </div>
                {/* main end */}
                {/* Add Image */}
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">Class Image</span>
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
                  <button className="btn btn-primary">Add A Class</button>
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
