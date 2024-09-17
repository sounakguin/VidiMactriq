"use client";
import React from "react";
import Reviews from "../../../components/data/Homepage/Testimonials";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Testimonial() {
  return (
    <div className="w-11/12 mx-auto p-5">
      <p className="font-bold text-[48px] mt-20 mb-16">Testimonials</p>
      <div className="border border-red-400 h-[382px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          arrows={false}
          containerClass="carousel-container"
          itemClass="carousel-item"
          focusOnSelect={true}
        >
          {Reviews.map((items, index) => (
            <div
              key={index}
              className="relative flex flex-col w-[300px] border-2 border-[#60728766] h-[320px] p-4 rounded-2xl mb-4"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              {/* Vector Image Background */}
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-[14px] h-[150px]"
                style={{
                  backgroundImage: "url('/images/Vector10.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  zIndex: 1,
                }}
              ></div>

              {/* Rectangle Image Background Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[20px] rounded-b-[14px]"
                style={{
                  backgroundImage: "url('/images/Rectangle.png')",
                  backgroundSize: "cover", // Cover the bottom area
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  zIndex: 2, // Above the vector background but below content
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col ">
                <Image
                  src={items.Quote}
                  alt="Logo"
                  width={30}
                  height={30}
                  className="text-left"
                  style={{ objectFit: "cover" }} 
                />
                <p className="text-center pt-4 text-[15px] text-[#607287]">
                  {items.Description}
                </p>
                <div className="mx-auto rounded-full h-[100px] w-[100px] bg-white flex items-center justify-center mt-5">
                  <Image
                    src={items.Profile}
                    alt="Logo"
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }} 
                    className="p-1"
                  />
                </div>
                <p className="text-center pt-4">{items.Name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
