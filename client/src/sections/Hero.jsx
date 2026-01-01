import React, { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Float, Lightformer } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";



const Hero = () => {
const isMobile = useMediaQuery({maxWidth : 853})
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const text = `
I help businesses build scalable web applications
with delightful
user experiences.
`.trim();


useGSAP(() => {
  const tl = gsap.timeline();
   tl.from(contextRef.current,{
    y: "50vh",
    duration : 1,
    ease : "circ.out",
   });

   tl.from(headerRef.current, {
    opacity: 0,
    y : "300",
    duration : 1,
    ease : "circ.out",
   }, "+0.2");
})


  return (
    <section
      id="home"
      className="flex flex-col justify-end min-h-screen"
    >
      <AnimatedHeaderSection subtitle="404 No bugs found" title="Raman Patra" text={text} textColor="text-black" />
      <figure className="absolute inset-0 -z-50" style={{width : "100vw", height : "100vh"}}>
        <figure className="absolute inset-0 -z-50" style={{ width: "100vw", height: "100vh" }}>
  <Canvas
    shadows
    camera={{ position: [0, 0, 10], fov: 17.5, near: 1, far: 50 }}
  >
    <ambientLight intensity={0.25} />

    <Environment preset="studio" />

    <Float speed={0.6} rotationIntensity={0.4}>
      <Planet scale = {isMobile ? 0.7 : 1} />
    </Float>

    <Lightformer
      form="circle"
      intensity={4}
      position={[4, 2, 5]}
      scale={8}
      color="#f5c77a"
    />

    <Lightformer
      form="circle"
      intensity={3}
      position={[-4, -2, 3]}
      scale={6}
      color="#8ecae6"
    />

    <Lightformer
  form="circle"
  intensity={0.8}
  position={[0, 4, -5]}
  scale={6}
  color="#f1f1f1"
/>

  </Canvas>
</figure>

      </figure>
    </section>
  );
};

export default Hero;