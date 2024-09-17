"use client";
import React, { useState } from "react";
import Faqs from "../../../components/data/Faqs/Faqs";
import Image from "next/image";
export default function QandA() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const togglegameLeft = (index) => {
    setOpenLeft(openLeft === index ? null : index);
  };

  const togglegameRight = (index) => {
    setOpenRight(openRight === index ? null : index);
  };

  return (
    <div className="mt-20">
      <div className="w-11/12 mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-28">
          {/* Left Column */}
          <div>
            {Faqs.slice(0, Faqs.length / 2).map((items, index) => (
              <div key={index} className="border-b-2 py-3 w-[600px]">
                <div
                  onClick={() => togglegameLeft(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <p className="font-semibold">{items.question}</p>
                  <div>
                    {openLeft === index ? (
                      <Image
                        src="/images/Collapsearrow2.png"
                        alt="Collapse Icon"
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <Image
                        src="/images/Collapsearrow1.png"
                        alt="Expand Icon"
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
                {openLeft === index && (
                  <div className="mt-2 text-gray-600">
                    <p>{items.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {Faqs.slice(Faqs.length / 2).map((items, index) => (
              <div key={index} className="border-b-2 py-3 w-[600px]">
                <div
                  onClick={() => togglegameRight(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <p className="font-semibold">{items.question}</p>
                  <div>
                    {openRight === index ? (
                      <Image
                        src="/images/Collapsearrow2.png"
                        alt="Collapse Icon"
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <Image
                        src="/images/Collapsearrow1.png"
                        alt="Expand Icon"
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </div>
                {openRight === index && (
                  <div className="mt-2 text-gray-600">
                    <p>{items.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
