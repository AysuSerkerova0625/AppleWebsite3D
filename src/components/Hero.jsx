import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#heroTitle", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: 0,
      delay: 2,
    });
  }, []);
  const [srcVideo, setSrcVideo] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleSrcVideo = () => {
    if (window.innerWidth < 760) {
      setSrcVideo(smallHeroVideo);
    } else {
      setSrcVideo(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleSrcVideo);
    return () => {
      window.removeEventListener("resize", handleSrcVideo);
    };
  }, []);

  return (
    <section className="w-full h-[100vh] bg-black relative py-5 ">
      <div className="w-full h-5/6 flex-center flex-col ">
        <p id="heroTitle" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={srcVideo}
          >
            <source src={srcVideo} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col gap-4 justify-center items-center translate-y-20 opacity-0"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
