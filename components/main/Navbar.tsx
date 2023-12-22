"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {

  const redirectToLink = () => {
    // Redirect logic here
    window.location.href = "https://github.com/vedas-dixit";
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#ebeaec5e]/50 bg-[#bfbdc917] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >

<span
      className="font-bold ml-[10px] hidden md:block text-gray-300"
      onClick={redirectToLink}
      style={{ cursor: 'pointer' }}
    >
      ©vedas_dixit
    </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full  bg-[#03001438] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
        {Socials.map((social) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={social.name}
        >
          <Image
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        </a>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
