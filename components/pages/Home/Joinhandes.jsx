"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Joinhandes() {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      id: 1,
      title: "App Link",
      content: (
        <div className="flex space-x-20 mt-10">
          <div
            className="mt-4 w-[750px] h-[320px] p-10"
            style={{
              background: "linear-gradient(360deg, #EFF6FF 0%, #FFFFFF 100%)",
            }}
          >
            <p className="font-bold text-2xl">App link</p>
            <p className="pt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <Image
              src="/images/Applink.png"
              alt="Logo"
              width={550}
              height={350}
              style={{ objectFit: "cover" }} 
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Become Vidi Partner",
      content: (
        <div className="flex space-x-20 mt-10">
          <div
            className="mt-4 w-[750px] h-[320px] p-10"
            style={{
              background: "linear-gradient(360deg, #EFF6FF 0%, #FFFFFF 100%)",
            }}
          >
            <p className="font-bold text-2xl">Became a Vidi Partner</p>
            <p className="pt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <Image
              src="/images/Partner.png"
              alt="Logo"
              width={550}
              height={350}
              style={{ objectFit: "cover" }} 
            />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Step 3",
      content: (
        <div className="flex space-x-20 mt-10">
          <div
            className="mt-4 w-[750px] h-[320px] p-10"
            style={{
              background: "linear-gradient(360deg, #EFF6FF 0%, #FFFFFF 100%)",
            }}
          >
            <p className="font-bold text-2xl">Step 3</p>
            <p className="pt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <Image
              src="/images/Partner.png"
              alt="Logo"
              width={550}
              height={350}
              style={{ objectFit: "cover" }} 
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="w-11/12 mx-auto p-5">
        <p className="text-[48px] font-bold mt-24">Join Hands with VIDI</p>
        <div className="flex flex-col mt-10">
          {/* Tab Header */}
          <div className="flex text-center">
            {tabData.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative w-[240px] cursor-pointer"
              >
                <p className="border-b-4 border-[#B6B6B6] z-0 pb-1">
                  {tab.title}
                </p>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-black z-10"></div>
                )}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 ">
            {tabData.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="text-left">
                    {tab.content}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
