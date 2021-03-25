// * ANIMATION with Gsap the main content
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".anim1", {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.5,
});

gsap.from(".card", { duration: 1, opacity: 0, y: 60, stagger: 0.5 });


