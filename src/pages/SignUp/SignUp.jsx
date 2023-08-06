import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // all this thing taken from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password");

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Update Profile Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        // console.log(error.message);
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <>
      
      <div className="hero md:flex md:justify-center md:items-center my-10   bg-base-200 ">
        <div className="md:w-5/12 w-9/1 shadow-2xl  bg-base-100  ">
          <form className="m-2  p-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="card  w-full  bg-base-100">
              <div className="card-body m-0 p-5">
                {/* main div */}
                <div className="flex flex-col md:flex-row">
                  {/* left */}
                  <div className="mr-5 md:w-1/2">
                    {/* name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        {...register("name", { required: true })}
                        name="name"
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                      />
                      {/* error message */}
                      {errors.name && (
                        <span className="text-red-500">Name is required</span>
                      )}
                    </div>
                    {/* email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", { required: true })}
                        name="email"
                        type="text"
                        placeholder="email"
                        className="input input-bordered"
                      />
                      {/* shown error */}
                      {errors.email && (
                        <span className="text-red-500">Email is required</span>
                      )}
                    </div>
                    {/* password */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <div className="relative">
                        <input
                          {...register("password", {
                            required: true,
                            maxLength: 16,
                            minLength: 8,
                            pattern:
                              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                          })}
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          className="input input-bordered"
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </div>
                      {/* shown error */}
                      {errors.password?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="text-red-500">
                          Maximum Length is 16 characters
                        </p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-500">
                          Minimum Length is 8 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-500">
                          Password must have one Uppercase, one lowercase, one
                          number, one special character, and be at least eight
                          characters long.
                        </p>
                      )}
                    </div>

                    {/*confirm password */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input
                        {...register("confirmPassword", {
                          required: true,
                          validate: (value) => value === password, // Custom validation to check if the value matches the password
                        })}
                        name="confirmPassword"
                        type="password"
                        placeholder="confirm password"
                        className="input input-bordered"
                      />
                      {/* shown error */}
                      {errors.confirmPassword?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                      )}
                      {errors.confirmPassword?.type === "validate" && (
                        <p className="text-red-500">Password does not match</p>
                      )}
                    </div>
                  </div>
                  {/* right */}
                  <div className="md:w-1/2">
                    {/* photo URL */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        {...register("photoUrl", { required: true })}
                        name="photoUrl"
                        type="text"
                        placeholder="photoUrl"
                        className="input input-bordered"
                      />
                      {/* shown error */}
                      {errors.photoUrl && (
                        <span className="text-red-500">
                          Photo URL is required
                        </span>
                      )}
                    </div>
                    {/* gender */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Gender</span>
                      </label>
                      <select
                        className="input input-bordered"
                        {...register("gender")}
                      >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                      </select>
                    </div>
                    {/* email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        {...register("phoneNumber")}
                        name="phoneNumber"
                        type="text"
                        placeholder="phone number"
                        className="input input-bordered"
                      />
                    </div>
                    {/* Address */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input
                        {...register("address")}
                        name="address"
                        type="text"
                        placeholder="address"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                </div>

                {/* eroor message for all the eroor */}
                {errorMessage && (
                  <p className="text-red-700 text-xl font-bold mb-2 mt-3">
                    {errorMessage}
                  </p>
                )}

                {/* account? */}
                <label className="label">
                  <p className="block text-red-700  font-semibold ">
                    Already have an account?
                    <Link to="/login" className="text-green-700 ml-1 ">
                      Login
                    </Link>
                  </p>
                </label>

                {/* SignUp*/}
                <div className="form-control mt-2">
                  <button type="submit" className="btn btn-success">
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default SignUp;
