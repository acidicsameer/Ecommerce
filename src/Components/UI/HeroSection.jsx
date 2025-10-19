import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import SliderImages from '/src/json/SliderImages.json'
import Slider from "react-slick";
const HeroSection = () => {
  var settings = {
 
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,

    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
  <div className="bg-white h-[90vh] flex flex-wrap items-center ">
      
      <div className="w-full sm:w-2/3 lg:w-2/5 px-6 md:px-10 flex flex-col z-20 space-y-4">
        <span className="w-20 h-1 bg-gray-800 dark:bg-white mb-4"></span>

        <h1 className="font-poppins uppercase text-green-600 text-4xl sm:text-6xl lg:text-7xl font-black leading-tight break-words max-w-full">
          <span className="mr-2">Shop</span>
          <span className="">the</span>
          <br />
          <span className="text-black text-3xl sm:text-5xl">Latest Trends</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 max-w-md">
          Discover handpicked collections of fashion, tech, and lifestyle essentials —  
          all in one place. Style, convenience, and innovation delivered to your door.
        </p>

        {/* Subtext */}
        <p className="text-sm text-green-500">
          Your satisfaction is our top priority.
        </p>

        {/* CTA */}
        <div className="flex mt-4">
          <Link
            to="/products"
            className="uppercase cursor-pointer py-2 px-6 rounded-lg bg-green-700 text-white text-sm sm:text-base font-medium hover:bg-pink-400 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Right Image Slider Section */}
      <div className="hidden sm:flex sm:w-1/2 justify-center items-center p-4">
        <Slider {...settings} className="w-full max-w-[500px]">
          {SliderImages.map((data, index) => (
            <div key={index}>
              <img
                src={data.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] md:h-[500px] object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>

   
  );
};

export default HeroSection;
