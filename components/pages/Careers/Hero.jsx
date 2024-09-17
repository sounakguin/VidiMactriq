import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="w-10/12 mx-auto mt-24">
        <div className="flex space-x-8">
          <div className="flex flex-col text-center h-[200px] w-[500px]">
            <p className="text-[36px]">Teams</p>
            <p className="text-[17px] pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex flex-col h-[500px] w-[360px]  justify-center items-center">
            <Image
              src="/images/Group171.png"
              alt="Logo"
              width={330}
              height={320}
              style={{ objectFit: "cover" }}
              className=""
            />
            <div className="flex flex-col text-center h-[200px] w-[430px] mt-5">
              <p className="text-[36px]">Locations</p>
              <p className="text-[17px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center h-[200px] w-[500px]">
            <p className="text-[36px]">Job Categories</p>
            <p className="text-[17px] pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
