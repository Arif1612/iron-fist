import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // data taken using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Login Failed:", error);
        const errorMessage = error.message || "An error occurred during login.";
        Swal.fire({
          position: "top",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Captcha Validate Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "Error",
        title: "Oops...",
        text: "Type the Correct Captcha!",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Iron Fist | Login </title>
      </Helmet>

      <div className="hero md:flex min-h-screen my-10 md:justify-center md:items-center bg-base-200 ">
        <div className=" p-0 m-0 bg-base-100  shadow-2xl  ">
          <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="hero-content ">
              <div className="card   ">
                <div className="card-body m-1 p-2">
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
                    <input
                      {...register("password", { required: true })}
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />

                    {/* shown error */}
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </div>
                  {/* captcha */}

                  <div className="form-control my-2 ">
                    <label className="label">
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      onBlur={handleValidateCaptcha}
                      name="captcha"
                      type="password"
                      placeholder="type the captcha above"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <span className="label-text">
                        Checking Captcha click anywhere
                      </span>
                    </label>
                  </div>

                  {/* account? */}
                  <label className="label">
                    <p className="block text-red-700  font-semibold">
                      Do not have an account?
                      <Link to="/signup" className="text-green-700 mb-1">
                        Register
                      </Link>
                    </p>
                  </label>

                  {/* Login*/}
                  <div className="form-control  mb-3">
                    <button
                      type="submit"
                      disabled={disabled}
                      className="btn btn-success"
                    >
                      Login
                    </button>
                  </div>
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

export default Login;
