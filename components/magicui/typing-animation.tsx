"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  texts: string[];       // animated parts (e.g. ["web developer", "frontend developer"])
  prefix?: string;       // static part (e.g. "a ")
  className?: string;
  duration?: number;
  delay?: number;
  loopDelay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  texts,
  prefix = "",
  className,
  duration = 100,
  delay = 0,
  loopDelay = 1500,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion(Component);
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const currentIndexRef = useRef(0);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const deletingRef = useRef<NodeJS.Timeout | null>(null);

  const startTypingLoop = () => {
    const type = (text: string, i = 0) => {
      if (i <= text.length) {
        setDisplayedText(text.substring(0, i));
        typingRef.current = setTimeout(() => type(text, i + 1), duration);
      } else {
        typingRef.current = setTimeout(() => startDeleting(text), loopDelay);
      }
    };

    const startDeleting = (text: string, i = text.length) => {
      if (i >= 0) {
        setDisplayedText(text.substring(0, i));
        deletingRef.current = setTimeout(() => startDeleting(text, i - 1), duration / 2);
      } else {
        currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
        typingRef.current = setTimeout(() => type(texts[currentIndexRef.current]), 500);
      }
    };

    type(texts[currentIndexRef.current]);
  };

  useEffect(() => {
    if (!startOnView) {
      const timer = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (started && texts.length > 0) {
      startTypingLoop();
    }

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
      if (deletingRef.current) clearTimeout(deletingRef.current);
    };
  }, [started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("flex items-center gap-2 sm:gap-4 relative", className)}
      {...props}
    >
      <span className="text-white ">{prefix}</span>

      <span className="whitespace-nowrap ">
        {displayedText}
        <span className="blinking-cursor text-[18px] sm:text-2xl md:text-3xl xl:text-4xl text-[#2584ff] ">|</span>
      </span>
    </MotionComponent>
  );

}
