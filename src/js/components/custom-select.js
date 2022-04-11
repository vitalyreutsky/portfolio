import Choices from "choices.js";

const defaultSelect = () => {
  const element = document.querySelector(".js-choice");
  const choice = new Choices(element, {
    searchEnabled: false,
  });
};

defaultSelect();
