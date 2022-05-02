document.addEventListener("DOMContentLoaded", () => {
  const mediaFiles = document.querySelectorAll("img");
  const percents = document.querySelector(".percents");
  let i = 0;

  mediaFiles.forEach((file) => {
    file.onload = () => {
      i++;
      percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);
      if (i === mediaFiles.length) {
        preloader.classList.add("preloader--hide");
        percents.innerHTML = 100;
      }
    };
  });
});
