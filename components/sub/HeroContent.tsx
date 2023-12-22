"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#ffffff] opacity-[0.9]"
        >
          
          <h1 className="Welcome-text text-[18px] te">
            Build On Next.JS 13
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className=" text-8xl">
            Web
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-teal-800">
              {" "}
              Designer{" "}
            </span>
            &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500">
              {" "}
              Developer{" "}
            </span> 
        
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          I&apos;m a Computer Science student with a passion for web development.
          <br/>
          Check out my projects and skills <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500" >:)</span>
        </motion.p>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
