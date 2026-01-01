import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const text = `passionate about clean architecture 
I build scalable, high-performance solutions 
from prototype to production. Let's create 
something amazing together.`;

  const aboutText = `I'm Raman, a dedicated web developer with a passion for crafting seamless digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in building responsive, user-friendly websites that not only look great but also perform flawlessly. My goal is to bridge the gap between design and functionality, ensuring that every project I undertake delivers value to users and drives business growth.`;

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      scale: 0.95,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.6,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-black rounded-b-4xl"
    >
      <AnimatedHeaderSection
        subtitle="code with purpose, design with passion"
        title="About Me"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-center gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg.png"
          alt="Raman portrait"
          className="w-[320px] md:w-[380px] lg:w-[420px] rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className="w-full" />
      </div>
    </section>
  );
};

export default About;
