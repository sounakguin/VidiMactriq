"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Custom Previous Arrow Component
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{
        ...style,
        display: "block",
        left: "-30px",
        top: "40%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <Image
        src="/images/Back.png"
        alt="Previous"
        width={30} 
        height={30} 
        style={{ objectFit: "contain" }} 
      />
    </div>
  );
}

// Custom Next Arrow Component
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{
        ...style,
        display: "block",
        right: "-30px",
        top: "40%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <Image
        src="/images/Next.png"
        alt="Previous"
        width={30} // Set the width
        height={30} // Set the height
        style={{ objectFit: "contain" }} 
       
      />
    </div>
  );
}
// Main Slick Slider Component
export default function Slick() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="p-6 w-11/12 mx-auto">
      <p className="text-2xl pl-4 pt-16 pb-8">Our Latest Blogs </p>
      <Slider {...settings}>
        {Blog.map((item, index) => (
          <div key={index} className="flex flex-col p-4">
            <Image
              src={item.Image}
              alt={`Blog Image ${index}`}
              width={292}
              height={260}
              style={{ objectFit: "cover" }} 
              className="mb-4"
            />
            <div className="">
              <p className="text-lg font-semibold text-left">{item.Coin}</p>
              <p className="text-sm text-left mt-2">{item.Description}</p>
            </div>
            <p className="text-xs text-left pt-3 text-gray-500">
              {item.Datedata}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Blog Data
const Blog = [
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
  {
    Image: "/images/cl1.png",
    Coin: "Earn Rewards",
    Description: "Lorem Ipsum has been the industry's standard dummy",
    Datedata: "August 24, 2024",
  },
];
