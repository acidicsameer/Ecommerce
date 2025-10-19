import React from "react";
import CardService from "/src/json/ServiceCards.json";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ServiceCards = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
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
          slidesToShow: 2,
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
    <>
      <h1 className="text-center  text-3xl p-4  text-black "> Our Services </h1>
      <Slider {...settings} className="p-8  text-black  bg-white ">
        {CardService.map((data) => (
          <li
            key={data.id}
            className="h-[280px] text-white  bg-gray-100 rounded-2xl px-6 py-8 shadow-lg hover:shadow-red-500/40 transition duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center shadow-md">
                <img
                  src={data.icon}
                  alt={data.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-black text-center mb-2">
              {data.title}
            </h3>

            <p className="text-sm  text-black  text-center leading-relaxed">
              {data.description}
            </p>
          </li>
        ))}
      </Slider>
    </>
  );
};

export default ServiceCards;
