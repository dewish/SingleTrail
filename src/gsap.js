// * ANIMATION with Gsap the main content
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import barba from "@barba/core";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".anim1", {
  opacity: 0,
  duration: 1.5,
  y: -50,
  stagger: 0.5,
});

gsap.from(".card", { duration: 1, opacity: 0, y: 35, stagger: 0.5,   delay: 2, });


