import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRef = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(
    () => {
      if (!lineRef.current.length) return;

      gsap.from(lineRef.current, {
        y: 80,
        opacity: 0,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRef.current[index] = el)}
          className="block"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
