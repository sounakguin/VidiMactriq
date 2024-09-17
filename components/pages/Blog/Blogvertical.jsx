import React from "react";
import Image from "next/image";
import Blogdata from "../../../components/data/Blog/Blogdata";

export default function Blogvertical() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center mx-auto space-y-8">
        {Blogdata.map((items, index) => (
          <div
            key={index}
            className="w-[1100px] bg-white p-6 rounded-[10px]"
            style={{ boxShadow: "0px 0px 10px 0px #00000040" }}
          >
            <div className="flex space-x-4">
              <Image
                src={items.Image}
                alt="Logo"
                width={290}
                height={260}
                style={{ objectFit: "cover" }}
              />

              <div className="flex flex-col">
                <div className="ml-4">
                  <p className="text-[35px]">{items.Title}</p>
                </div>

                <div className="ml-4 mt-9">
                  <p className="text-[#494949] text-[18px]">
                    {items.Description}
                  </p>
                </div>
                <div className="ml-4 mt-10 flex justify-between">
                  <div>
                    
                    <p className="text-[#7B7B7B] text-[14px] pt-1">{items.Date}</p>
                  </div>
                  <div className="text-[#7B7B7B] text-[14px] flex">
                    <p className="pr-3 pt-1">Read More</p>

                    <div>
                      <Image
                        src="/images/Rightarrow.png"
                        alt="Logo"
                        width={30}
                        height={24}
                        style={{ objectFit: "contain" }}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
