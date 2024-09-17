import React from 'react'
import Image from 'next/image' // Adjust this import based on your actual setup
import Data from "../../../components/data/Awards/Awards"

export default function Awards() {
  return (
   <div className="mt-14 ">
    <div className="w-11/12 mx-auto p-4 mb-20">
    <div className="grid grid-cols-4 gap-10 p-4">
      {Data.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-2 r">
          <Image
            src={item.Image}
            alt={`Recognition ${index}`}
            width={90}
            height={90}
            style={{ objectFit: "cover" }}
            className="mb-2"
          />
          <p className="text-sm">{item.Year}</p>
          <div className="flex items-center justify-center p-4 w-64 bg-[#EFF6FF] mt-5">
            <p className="text-md font-medium text-center">{item.Organization}</p>
          </div>
          <p className="text-sm pt-3">{item.By}</p>
        </div>
      ))}
    </div>
    </div>
   </div>
  )
}
