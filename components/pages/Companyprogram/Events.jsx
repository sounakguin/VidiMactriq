"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Events() {
  const [clickedDiv, setClickedDiv] = useState("rigister");

  const messages = {
    rigister:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
    category:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
    friver:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
    jikokok:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
  };

  const handleClick = (text) => {
    setClickedDiv(clickedDiv === text ? null : text);
  };

  return (
    <div className="mt-40">
      <div className="w-11/12 mx-auto p-5">
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-5 ">
            {/* Register Section */}
            <div
              onClick={() => handleClick("rigister")}
              className="w-[750px] pb-4 text-[30px] cursor-pointer border-[#9E9E9E] border-b-[1px]"
            >
              <div className="flex items-center">
                <span className="font-medium">Register</span>
                <Image
                  src={
                    clickedDiv === "rigister"
                      ? "/images/CollapseArrow.png"
                      : "/images/ExpandArrow.png"
                  }
                  alt="Arrow"
                  width={30}
                  height={30}
                  style={{ objectFit: "cover" }}
                  className="ml-10"
                />
              </div>
              {clickedDiv === "rigister" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                </div>
              )}
            </div>

            {/* Choose Category & Complete Payment Section */}
            <div
              onClick={() => handleClick("category")}
              className="w-[750px]  pb-3 text-[30px] font-bold  border-[#9E9E9E] border-b-[1px] cursor-pointer"
            >
              <div className="flex  items-center">
                <span className="font-medium">
                  Choose category & complete payment
                </span>
                <Image
                  src={
                    clickedDiv === "category"
                      ? "/images/CollapseArrow.png"
                      : "/images/ExpandArrow.png"
                  }
                  alt="Arrow"
                  width={30}
                  height={30}
                  style={{ objectFit: "cover" }}
                  className="ml-10"
                />
              </div>
              {clickedDiv === "category" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                </div>
              )}
            </div>

            {/* Doorstep Delivery Section */}
            <div
              onClick={() => handleClick("friver")}
              className="w-[750px] pb-3 text-[30px] font-bold  border-[#9E9E9E] border-b-[1px] cursor-pointer"
            >
              <div className="flex items-center">
                <span className="font-medium">Doorstep Delivery</span>
                <Image
                  src={
                    clickedDiv === "friver"
                      ? "/images/CollapseArrow.png"
                      : "/images/ExpandArrow.png"
                  }
                  alt="Arrow"
                  width={30}
                  height={30}
                  style={{ objectFit: "cover" }}
                  className="ml-10"
                />
              </div>
              {clickedDiv === "friver" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                </div>
              )}
            </div>

            {/* Participate in Customer Loyalty Programme Section */}
            <div
              onClick={() => handleClick("jikokok")}
              className="w-[750px] pb-3 text-[30px] font-bold  border-[#9E9E9E] border-b-[1px] cursor-pointer"
            >
              <div className="flex items-center">
                <span className="font-medium">
                  Participate in Customer Loyalty Programme
                </span>
                <Image
                  src={
                    clickedDiv === "jikokok"
                      ? "/images/CollapseArrow.png"
                      : "/images/ExpandArrow.png"
                  }
                  alt="Arrow"
                  width={30}
                  height={30}
                  style={{ objectFit: "cover" }}
                  className="ml-10"
                />
              </div>
              {clickedDiv === "jikokok" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                </div>
              )}
            </div>

            {/* Participate in Customer Loyalty Programme Section */}
            <div
              onClick={() => handleClick("jikokok")}
              className="w-[750px] pb-3 text-[30px] font-bold  border-[#9E9E9E] border-b-[1px] cursor-pointer"
            >
              <div className="flex items-center">
                <span className="font-medium">
                  Event title
                </span>
                <Image
                  src={
                    clickedDiv === "jikokok"
                      ? "/images/CollapseArrow.png"
                      : "/images/ExpandArrow.png"
                  }
                  alt="Arrow"
                  width={30}
                  height={30}
                  style={{ objectFit: "cover" }}
                  className="ml-10"
                />
              </div>
              {clickedDiv === "jikokok" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[455px] w-[590px] ">
            <Image
              src="/images/water.png"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
