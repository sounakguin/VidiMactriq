"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Events from "../../../components/data/Events/Ourevents";

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
        top: "50%",
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
        right: "-40px",
        top: "50%",
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
        alt="Next"
        width={30}
        height={30}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
function Modal({ show, onClose, videoUrl, title, description }) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="relative bg-white p-6 rounded-lg"
        style={{ width: "900px", height: "550px" }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">{title}</p>
          <button
            className="absolute top-6 right-6 text-xl text-gray-500 hover:text-black"
            onClick={onClose}
          >
            <Image
              src="/images/Cancel.png"
              alt="Logo"
              width={30}
              height={30}
              style={{ objectFit: "cover" }}
            />
          </button>
        </div>

        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <video
            style={{ maxWidth: "100%", maxHeight: "80%" }}
            controls
            autoPlay
            src={videoUrl}
            title="Video"
            className="object-contain rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
          <div className="mt-4 w-[850px]">
            <p className="text-[18px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Ourevents() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    videoUrl: "",
    title: "",
    description: "",
  });

  const openModal = (event) => {
    setModalContent({
      videoUrl: event.Video,
      title: event.Title,
      description: event.Description,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ videoUrl: "", title: "", description: "" });
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="p-2 w-11/12 mx-auto mb-20 ">
      <p className="text-[40px] pl-2 pt-16 pb-8">Our Latest Blogs</p>
      <div>
        <Slider {...settings}>
          {Events.map((item, index) => (
            <div key={index} className="px-2 py-2">
              <div
                className="flex flex-col bg-[#FFFFFF] rounded-[10px] border-[#A7A7A7] border-[1px] p-4"
                style={{
                  height: "100%",
                  width: "100%",
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => openModal(item)} // Open modal with event details
                >
                  <Image
                    src={item.Image}
                    alt={`Blog Image ${index}`}
                    width={292}
                    height={260}
                    style={{ objectFit: "cover" }}
                    className="mb-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/Group15.png"
                      alt="Play Icon"
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.Title}</p>
                  <p className="text-sm mt-2">{item.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Modal
          show={showModal}
          onClose={closeModal}
          videoUrl={modalContent.videoUrl}
          title={modalContent.title}
          description={modalContent.description}
        />
      </div>
    </div>
  );
}
