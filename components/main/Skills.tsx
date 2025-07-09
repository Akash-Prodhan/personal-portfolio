"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { AnimatedGradientTextDemo } from "@/components/magicui/animated-gradient-text-demo";
import { MarqueeDemo } from "@/components/magicui/marquee-demo";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const skillBoxRef = useRef<HTMLDivElement>(null);

  // Toggle scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("bg-black");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("bg-black");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        skillBoxRef.current &&
        !skillBoxRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <section
        id="skills"
        className="relative flex flex-col z-[20] items-center justify-center gap-3 w-full h-full overflow-hidden max-sm:pt-20 sm:pb-40 md:pb-80 sm:py-20"
      >
        <div className="w-full h-auto flex flex-col items-center justify-center scale-[0.9]">
          {/* Header Text */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-bold mt-[10px] text-center mb-[15px] pointer-events-none"
          >
            Making apps with modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">technologies</span>
          </motion.div>

          {/* Tech Stack Button */}
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box opacity-[0.9] scale-125 my-10 cursor-pointer z-30"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatedGradientTextDemo name="Tech Stacks" />
          </motion.div>
        </div>

        {/* Skills Modal + Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              />

              {/* Skills Section */}
              <motion.div
                ref={skillBoxRef}
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute -translate-x-1/2 top-[30%] -translate-y-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 sm:p-6 rounded-xl w-[90%] max-w-2xl shadow-lg"
              >
                <motion.div
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:rotate-90 duration-150 cursor-pointer absolute top-4 right-4 rounded-full hover:bg-[#ffffff1c] bg-[#ffffff38] p-1 flex justify-center items-center">
                  <img className="w-[18px]" src="/cross.svg" alt="" />
                </motion.div>
                <h2 className="text-xl font-bold mb-4">My Skills</h2>
                <ul className="flex text-[15px] sm:text-[18px] ">
                  <div className="flex flex-col gap-4 w-full">
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/html.png" alt="" />HTML</li>
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/css.png" alt="" />CSS</li>
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/javascript.png" alt="" />JavaScript</li>
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/tailwind.png" alt="" />Tailwind CSS</li>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/react.png" alt="" />React.js</li>
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/docker.webp" alt="" />Docker</li>
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/mongodb.png" alt="" />Mongo DB</li>
                    <li className="flex gap-4 justify-start items-center">
                      <img className="h-8 sm:h-12" src="/python.png" alt="" />Python</li>
                  </div>

                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Marquee Section */}
        <MarqueeDemo />

        {/* Background Video */}
        <div className="w-full h-full absolute pointer-events-none max-sm:hidden">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover pointer-events-none">
            <video
              className="w-full h-full pointer-events-none"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;




