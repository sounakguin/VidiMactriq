import React from "react";
import Image from 'next/image';


export default function Awards() {
  return (
    <div className="mt-10 mx-auto w-11/12 pl-9 pr-6">
      <div className="">
        <p className="pl-1 text-2xl">Awards & Recognitions</p>
        <p className="pl-1 mt-8 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex justify-between mt-5">
          {Recognitions.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <Image
                src={item.Image}
                alt={`Recognition ${index}`}
                width={90} height={90} 
                style={{ objectFit: "cover" }} 
                className="mb-2"
              />
              <p className="text-sm">{item.Year}</p>
              <div className="flex items-center justify-center p-4 w-64 bg-[#EFF6FF] mt-5">
                <p className="text-md font-medium w-[297px] text-center">{item.Organization}</p>
              </div>
              <p className="text-sm pt-3">{item.By}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Recognitions = [
  {
    Image: "/images/Trophy.png",
    Year: "2024",
    Organization: "Organization Of The Year",
    By: "By: Water Digest World Water Awards",
  },
  {
    Image: "/images/Trophy.png",
    Year: "2024",
    Organization: "Organization Of The Year",
    By: "By: Water Digest World Water Awards",
  },
  {
    Image: "/images/Trophy.png",
    Year: "2024",
    Organization: "Organization Of The Year",
    By: "By: Water Digest World Water Awards",
  },
  {
    Image: "/images/Trophy.png",
    Year: "2024",
    Organization: "Organization Of The Year",
    By: "By: Water Digest World Water Awards",
  },
];
