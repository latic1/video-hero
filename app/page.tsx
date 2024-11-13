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
        <div className="absolute h-screen w-screen" aria-hidden="true">
          <video
            preload="auto"
            muted
            loop
            autoPlay
            className="h-full w-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dcrvuwr7t/video/upload/f_auto:video,q_auto/v1/sample/lazv13p4ybewamrsugkv"
              type="video/mp4"
            />
            Your browser doesn't support the video tag.
          </video>
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-screen-2xl flex-col justify-between text-white">
          {/* navbar */}
          <Navbar />

          {/* Hero section */}
          <div className="container mx-auto flex flex-grow flex-col py-10">
            <div className="mb-64 md:mb-44 md:w-2/3">
              {" "}
              <h1 className="h-fit overflow-hidden py-2 text-center text-[17vw] font-semibold leading-none md:text-left md:text-[150px]">
                <span className="hero_title relative -bottom-96">
                  Accra stay by plan
                </span>
              </h1>
            </div>

            <div className="me:items-end flex w-full flex-col items-center justify-between p-2 md:flex-row md:items-center">
              <div className="mb-5 text-center md:mb-0 md:text-left">
                <p className="h-fit overflow-hidden text-3xl leading-none md:text-[3vw]">
                  <span className="hero-subtitle relative -bottom-24">
                    Winner always
                  </span>
                </p>
                <p className="h-fit overflow-hidden py-1 text-3xl leading-none md:text-[3vw]">
                  <span className="hero-subtitle relative -bottom-24">
                    finds a way.
                  </span>
                </p>
              </div>

              <div className="h-fit items-center overflow-hidden">
                <button className="hero-subtitle group relative -bottom-24 overflow-hidden rounded-full border-2 border-gray-50 px-5 text-xl backdrop-blur-2xl duration-300 hover:text-black md:text-3xl">
                  {/* Background span */}
                  <span className="absolute left-0 top-0 h-full w-0 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>

                  {/* Button text */}
                  <span className="relative z-10">Explore</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
