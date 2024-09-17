import React from "react";
import Rewards from "../../../components/data/Homepage/Vidirewards";
import Image from "next/image";

export default function Vidirewards() {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <p className="font-bold text-[48px] mt-16 mb-12 pl-5">
          Know More about VIDI Rewards
        </p>
        <div className=" flex space-x-10 justify-center ">
          {Rewards.map((items, index) => (
            <div
              key={index}
              className="flex flex-col border border-[#AFAFAF] p-4 w-[240px] rounded-xl"
            >
              <Image src={items.Image} alt="Logo" width={40} height={40}   style={{ objectFit: "cover" }} />
              <p className="text-xs font-bold pt-4">{items.Subtitle}</p>
              <p className="pt-4">{items.Title}</p>
              <p className="text-[#737373] text-sm pt-4">{items.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
