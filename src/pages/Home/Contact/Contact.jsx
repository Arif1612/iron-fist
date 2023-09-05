import Container from "../../Container";
import { Helmet } from "react-helmet-async";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Contact = () => {
//   const { reset } = useForm();
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_1gkggil', 'template_zisegon', form.current, 'uzOkL2BXbgJOBKr4u')
//       .then((result) => {
//           console.log(result.text);
//           Swal.fire({
//             position: 'top',
//             icon: 'success',
//             title: 'mail sent successfully',
//             showConfirmButton: false,
//             timer: 1500
//           })
//           reset();
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
  
  return (
    <div className="mb-10 pt-20 flex justify-center items-center ">


      <Container>
      <Helmet>
          <title>Portfolio | Contact </title>
        </Helmet>
        <h5 className="text-4xl text-center font-bold pt-10 text-blue-500 ">
         Contact Us
          </h5>
        <h5 className=" uppercase  text-2xl text-center font-bold pt-2 pb-10 text-white ">
        Reach Out and Stay in Touch
          </h5>
        <div className="hero">
       
          <div className="hero-content w-full grid md:grid-cols-2 ">
        
        {/* left  div */}
            <div className="text-center hidden md:block   md:text-left items-center text-white">
                   
            </div>

            {/* right div */}
            {/* form */}
            
            <div className="card   shadow-2xl bg-base-100">
            
            
              <div className="card-body">
              <h1 className="text-2xl font-bold text-blue-500 mb-3">Contact Us </h1>

              <form ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="user_name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered" name="user_message" placeholder="your message"></textarea>
                </div>
                <div className="form-control  mt-6">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>

              
              </div>
            </div>
            {/* form */}
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
