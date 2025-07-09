import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto ">
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center min-w-fit mr-2"
        >
          <Image
            src="/namelogo.png"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer"
          />

          <span className="font-bold ml-0 lg:ml-[10px] hidden md:block text-gray-300 min-w-fit">
            Akash Prodhan
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex gap-[3px] max-sm:text-[14px] items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contacts" className="cursor-pointer">
              Contacts
            </a>
          </div>
        </div>

        <div className="hidden flex-row gap-5 sm:flex">
          {Socials.map((social) => (
            <a
              key={social.name} // ✅ Move key here
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="cursor-pointer"
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
