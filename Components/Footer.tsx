import Image from "next/image";
import Logo from "../public/images/logowhitw.png";
import React from "react";
import {
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <Image src={Logo} alt="Ollinwon Logo" width={300} height={100} />
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Ollinwon - Where creativity meets technology. Crafting unparalleled
            digital experiences to elevate your business beyond expectations.
          </h1>
          <p className="mt-[1.3rem] text-yellow-500 underline font-semibold">
            <a href="mailto:ollinwonofficial@gmail.com" style={{color:'#d98503'}}>
              ollinwonofficial@gmail.com
            </a>
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Links
          </h1>

          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-500">
            Home
          </p>

          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-500">
            About
          </p>

          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-500">
            Service
          </p>

          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-500">
            Contact
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>

          <div className="flex items-center mt-[1rem] space-x-2">
            <MapPinIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Smart Trade Citty Kottakkal, 2nd Floor, Near Kottakkal Bus Stand,
              Malappuram,Kerala
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-500" />
            <a
              href="mailto:ollinwonofficial@gmail.com"
              className="text-[17px] font-normal text-white opacity-75"
            >
              ollinwonofficial@gmail.com
            </a>
          </div>

          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-500" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +91 8590083588
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        <MdCopyright /> Copyright Ollinwon Website 2024
      </div>
    </div>
  );
};

export default Footer;
