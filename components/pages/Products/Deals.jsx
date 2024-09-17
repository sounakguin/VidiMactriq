import React from "react";
import Superdeals from "../../../components/data/Productpage/Superdeals";
import Image from "next/image";

export default function Deals() {
  return (
    <div className="mt-36">
      <div>
        <div className="w-11/12 mx-auto">
          <p className="text-2xl pl-8 pb-10">Super Deals</p>
          <div className="flex flex-wrap gap-6 px-8">
            {Superdeals.map((items, index) => (
              <div
                key={index}
                className="flex w-[32%] h-[175px] bg-[#EFF6FF] space-x-5"
              >
                <div>
                  <Image
                    src={items.Image}
                    alt="Logo"
                    width={250}
                    height={159}
                    style={{ objectFit: "cover" }} 
                    className="bg-white m-2"
                  />
                </div>
                <div className="pt-8 pl-1  leading-6">
                  <p className="text-xl">{items.Name}</p>
                  <p className="text-sm font-normal pt-1">
                    Item code: {items.Code}
                  </p>
                  <p className="text-[#737373] pt-1 pr-2 text-xs">
                    {items.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
