import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Products from "../../../components/data/Homepage/Products";

export default function Latestproducts() {
  return (
    <div>
      <div className="w-11/12 mx-auto p-5 mt-10">
        <p className="text-[48px] font-bold mb-4">Our Latest Products</p>
        <div className="flex gap-6">
          {Products.map((items, index) => (
            <div key={index} className="flex flex-col">
              <Image
                src={items.Image}
                alt="Product Image"
                width={293}
                height={285}
                style={{ objectFit: "cover" }}
              />
              <ul className="list-disc mt-4 ml-10">
                <li className="font-bold ">{items.Name}</li>
                <li className="text-xs pt-3">{items.Description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/Frame37867.png"
        alt="Logo"
        width={1920} // Set appropriate width
        height={470} // Set appropriate height
        style={{ objectFit: "cover" }}
        className="mt-48"
      />
    </div>
  );
}
