import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer p-20 bg-gray-200 text-black mt-10  ">
      <div>
        <div className="flex justify-center items-center gap-3">
          <div>
            <img
              className="rounded-full"
              width="100"
              height="40"
              src={logo}
              alt=""
            />
          </div>
          <div>
            <span className="text-2xl font-bold"> Iron Fist</span>
          </div>
        </div>
        <p className="text-xl">
          <span>&copy; </span> Md. Arif Ul Islam 2023
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
