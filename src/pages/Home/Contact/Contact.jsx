
import React  from 'react';
import  welcome from "../../../assets/image/contact.jpg"



const Contact = () => {
 
  return (
  <div className='grid grid-cols-1 md:grid-cols-2'>
    {/* left */}
    <div className='my-auto'>
        <img className='rounded' src={welcome} alt="" />
    </div>
    {/* right */}
    <div className='my-auto'>
    <div className="card shadow-2xl bg-base-100 ">
            
    
            <div className="card-body">
            <h1 className="text-2xl font-bold text-blue-500 "> Contact Us</h1>
            <form className='w-full my-1' >
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="user_name"
                  className="input input-bordered "
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
    </div>

  </div>
  );
};

export default Contact;
