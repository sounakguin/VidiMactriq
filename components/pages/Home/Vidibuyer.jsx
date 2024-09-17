"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Vidibuyer() {
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
    <div>
      <div className="w-11/12 mx-auto p-5">
        <p className="font-bold text-[48px] mt-20 mb-16 pl-1">
          Become a Vidi buyer
        </p>
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-5 ">
            {/* Register Section */}
            <div
              onClick={() => handleClick("rigister")}
              className="w-[750px] bg-[#EFF6FF] p-6 pb-4 text-[30px] rounded-xl cursor-pointer"
            >
              <div className="flex justify-between items-center">
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
                />
              </div>
              {clickedDiv === "rigister" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                  <div className="flex ">
                    <p className="text-[15px] text-[#717171] pt-3">
                      Get started
                    </p>
                    <Image
                      src="/images/Rightarrow.png"
                      alt="Logo"
                      width={30}
                      height={30}
                      style={{ objectFit: "cover" }}
                      className="mt-2 ml-3"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Choose Category & Complete Payment Section */}
            <div
              onClick={() => handleClick("category")}
              className="w-[750px] bg-[#EFF6FF] p-6 pb-3 text-[30px] font-bold rounded-xl cursor-pointer"
            >
              <div className="flex justify-between items-center">
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
                />
              </div>
              {clickedDiv === "category" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                  <div className="flex ">
                    <p className="text-[15px] text-[#717171] pt-3">
                      Get started
                    </p>
                    <Image
                      src="/images/Rightarrow.png"
                      alt="Logo"
                      width={30}
                      height={30}
                      style={{ objectFit: "cover" }}
                      className="mt-2 ml-3"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Doorstep Delivery Section */}
            <div
              onClick={() => handleClick("friver")}
              className="w-[750px] bg-[#EFF6FF] p-6 pb-3 text-[30px] font-bold rounded-xl cursor-pointer"
            >
              <div className="flex justify-between items-center">
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
                />
              </div>
              {clickedDiv === "friver" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                  <div className="flex ">
                    <p className="text-[15px] text-[#717171] pt-3">
                      Get started
                    </p>
                    <Image
                      src="/images/Rightarrow.png"
                      alt="Logo"
                      width={30}
                      height={30}
                      style={{ objectFit: "cover" }}
                      className="mt-2 ml-3"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Participate in Customer Loyalty Programme Section */}
            <div
              onClick={() => handleClick("jikokok")}
              className="w-[750px] bg-[#EFF6FF] p-6 pb-3 text-[30px] font-bold rounded-xl cursor-pointer"
            >
              <div className="flex justify-between items-center">
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
                />
              </div>
              {clickedDiv === "jikokok" && (
                <div>
                  <p className="mt-3 text-[17px] font-normal">
                    {messages["rigister"]}
                  </p>
                  <div className="flex ">
                    <p className="text-[15px] text-[#717171] pt-3">
                      Get started
                    </p>
                    <Image
                      src="/images/Rightarrow.png"
                      alt="Logo"
                      width={30}
                      height={30}
                      style={{ objectFit: "cover" }}
                      className="mt-2 ml-3"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[487px] w-[590px] ">
            <Image
              src="/images/image.png"
              alt="Logo"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
