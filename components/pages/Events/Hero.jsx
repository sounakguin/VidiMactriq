import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="relative z-20 bottom-44">
        <div className="container flex justify-center px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* First Event */}
            <div className="text-center">
              <div className="rounded-full  h-[350px] w-[350px] mx-auto mb-6 flex justify-center items-center bg-cover bg-white ">
                <Image
                  src="/images/Screenshot1.png" 
                  alt="Event 1"
                  width={330}
                  height={330}
                  className="object-cover"
                />
              </div>
              <p className="text-[30px] text-center font-semibold ">
                Events & Exhibition
              </p>
              <p className="mt-4 ml-5 text-[18px] w-[350px] text-cente">
                Lorem Ipsum has been the industry standard dummy text ever
                since the 1500s, when an unknown printer took a galley book.
              </p>
            </div>

            {/* Second Event */}
            <div className="text-center">
              <div className="rounded-full h-[350px] w-[350px] mx-auto mb-6 flex justify-center items-center bg-cover bg-white ">
                <Image
                  src="/images/Screenshot2.png"
                  alt="Event 1"
                  width={330}
                  height={330}
                  className="object-cover"
                />
              </div>
              <p className="text-[30px] text-center font-semibold">
                Events & Exhibition
              </p>
              <p className="mt-4 ml-3 text-[18px] w-[350px] text-center">
                Lorem Ipsum has been the industry standard dummy text ever
                since the 1500s, when an unknown printer took a galley book.
              </p>
            </div>

            {/* Third Event */}
            <div className="text-center">
              <div className="rounded-full  h-[350px] w-[350px] mx-auto mb-6 flex justify-center items-center bg-cover bg-white ">
                <Image
                  src="/images/Screenshot3.png" 
                  alt="Event 1"
                  width={330}
                  height={330}
                  className="object-cover"
                />
              </div>
              <p className="text-[30px] text-center font-semibold ">
                Events & Exhibition
              </p>
              <p className="mt-4 ml-2 text-[18px] w-[350px] text-center ">
                Lorem Ipsum has been the industry standard dummy text ever
                since the 1500s, when an unknown printer took a galley book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
