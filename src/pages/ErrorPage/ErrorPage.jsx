import { Link } from "react-router-dom";
import img from "../../assets/404.gif";

export default function ErrorPage() {
  // console.error(error);

  return (
    <div className="relative" id="error-page">
      <div>
        <img src={img} className="w-full max-h-screen" alt="" />
      </div>

      <Link to="/" className="absolute  bottom-5 left-2/3  ">
        <button className=" bg-red-600 m-5 p-5 rounded-xl text-2xl text-white  font-bold">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
