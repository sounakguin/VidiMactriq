import React from "react";
import Image from "next/image";

export default function BecamePartner() {
  return (
    <div>
      <div className="mt-28">
        <div className="flex w-11/12 mx-auto space-x-28">
          <div
            className="flex flex-col p-10 h-[350px]"
            style={{
              background: "linear-gradient(360deg, #EFF6FF 0%, #FFFFFF 100%)",
            }}
          >
            <Image src="/images/Group3.png" alt="Logo" width={30} height={30}   style={{ objectFit: "cover" }} />
            <p className="pt-5 text-lg">Become a partner</p>
            <p className="w-[610px] pt-10 text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <Image
              src="/images/Partner.png"
              alt="Logo"
              width={601}
              height={350}
              style={{ objectFit: "cover" }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
