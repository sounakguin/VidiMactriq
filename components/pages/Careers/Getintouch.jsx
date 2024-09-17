"use client";
import React, { useState } from "react";

export default function Getintouch() {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isMaritalOpen, setIsMaritalOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [selectGender, setSelectGender] = useState("Choose");
  const [selectMarital, setSelectMarital] = useState("Choose");
  const [selecteducation, setSelecteducation] = useState("Choose");

  const toggleGenderDropdown = () => {
    setIsGenderOpen(!isGenderOpen);
    setIsMaritalOpen(false);
    setIsEducationOpen(false);
  };

  const toggleMaritalDropdown = () => {
    setIsMaritalOpen(!isMaritalOpen);
    setIsGenderOpen(false);
    setIsEducationOpen(false);
  };

  const toggleEducationDropdown = () => {
    setIsEducationOpen(!isEducationOpen);
    setIsGenderOpen(false);
    setIsMaritalOpen(false);
  };

  const selectGenderOption = (option) => {
    setSelectGender(option);
    setIsGenderOpen(false);
  };

  const selectMaritalOption = (option) => {
    setSelectMarital(option);
    setIsMaritalOpen(false);
  };

  const selectInterestedOption = (option) => {
    setSelectInterested(option);
    setIsInterestedOpen(false);
  };
  return (
    <div>
      <div className="mt-40">
        <p className="text-center text-[48px] font-semibold">Get in Touch</p>
        <form className="w-3/4 mx-auto mt-14 mb-72">
          <div className="flex space-x-8 justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[304px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-jost font-normal pt-1">First Name *</label>
              <input
                type="text"
                required
                placeholder="First Name"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[304px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-jost font-normal pt-1">Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[304px] h-28 pl-6 pt-4 pb-2 pr-6  rounded-2xl">
              <label className="font-normal font-jost pt-1">Last Name *</label>
              <input
                type="text"
                required
                placeholder="Last Name"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
          </div>
          <div className="flex space-x-10 mt-8 justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-jost font-normal pt-1">Email *</label>
              <input
                type="email"
                required
                placeholder="Email"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-normal font-jost pt-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="Whatsapp Number"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
          </div>
          <div className="flex space-x-10 mt-8 justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6  rounded-2xl">
              <label className="font-jost font-normal pt-1">Address *</label>
              <input
                type="text"
                required
                placeholder="Email"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-normal font-jost pt-1">
                Marital Status *
              </label>
              <div className="relative mt-5 ">
                {/* Dropdown button */}
                <button
                  type="button"
                  onClick={toggleMaritalDropdown}
                  className="bg-transparent text-sm border-b-[1px] border-black outline-none w-full text-left flex justify-between items-center"
                >
                  <p className="text-[#8F8F8F] pl-2 pb-2">{selectMarital}</p>

                  <span className="ml-2">{isMaritalOpen ? "▲" : "▼"}</span>
                </button>

                {/* Dropdown menu */}
                {isMaritalOpen && (
                  <ul className="absolute -left-6 -bottom-52  bg-[#EFF6FF] pb-6 mt-2 z-10 w-[470px] rounded-b-2xl">
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-6 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => selectMaritalOption("Single")}
                    >
                      Single
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1  w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => selectMaritalOption("Married")}
                    >
                      Married
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => selectMaritalOption("Divorced")}
                    >
                      Divorced
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => selectMaritalOption("Widowed")}
                    >
                      Widowed
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => selectMaritalOption("Other")}
                    >
                      Other
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex space-x-10 mt-8 justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-jost font-normal pt-1">
                Date of Birth (DOB) *
              </label>
              <input
                type="date"
                required
                placeholder="Select Date"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6   rounded-2xl">
              <label className="font-normal font-jost pt-1">Gender *</label>
              <div className="relative mt-5">
                {/* Dropdown button */}
                <button
                  type="button"
                  onClick={toggleGenderDropdown}
                  className="bg-transparent text-sm border-b-[1px] border-black outline-none w-full text-left flex justify-between items-center"
                >
                  <p className="text-[#8F8F8F] pl-2 pb-2"> {selectGender}</p>
                  <span className="ml-2">{isGenderOpen ? "▲" : "▼"}</span>
                </button>

                {/* Dropdown menu */}
                {isGenderOpen && (
                  <ul className="absolute -left-6  -bottom-44  bg-[#EFF6FF] pb-6 mt-2 z-10 w-[470px] rounded-b-2xl">
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-6 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => selectGenderOption("Male")}
                    >
                      Male
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1  w-[420px] mx-auto cursor-pointer  pl-2"
                      onClick={() => selectGenderOption(" Female")}
                    >
                      Female
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer  pl-2"
                      onClick={() => selectGenderOption("Others")}
                    >
                      Others
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer  pl-2"
                      onClick={() => selectGenderOption("Prefer not to say")}
                    >
                      Prefer not to say
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex space-x-10 mt-8 justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-jost font-normal pt-1">
                Years of Experience *
              </label>
              <input
                type="text"
                required
                placeholder="Email"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6   rounded-2xl">
              <label className="font-normal font-jost pt-1">
                Highest Education Level *
              </label>
              <div className="relative mt-5">
                {/* Dropdown button */}
                <button
                  type="button"
                  onClick={toggleEducationDropdown}
                  className="bg-transparent text-sm border-b-2 border-black outline-none w-full text-left flex justify-between items-center"
                >
                  <p className="text-[#8F8F8F] pl-2 pb-2">{selecteducation}</p>

                  <span className="ml-2">{isEducationOpen ? "▲" : "▼"}</span>
                </button>

                {/* Dropdown menu */}
                {isEducationOpen && (
                  <ul className="absolute -left-6 -bottom-60 bg-[#EFF6FF] pb-6 mt-2 z-10 w-[470px]  rounded-b-2xl">
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-6 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => setSelecteducation("High School")}
                    >
                      High School
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1  w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => setSelecteducation("Associate Degree")}
                    >
                      Associate Degree
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => setSelecteducation("Bachelor’s Degree")}
                    >
                      Bachelor’s Degree
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => setSelecteducation("Master’s Degree")}
                    >
                      Master’s Degree
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointer pl-2"
                      onClick={() => setSelecteducation("Doctorate")}
                    >
                      Doctorate
                    </li>
                    <li
                      className="border-b-[1px] border-[#B1B1B1] pt-1 pb-1 w-[420px] mx-auto cursor-pointe pl-2r"
                      onClick={() => setSelecteducation("Other")}
                    >
                      Other
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex space-x-10 mt-8 justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6  rounded-2xl">
              <label className="font-jost font-normal pt-1">
                Current Designation *
              </label>
              <input
                type="text"
                required
                placeholder="Email"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[470px] h-28 pl-6 pt-4 pb-2 pr-6 rounded-2xl">
              <label className="font-normal font-jost pt-1 flex">
                <p>Upload Your Resume * </p>
                <p className="pl-10 text-[#8F8F8F] text-[15px]">
                  Maximum file size 10MB
                </p>
              </label>
              <input
                required
                type="file"
                className="bg-transparent border-b-[1px] border-black pt-4 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-[#EFF6FF] flex flex-col w-[980px] h-28 pl-6 pt-4 pb-4 pr-6  justify-center rounded-2xl">
              <label className="font-normal font-jost pt-1">Comment *</label>
              <input
                type="text"
                required
                placeholder="Communicate with us"
                className="bg-transparent border-b-[1px] border-black pt-5 text-sm text-[#8F8F8F] pl-2 pb-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
