import nProgress from "nprogress";

nProgress.configure({ easing: "ease-in-out", speed: 1000 });

nProgress.configure({
  template: `
  <div class="preloader">
      <div class="preloader__content">
          <div role="bar" class="preloader__progress"></div>
      </div>
  </div>"`,
});

nProgress.start();
nProgress.set(0.5);
//Increment
let interval = setInterval(function () {
  nProgress.inc(0.5);
}, 500);
$(document).ready(function () {
  nProgress.done();
  clearInterval(interval);
});

const progress = document.getElementById("nprogress");
console.log(progress.style);
