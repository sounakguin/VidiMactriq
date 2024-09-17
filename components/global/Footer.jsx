import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-6">
      <div className="bg-[#F4F4F4] border  pt-12 pb-12">
        <div className="flex justify-around">
          <div className="flex-col">
            <Image src="/images/logo2.png" alt="Logo" width={167} height={83} />
            <p className="w-80  pt-2 leading-7 ">
              VIDI- Khabya Technologies Pvt. Ltd. is one of the most recognized
              and trusted brands nationally for the manufacture, distribution,
              supply and trading of Reverse Osmosis (RO) components such as
              Domestic RO Booster Pumps, RO Inline Filters, RO Membrane, RO
              Housing, RO Spun Filter and many other spare parts
            </p>
          </div>
          <div className="flex-col text-[#515151] text-sm leading-7">
            <p className="text-lg font-semibold text-black pt-3">Our Company</p>
            <Link href="/about">
              <p className="pt-3">About us</p>
            </Link>
            <Link href="/contactus">
              <p>Contact us</p>
            </Link>
            <p className="">Join hands</p>
            <p className="">Events & Exhibition</p>
            <p className="">Company’s programme</p>
            <Link href="/support">
              <p className="">Support</p>
            </Link>
          </div>
          <div className="flex-col text-[#515151] text-sm leading-7">
            <p className="text-lg font-semibold text-black pt-3">Products & Services</p>
            <p className="pt-3 ">Products</p>
            <p className="">Product Demo</p>
            <p className="">Careers</p>
            <p className="">Blog</p>
            <p className="">FAQs</p>
          </div>
        </div>
        <div className="border border-black w-4/5 mx-auto mt-24"></div>
        <div className="flex w-4/5 mx-auto justify-between mt-8 ">
          <div className="flex space-x-3 pt-2">
            <a
              href="https://www.facebook.com/KhabyaWaterTechnologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Facebook.png"
                alt="Facebook Logo"
                width={20}
                height={20}
                className="h-[24px] w-[24px]"
              />
            </a>
            <a
              href="https://www.instagram.com/vidi_khabyawatertechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Instragram.png"
                alt="Logo"
                width={20}
                height={20}
                className="h-[24px] w-[24px]"
              />
            </a>
            <a
              href="https://youtube.com/@vidi-khabyawatertechnologi3455?si=1cTFiqWyqnAHKsqr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/YouTube.png"
                alt="Logo"
                width={20}
                height={20}
                className="h-[24px] w-[24px]"
              />
            </a>
          </div>
          <div className="flex space-x-3 ">
            <Image
              src="/images/Frame.png"
              alt="Logo"
              width={135}
              height={40}
              className="pl-1"
            />
            <Image
              src="/images/Frame1.png"
              alt="Logo"
              width={135}
              height={40}
            />
          </div>
        </div>
        <div className="flex w-4/5 mx-auto justify-between mt-5 text-xs text-[#535768]">
          <div className="flex ">
            <p className="border border-[#515151] border-t-0 border-l-0 border-b-0 pr-3">
              Return & replacement policy
            </p>
            <p className="border border-[#515151] border-t-0 border-l-0 border-b-0 pr-3 pl-2">
              Privacy & Policies
            </p>
            <p className="pl-2">Billing & shipping policy</p>
          </div>
          <div>
            <p className="">All Rights Reserved © vidi.co.in</p>
          </div>
          <div className="flex space-x-2">
            <Image src="/images/Frame2.png" alt="Logo" width={18} height={18} />
            <p>Accessibility statement</p>
            <span>Khabya Technologies Pvt LTD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
