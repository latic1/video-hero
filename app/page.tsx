"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";

export default function Home() {
  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .to(".clip_path-container", {
          duration: 1.2,
          marginTop: "0px",
          ease: "power2.inOut",
        })
        .to(".clip_path-container", {
          duration: 0.9,
          clipPath: "inset(0%)",
          ease: "power4.inOut",
        })
        .to(".hero_title", {
          duration: 0.8,
          bottom: "0px",
          ease: "power2.inOut",
        })
        .to(".hero-subtitle", {
          stagger: 0.1,
          bottom: "0px",
          ease: "power2.inOut",
        });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="no-scrollbar relative flex h-screen items-center justify-center overflow-y-scroll bg-white">
      <section className="clip_path-container absolute inset-0 mt-[100vh] bg-white">
        {/* video background */}
        <div className="absolute h-screen w-screen">
          <video
            preload="auto"
            muted
            loop
            autoPlay
            className="h-full w-full object-cover"
          >
            <source src="https://res.cloudinary.com/dcrvuwr7t/video/upload/v1730277662/sample/lazv13p4ybewamrsugkv.mp4" type="video/mp4" />
            Your browser doesn't support the video tag.
          </video>
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-screen-2xl flex-col justify-between  text-white">
          {/* navbar */}
          <Navbar />

          {/* Hero section */}
          <div className="container mx-auto flex flex-grow flex-col  justify-between py-10">
            <div className="md:w-1/2">
              {" "}
              <h1 className="h-fit overflow-hidden p-2 text-[15vw] leading-none md:text-[126px]">
                <span className="hero_title relative -bottom-96">
                  Accra stay by plan
                </span>
              </h1>
            </div>

            <div className="flex w-full items-end justify-between">
              <div>
                <p className="h-fit overflow-hidden text-[3vw] leading-none">
                  <span className="hero-subtitle relative -bottom-24">
                    Winner always
                  </span>
                </p>
                <p className="h-fit overflow-hidden text-[3vw] leading-none">
                  <span className="hero-subtitle relative -bottom-24">
                    finds a way.
                  </span>
                </p>
              </div>
              <button className="group relative overflow-hidden rounded-full border-2 border-gray-50 px-5 text-[2vw] backdrop-blur-2xl duration-300 hover:text-black">
                {/* Background span */}
                <span className="absolute left-0 top-0 h-full w-0 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>

                {/* Button text */}
                <span className="relative z-10">Explore</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
