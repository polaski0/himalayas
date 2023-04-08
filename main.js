import { gsap } from "gsap";

const header = document.querySelector('#header');

gsap.fromTo(header, {y: "-100%"}, {y: "0%"})