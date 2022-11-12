import React from "react";

import gsap from "gsap";
import { useEffect} from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Loading = () => {
  useEffect(() => {
    const sg = gsap.timeline({ default: { ease: "power1.out" } });

    sg.to(".text", {
      translateY: "0%",
      duration: 0.7,
      opacity: 1,
      stagger: 0.1,
    });

    sg.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    sg.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  }, []);

  return (
    <div>
      <div class="intro">
        <div class="intro-text">
          <h1 class="hide">
            <span class="text fontt">
              B<span class="text fontt">L</span>
              <span class="text fontt">O</span>
              <span class="text fontt">O</span>
              <span class="text fontt">M</span>
              <span class="text fontt">Y</span>
              <span class="text fontt space"> </span>
              <span class="text fontt">B</span>
              <span class="text fontt">R</span>
              <span class="text fontt">O</span>
              <span class="text fontt">W</span>
              <span class="text fontt">S</span>
            </span>
          </h1>
        </div>
      </div>

      <div class="slider"></div>
    </div>
  );
};

export default Loading;
