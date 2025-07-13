import React from "react";
import { watchImg, rightImg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden common-padding bg-(--custom-zinc)"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="heading" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex items-end gap-5">
            <p className="link">
              Watch the films
              <img className="ml-2" src={watchImg} alt="watch" />
            </p>
            <p className="link">
              Watch the event
              <img className="ml-2" src={rightImg} alt="right" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
