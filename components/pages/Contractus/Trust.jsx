import React from "react";
import Image from "next/image";


export default function Trust() {
  return (
    <div className="mt-20">
      <div className="bg-[#F8F8F8] border border-[#BFBFBF] pt-12 pb-12">
        <div className="flex w-4/6 mx-auto">
          <div className="flex flex-col  border-r-2 border-gray-300 w-[340px] text-center justify-center items-center">
            <Image
              src="/images/Like.png"
              alt="Logo"
              width={60}
              height={60}
              style={{ objectFit: "cover" }} 
            />
            <p className="font-normal text-base">VIDI Advantage</p>
            <p className="text-sm pt-3 pr-6 pl-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-col  border-r-2 border-gray-300 w-[340px] text-center justify-center items-center">
            <Image
              src="/images/Trust.png"
              alt="Logo"
              width={60}
              height={60}
              style={{ objectFit: "cover" }} 
            />
            <p className="font-normal text-base">Most Trusted & Preferred</p>
            <p className="text-sm pt-3 pr-6 pl-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-col  w-[340px] text-center justify-center items-center">
            <Image
              src="/images/People.png"
              alt="Logo"
              width={60}
              height={60}
              style={{ objectFit: "cover" }} 
            />
            <p className="font-normal text-base">Trusted by Millions</p>
            <p className="text-sm pt-3 pr-6 pl-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
