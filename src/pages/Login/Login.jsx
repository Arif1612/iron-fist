import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Validate Successfully",
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

      <div className="hero min-h-screen bg-base-200">
        <form onSubmit={handleLogin}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
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
                </div>

                {/* account? */}
                <label className="label">
                  <p className="block text-red-700  font-semibold">
                    Do not have an account?
                    <Link to="/signup" className="text-green-700 ml-1">
                      Register
                    </Link>
                  </p>
                </label>

                {/* Login*/}
                <div className="form-control mt-2 ml-1">
                  <button
                    type="submit"
                    disabled={disabled}
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </div>

                <p className="text-center">Or</p>

                <div className="form-control mt-2">
                  <button onClick="" className="btn btn-warning">
                    Login With Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
