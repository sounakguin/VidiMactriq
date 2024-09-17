import React from "react";
import Image from "next/image";

export default function Imageshow() {
  return (
    <div className="mt-0 pt-0">
      <div className="w-11/12 mx-auto pl-4 pr-4 pb-4">
        <div className="flex space-x-10 ">
          <div className="flex flex-col space-y-10 ">
            <div className="relative">
              <Image
                src="/images/Screenshot4.png"
                alt="Vector Curve"
                width={270}
                height={210}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
                <p className="text-[18px] font-normal p-5 text-center">
                Lorem Ipsum has been the industry standard dummy text printer took a galley of typebook.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Screenshot5.png"
                alt="Vector Curve"
                width={270}
                height={210}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
                <p className="text-[18px] font-normal p-5 text-center">
                Lorem Ipsum has been the industry standard dummy text printer took a galley of typebook.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/Screenshot9.png"
              alt="Vector Curve"
              width={643}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
              <p className="text-[18px] font-normal p-12 text-center">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-10">
          <div className="relative">
              <Image
                src="/images/Screenshot10.png"
                alt="Vector Curve"
                width={270}
                height={210}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
                <p className="text-[18px] font-normal p-5 text-center">
                Lorem Ipsum has been the industry standard dummy text printer took a galley of typebook.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Screenshot6.png"
                alt="Vector Curve"
                width={270}
                height={210}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
                <p className="text-[18px] font-normal p-5 text-center">
                Lorem Ipsum has been the industry standard dummy text printer took a galley of typebook.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10">
          <div className="relative">
              <Image
                src="/images/Screenshot8.png"
                alt="Vector Curve"
                width={270}
                height={210}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
                <p className="text-[18px] font-normal p-5 text-center">
                Lorem Ipsum has been the industry standard dummy text printer took a galley of typebook.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Screenshot7.png"
                alt="Vector Curve"
                width={270}
                height={210}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFFB2] bg-opacity-70 text-black opacity-0 hover:opacity-100 z-10 transition-opacity rounded-[10px]">
                <p className="text-[18px] font-normal p-5 text-center">
                Lorem Ipsum has been the industry standard dummy text printer took a galley of typebook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
