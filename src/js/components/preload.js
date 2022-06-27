import { gsap } from "gsap";

Pace.on("done", () => {
  gsap.timeline();
  gsap.to(".site-container", {
    duration: 2,
    delay: 0.3,
    opacity: 1,
  });
});
