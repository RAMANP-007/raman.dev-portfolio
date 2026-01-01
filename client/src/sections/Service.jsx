import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useGSAP(() => {
    const common = {
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    };

    gsap.fromTo(
      "#title-service-1",
      { x: 120 },
      {
        x: -120,
        scrollTrigger: {
          trigger: "#title-service-1",
          ...common,
        },
      }
    );

    gsap.fromTo(
      "#title-service-2",
      { x: -140 },
      {
        x: 140,
        scrollTrigger: {
          trigger: "#title-service-2",
          ...common,
        },
      }
    );

    gsap.fromTo(
      "#title-service-3",
      { x: 160 },
      {
        x: -160,
        scrollTrigger: {
          trigger: "#title-service-3",
          ...common,
        },
      }
    );

    gsap.fromTo(
      "#title-service-4",
      { x: -120 },
      {
        x: 120,
        scrollTrigger: {
          trigger: "#title-service-4",
          ...common,
        },
      }
    );
  });

  return (
    <div>
      <section className="mt-20 mb-42 overflow-hidden font-light text-center contact contact-text-responsive">
        <div id="title-service-1">
          <p>Architecture</p>
        </div>

        <div
          id="title-service-2"
          className="flex items-center justify-center gap-3"
        >
          <p>Development</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p className="font-normal">Deployment</p>
        </div>

        <div
          id="title-service-3"
          className="flex items-center justify-center gap-2"
        >
          <p>APIs</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Frontend</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Scalability</p>
        </div>

        <div id="title-service-4">
          <p>Databases</p>
        </div>
      </section>
    </div>
  );
};

export default Service;
