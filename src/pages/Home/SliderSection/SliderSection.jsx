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
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner5} />
        </div>
        <div>
          <img src={banner6} />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
