import React from "react";
import Image from "next/image";

export default function Opportunity() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-32 p-7">
        <div className="flex justify-center space-x-14">
          <div className="flex flex-col h-[350px] w-[340px]  justify-center">
            <Image
              src="/images/HardtoFind.png"
              alt="Logo"
              width={90}
              height={90}
              style={{ objectFit: "cover" }}
            />
            <p className="text-[40px] pt-2 pl-2">Explore opportunities</p>
          </div>
          <div
            className="h-[350px] w-[340px] relative rounded-[10px]"
            style={{
              backgroundImage: "url('/images/jobsearch.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
         
          >
            {/* Vector Image Background */}
            <div
              className="absolute bottom-0 left-0 right-0 rounded-b-[10px] h-[150px]"
              style={{
                backgroundImage: "url('/images/Vector10.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                zIndex: 1,
              }}
            ></div>

            {/* Rectangle Image Background Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[20px] rounded-b-[10px]"
              style={{
                backgroundImage: "url('/images/Rectangle.png')",
                backgroundSize: "cover", // Cover the bottom area
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 2, // Above the vector background but below content
              }}
            ></div>

            <div
              className="absolute bottom-24 left-0 right-0 h-[20px] rounded-b-[10px]"
              style={{
                zIndex: 3,
              }}
            >
              <p className="pl-5 font-semibold">Job opportunities</p>
              <p className="pl-5 pt-5 text-[#4E4E4E]">
                Lorem Ipsum has been the in industry standard dummy
              </p>
            </div>
          </div>
          <div
            className="h-[350px] w-[340px] relative rounded-[10px]"
            style={{
              backgroundImage: "url('/images/jobsearch.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            {/* Vector Image Background */}
            <div
              className="absolute bottom-0 left-0 right-0 rounded-b-[10px] h-[150px]"
              style={{
                backgroundImage: "url('/images/Vector10.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                zIndex: 1,
              }}
            ></div>

            <div
              className="absolute bottom-24 left-0 right-0 h-[20px] rounded-b-[10px]"
              style={{
                zIndex: 3,
              }}
            >
              <p className="pl-5 font-semibold">Job opportunities</p>
              <p className="pl-5 pt-5 text-[#4E4E4E]">
                Lorem Ipsum has been the in industry standard dummy
              </p>
            </div>
            {/* Rectangle Image Background Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[20px] rounded-b-[10px]"
              style={{
                backgroundImage: "url('/images/Rectangle.png')",
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 2, 
              }}
            ></div>
          </div>
          <div
            className="h-[350px] w-[340px] relative rounded-[10px]"
            style={{
              backgroundImage: "url('/images/jobsearch.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
               boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            {/* Vector Image Background */}
            <div
              className="absolute bottom-0 left-0 right-0 rounded-b-[10px] h-[150px]"
              style={{
                backgroundImage: "url('/images/Vector10.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                zIndex: 1,
              }}
            ></div>

            {/* Rectangle Image Background Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[20px] rounded-b-[10px]"
              style={{
                backgroundImage: "url('/images/Rectangle.png')",
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 2, 
              }}
            ></div>
            <div
              className="absolute bottom-24 left-0 right-0 h-[20px] rounded-b-[10px]"
              style={{
                zIndex: 3,
              }}
            >
              <p className="pl-5 font-semibold">Job opportunities</p>
              <p className="pl-5 pt-5 text-[#4E4E4E]">
                Lorem Ipsum has been the in industry standard dummy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
