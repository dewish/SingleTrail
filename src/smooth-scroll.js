// Smooth scrolling

import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";


/////////////////////////////////////
// Locomotion-scroll
 
const scroller = new LocomotiveScroll({
    el: document.querySelector('.scrollContainer'),
    smooth: true
  });