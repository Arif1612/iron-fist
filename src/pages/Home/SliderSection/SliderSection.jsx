import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner5.jpg";
import banner2 from "../../../assets/banner/banner1.jpg";
import banner3 from "../../../assets/banner/banner6.jpg";
import banner4 from "../../../assets/banner/banner7.jpg";
import banner5 from "../../../assets/banner/banner2.jpg";
import banner6 from "../../../assets/banner/banner8.jpg";

const SliderSection = () => {
  return (
    <div>
      <Carousel>
        <div className="relative">
          <img src={banner1} alt="Banner 1" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white ">
            <p className="uppercase text-xl font-bold mb-3 md:text-2xl ">
              Welcome To
            </p>
            <h1 className="uppercase text-4xl font-bold md:text-6xl mb-3">
              Iron Fist Academy
            </h1>
            <p className="text-xl font-bold uppercase md:text-2xl mb-4">
              Train | Belong | Evolve
            </p>
            <button className="btn px-6 py-4 hover:bg-gray-600 hover:text-white font-bold uppercase ">
              Contact us today
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner2} alt="Banner 2" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white ">
            <p className="uppercase text-xl font-bold mb-3 md:text-2xl ">
              Welcome To
            </p>
            <h1 className="uppercase text-4xl font-bold md:text-6xl mb-3">
              Iron Fist Academy
            </h1>
            <p className="text-xl font-bold uppercase md:text-2xl mb-4">
              Train | Belong | Evolve
            </p>
            <button className="btn px-6 py-4 hover:bg-gray-600 hover:text-white font-bold uppercase ">
              Contact us today
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner3} alt="Banner 3" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white ">
            <p className="uppercase text-xl font-bold mb-3 md:text-2xl ">
              Welcome To
            </p>
            <h1 className="uppercase text-4xl font-bold md:text-6xl mb-3">
              Iron Fist Academy
            </h1>
            <p className="text-xl font-bold uppercase md:text-2xl mb-4">
              Train | Belong | Evolve
            </p>
            <button className="btn px-6 py-4 hover:bg-gray-600 hover:text-white font-bold uppercase ">
              Contact us today
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner4} alt="Banner 4" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white ">
            <p className="uppercase text-xl font-bold mb-3 md:text-2xl ">
              Welcome To
            </p>
            <h1 className="uppercase text-4xl font-bold md:text-6xl mb-3">
              Iron Fist Academy
            </h1>
            <p className="text-xl font-bold uppercase md:text-2xl mb-4">
              Train | Belong | Evolve
            </p>
            <button className="btn px-6 py-4 hover:bg-gray-600 hover:text-white font-bold uppercase ">
              Contact us today
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner5} alt="Banner 5" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white ">
            <p className="uppercase text-xl font-bold mb-3 md:text-2xl ">
              Welcome To
            </p>
            <h1 className="uppercase text-4xl font-bold md:text-6xl mb-3">
              Iron Fist Academy
            </h1>
            <p className="text-xl font-bold uppercase md:text-2xl mb-4">
              Train | Belong | Evolve
            </p>
            <button className="btn px-6 py-4 hover:bg-gray-600 hover:text-white font-bold uppercase ">
              Contact us today
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner6} alt="Banner 6" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white ">
            <p className="uppercase text-xl font-bold mb-3 md:text-2xl ">
              Welcome To
            </p>
            <h1 className="uppercase text-4xl font-bold md:text-6xl mb-3">
              Iron Fist Academy
            </h1>
            <p className="text-xl font-bold uppercase md:text-2xl mb-4">
              Train | Belong | Evolve
            </p>
            <button className="btn px-6 py-4 hover:bg-gray-600 hover:text-white font-bold uppercase ">
              Contact us today
            </button>
          </div>
        </div>

       
      </Carousel>
    </div>
  );
};

export default SliderSection;
