import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DetailedService = () => {
  const serviceRef = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });
  const text =
    "I build secure high-performance websites with smooth UX to drive growth, not headaches.";
    

    useGSAP(()=> {
      serviceRef.current.forEach((el)=> {
        if (!el) return;

        gsap.from(el, {
          scrollTrigger : {
            trigger: el,
            start: "top 80%",
            
          },
          duration : 1,
          ease: "circ.out",
        });
      });
    }, []);



  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subtitle="Behind the scene, beyond the screen"
        title="Services"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => {
        const stackOffset = 6;

        return (
          <div
            key={index}
            ref={(el) => (serviceRef.current[index] = el)}
            className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
            style={
              isDesktop
                ? {
                    top: `calc(12vh + ${index * stackOffset}rem)`,
                    marginBottom: `${
                      (servicesData.length - index - 1) * stackOffset
                    }rem`,
                  }
                : { position: "relative" }
            }
          >
            <div className="flex justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>

                <p className="text-4xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                  {service.description}
                </p>

                <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                  {service.items.map((item, itemIndex) => (
                    <div key={`item-${index}-${itemIndex}`}>
                      <h3 className="flex">
                        <span className="mr-12 text-lg text-white/30">
                          0{itemIndex + 1}
                        </span>
                        {item.title}
                      </h3>

                      {itemIndex !== service.items.length - 1 && (
                        <div className="w-full h-px my-2 bg-white/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DetailedService;
