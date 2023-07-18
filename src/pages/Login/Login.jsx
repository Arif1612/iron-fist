import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };
  return (
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
                  ref={captchaRef}
                  name="captcha"
                  type="password"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                {/* extra button */}
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-3"
                >
                  Validate
                </button>
              </div>

              {/* account? */}
              <label className="label">
                <p className="block text-red-700  font-semibold">
                  Do not have an account?
                  <Link to="/register" className="text-green-700 ">
                    Register
                  </Link>
                </p>
              </label>

              {/* Login*/}
              <div className="form-control mt-2">
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
  );
};

export default Login;
