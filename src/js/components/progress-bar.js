const progNum = document.querySelectorAll(".skills__progress-num");
const progress = document.querySelectorAll(".skills__progress-bar");
const skills = document.querySelector(".about__skills");
let bol = false;

window.addEventListener("scroll", () => {
  if (pageYOffset > skills.offsetTop && bol === false) {
    for (let i = 0; i < progNum.length; i++) {
      progNum[i].innerText = 0;
      count = 0;

      progress[i].style.bottom = "100%";
      progress[i].style.bottom = progNum[i].dataset.count - 100 + "%";

      function updateCount() {
        target = parseInt(progNum[i].dataset.count);

        if (count < target) {
          count++;
          progNum[i].innerText = count;
          setTimeout(updateCount, 100);
        } else {
          progNum[i].innerText = target + "%";
        }
      }
      updateCount();
      bol = true;
    }
  }
});
