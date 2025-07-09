"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { AnimatedGradientTextDemo } from "@/components/magicui/animated-gradient-text-demo";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-8 sm:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box opacity-[0.9] cursor-pointer pointer-events-none"
        >
          <AnimatedGradientTextDemo name="Introducing Portfolio" />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="pointer-events-none flex flex-col gap-6 mt-6 text-[6vw] sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white min-w-fit max-w-[700px] w-auto h-auto"
        >
          <span className="min-w-fit">
            Hi, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Akash Prodhan
              <br />
            </span>
            <TypingAnimation
              prefix="a"
              texts={[" web developer..", " frontend developer.."]}
              duration={100}
              loopDelay={1500}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[13px] xl:text-lg text-gray-400 my-5 max-w-[600px] pointer-events-none"
        >
          I create stunning, interactive web experiences that blend beautiful design with cutting-edge technology. Specialized in React and modern frontend frameworks.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="w-fit"
        >
          <RainbowButton className="text-[#cecece] font-semibold bg-[linear-gradient(#000,#000),linear-gradient(#adadad_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]">
            Download CV
          </RainbowButton>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="h-full w-full hidden justify-center items-center lg:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="h-auto w-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
