import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import AnimatedTextLines from "./AnimatedTextLines";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeaderSection = ({
  subtitle = "",
  title = "",
  text = "",
  textColor = "",
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
            start: "top 80%", 
            toggleActions: "play none none none",
          }
        : undefined,
    });

    tl.from(headerRef.current, {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      textRef.current,
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "circ.out",
      },
      "-=0.4"
    );

    
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={contextRef}>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`px-10 text-sm font-light tracking-[0.5rem] uppercase ${textColor}`}
          >
            {subtitle}
          </p>

          <div className="px-10">
            <h1 className={`${textColor} uppercase banner-text-responsive`}>
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div ref={textRef} className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 text-end sm:py-16">
          <AnimatedTextLines
            text={text}
            className="font-light text-end uppercase value-text-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
