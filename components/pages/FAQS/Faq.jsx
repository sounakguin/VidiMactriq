import React from "react";
import Image from "next/image";

export default function Faq() {
  return (
    <div className="mt-20">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-[48px]">Do you have Questions?</p>
          <p className="text-[20px] font-bold">
            We have answers (well, most of the times!)
          </p>
          <p className="pt-6 w-[700px]">
            Below, you will find answers to the most common questions about
            water purification. If you still can not find the answer you are
            looking for, feel free to <span className="text-[#009FFF]">contact us.</span>
          </p>
         <div className="mt-8">
         <Image
            src="/images/FAQ.png"
            alt="Logo"
            width={700}
            height={360}
            style={{ objectFit: "cover" }}
          />
         </div>
        </div>
      </div>
    </div>
  );
}
