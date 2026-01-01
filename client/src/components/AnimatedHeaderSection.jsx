import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import AnimatedTextLines from "./AnimatedTextLines";

const AnimatedHeaderSection = ({ subtitle="", title="" , text="", textColor=""}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  
 

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "300",
        duration: 1,
        ease: "circ.out",
      },
      "+0.2"
    );
  });

  return (
    <div ref={contextRef}>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16 "
        >
          <p className={`px-10 text-sm font-light tracking-[0.5rem] uppercase ${textColor}`}>
            {subtitle}
          </p>

          <div className="px-10">
            <h1 className={`${textColor} uppercase banner-text-responsive`}>
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10 ${textColor}`}>
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
