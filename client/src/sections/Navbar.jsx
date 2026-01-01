import React, { useEffect, useRef, useState } from "react";
import socials from "../constants/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const ToplineRef = useRef(null);
  const BottomlineRef = useRef(null);
  const tl = useRef(null);
  const lastScrollY = useRef(0);

  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    if (!navRef.current) return;

    gsap.set(navRef.current, {
      xPercent: 100,
      autoAlpha: 0,
      pointerEvents: "none",
    });

    gsap.set(linksRef.current, {
      autoAlpha: 0,
      x: -20,
    });

    gsap.set(contactRef.current, {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowBurger(false);
      } else {
        setShowBurger(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      requestAnimationFrame(() => tl.current?.play());
    } else {
      tl.current?.reverse();
      setTimeout(() => setIsOpen(false), 800);
    }

    gsap.to(ToplineRef.current, {
      rotate: isOpen ? 0 : 45,
      y: isOpen ? 0 : 4,
      duration: 0.3,
    });

    gsap.to(BottomlineRef.current, {
      rotate: isOpen ? 0 : -45,
      y: isOpen ? 0 : -4,
      duration: 0.3,
    });
  };

  return (
    <>
      {isOpen && (
        <nav
          ref={navRef}
          className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-20 gap-y-8 md:w-1/2 md:left-1/2"
        >
          <div className="flex flex-col gap-y-2 text-4xl md:text-5xl lg:text-7xl">
            {["home", "services", "about", "work", "contact"].map(
              (section, index) => (
                <div key={section} ref={(el) => (linksRef.current[index] = el)}>
                  <Link
                    to={section}
                    smooth
                    duration={2000}
                    onClick={toggleMenu}
                    className="transition-all duration-300 cursor-pointer hover:text-white"
                  >
                    {section}
                  </Link>
                </div>
              )
            )}
          </div>

          <div
            ref={contactRef}
            className="flex flex-col gap-6 text-sm md:flex-row md:items-end md:justify-between"
          >
            <div className="font-light">
              <p className="tracking-wider text-white/50">E-MAIL</p>
              <p className="tracking-widest lowercase">
                devraman0007@gmail.com
              </p>
            </div>

            <div className="font-light">
              <p className="tracking-wider text-white/50">SOCIAL-MEDIA</p>
              <div className="flex flex-col md:flex-row gap-x-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="tracking-widest uppercase hover:text-white transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={{
          clipPath: showBurger
            ? "circle(50% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
      >
        <span
          ref={ToplineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        />
        <span
          ref={BottomlineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        />
      </div>
    </>
  );
};

export default Navbar;
