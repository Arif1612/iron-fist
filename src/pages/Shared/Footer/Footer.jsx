import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer mt-10  flex justify-center items-center bg-gray-300 p-10 ">
      <div>
        <div className="mx-auto">
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
   
     
    
    </footer>
  );
};

export default Footer;
