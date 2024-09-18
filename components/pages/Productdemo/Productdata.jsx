"use client";
import React, { useState } from "react";
import Demodata from "../../data/ProductsDemo/Productsdemodata";
import Image from "next/image";

// Modal Component
function Modal({ show, onClose, videoUrl, title, description }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="relative bg-white p-6 rounded-lg"
        style={{ width: "900px", height: "550px" }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">{title}</p>
          <button
            className="absolute top-6 right-6 text-xl text-gray-500 hover:text-black"
            onClick={onClose}
          >
            <Image
              src="/images/Cancel.png"
              alt="Close"
              width={30}
              height={30}
              style={{ objectFit: "cover" }}
            />
          </button>
        </div>

        <div className="relative w-full h-full flex flex-col justify-center items-center mt-5">
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
          <div className="mt-4 w-[850px] mb-12">
            <p className="text-[18px] ">
              {description.length > 100
                ? description.slice(0, 93) + "..."
                : description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Productdata() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    videoUrl: "",
    title: "",
    description: "",
  });

  const openModal = (item) => {
    setModalContent({
      videoUrl: item.Video, // Assuming you have a Video URL in Demodata
      title: item.Title,
      description: item.Description,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ videoUrl: "", title: "", description: "" });
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center mx-auto space-y-8">
        {Demodata.map((items, index) => (
          <div
            key={index}
            className="w-[1100px] bg-white p-10 rounded-[10px]"
            style={{ boxShadow: "0px 0px 10px 0px #00000040" }}
          >
            <div className="flex space-x-20 ">
              <div className="flex flex-col w-[800px]">
                <div className="ml-4">
                  <p className="text-[35px]">{items.Title}</p>
                </div>

                <div className="ml-4 mt-5">
                  <p className="text-[#585858] text-[18px]">
                    {items.Description}
                  </p>
                </div>
              </div>

              {/* Image container with relative positioning */}
              <div className="relative w-[500px] h-[280px]">
                {/* Main Image */}
                <Image
                  src={items.Image}
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-[10px]"
                />

                {/* Play Icon Image */}
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => openModal(items)} // Open modal with event details
                >
                  <Image
                    src="/images/Group15.png"
                    alt="Play Icon"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <Modal
        show={showModal}
        onClose={closeModal}
        videoUrl={modalContent.videoUrl}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
}
