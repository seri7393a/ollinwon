"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../public/images/ollinwonlogo.png";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Image src={Logo} alt="" width={200} height={50} />

              <div className="md:hidden">
                <div
                  className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <CloseIcon className="w-6 h-6" />
                  ) : (
                    <RiMenu3Line className="w-6 h-6" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto list-none items-center justify-center md:flex">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link
                    href="#home"
                    onClick={() => setNavbar(!navbar)}
                    className="text-black hover:text-yellow-700"
                    style={{ textDecoration: "none", fontSize: "1.4rem" }}
                  >
                    Home
                  </Link>
                </li>

                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link
                    href="#about"
                    onClick={() => setNavbar(!navbar)}
                    className="text-black hover:text-yellow-700"
                    style={{ textDecoration: "none", fontSize: "1.4rem" }}
                  >
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link
                    href="#service"
                    onClick={() => setNavbar(!navbar)}
                    className="text-black hover:text-yellow-700"
                    style={{ textDecoration: "none", fontSize: "1.4rem" }}
                  >
                    Service
                  </Link>
                </li>
                <li className="pb-6 text-xl list-none text-black py-2 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link
                    href="#contact"
                    onClick={() => setNavbar(!navbar)}
                    className="text-black hover:text-yellow-700"
                    style={{ textDecoration: "none", fontSize: "1.4rem" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
