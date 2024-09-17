"use client";
import React from "react";
import Slider from "react-slick";
import videos from "../../../components/data/Productpage/Video";
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
        left: "-40px",
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
        width={30} // Set the width
        height={30} // Set the height
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

export default function Videoslick() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true, // Enable default arrows
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
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
    <div>
      <div
        className="mt-36"
        style={{
          background:
            "linear-gradient(0deg, rgba(203, 246, 253, 0) 0%, #CBF6FD 15%, #FFFFFF 100%)",
        }}
      >
        <div className="w-11/12 px-7 mx-auto">
          <Slider {...settings}>
            {videos.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <video
                  src={item.Video}
                  className="mb-4 h-[272px] w-[305px] object-cover pr-3 pb-10"
                  autoPlay
                  controls
                  muted
                  loop
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Image
        src="/images/sc1.png"
        alt="Logo"
        width={1920} // Set appropriate width
        height={500} // Set appropriate height
      
        className="relative bottom-9 w-full h-auto"
      />
    </div>
  );
}
