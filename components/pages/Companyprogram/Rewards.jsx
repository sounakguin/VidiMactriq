import React from "react";
import Image from "next/image";

export default function Rewards() {
  return (
    <div>
      <div className="w-11/12 mx-auto flex gap-10 p-4">
        <div className="bg-[#EFF6FF] w-[748px] h-[280px] p-6 mt-48 ">
          <p className="text-[48px] pt-3">VIDI Rewards</p>
          <p className="pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <Image
            src="/images/Frame50.png"
            alt="Logo"
            width={832}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex gap-10 p-4">
        <div>
          <Image
            src="/images/Frame51.png"
            alt="Logo"
            width={832}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-[#EFF6FF] w-[748px] h-[280px] p-6 mt-48 ">
          <p className="text-[48px] pt-3">Event Title</p>
          <p className="pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
