"use client";
import React, { useState } from "react";
import { contactAction } from "@/actions/contact";
export default function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Choose");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    whatsappNumber: "",
    address: "",
    interest: "",
    subject: "",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setFormData({ ...formData, interest: option });
    setIsOpen(false); // Close dropdown after selecting
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await contactAction(formData);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      whatsappNumber: "",
      address: "",
      interest: "",
      subject: "",
    });
  };

  return (
    <div>
      <div className="mt-32">
        <form className="w-2/4 mx-auto" onSubmit={handleSubmit}>
          <div className="flex space-x-10">
            <div className="bg-[#EFF6FF] flex flex-col w-[400px] h-28 p-4 rounded-2xl">
              <label className="font-jost font-normal pt-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-transparent border-b-2 border-black focus:outline-none pt-5 text-sm"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[400px] h-28 p-4 rounded-2xl">
              <label className="font-normal font-jost pt-1">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="bg-transparent border-b-2 focus:outline-none border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="flex space-x-10 mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-[400px] h-28 p-4 rounded-2xl">
              <label className="font-jost font-normal pt-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent border-b-2  focus:outline-none border-black pt-5 text-sm"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-[400px] h-28 p-4 rounded-2xl">
              <label className="font-normal font-jost pt-1">
                Whatsapp Number *
              </label>
              <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="Whatsapp Number"
                className="bg-transparent border-b-2  focus:outline-none border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-[840px] h-28 p-4 rounded-2xl">
              <label className="font-normal font-jost pt-1">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="bg-transparent border-b-2  focus:outline-none border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-[840px] h-28 p-4 rounded-2xl">
              <label className="font-normal font-jost pt-1">
                Are you interested in? *
              </label>
              <div className="relative mt-5">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="bg-transparent text-sm border-b-2 border-black outline-none w-full text-left flex justify-between items-center"
                >
                  {selectedOption}
                  <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <ul className="absolute -left-4 bg-[#EFF6FF] pb-6 mt-2 z-10 w-[762px] rounded-b-2xl">
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-6 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("VIDI Products")}
                    >
                      VIDI Products
                    </li>
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-1 pb-1 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("Channel Partner")}
                    >
                      Channel Partner
                    </li>
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-1 pb-1 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("VIDI Rewards")}
                    >
                      VIDI Rewards
                    </li>
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-1 pb-1 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("Employment & Careers")}
                    >
                      Employment & Careers
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-[840px] h-28 p-4 rounded-2xl">
              <label className="font-normal font-jost pt-1">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border-b-2  focus:outline-none border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="flex justify-left mt-10">
            <button
              type="submit"
              className="bg-[#009FE4] text-white font-semibold py-2 px-10 rounded hover:bg-[#007AB8] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
