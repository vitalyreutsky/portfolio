if (window.location.hash === "#ru") {
  const typed = new Typed(".my-info__title", {
    strings: [
      "Виталий Реутский.",
      "Фронтенд-разработчик.",
      "Виталий Реутский.",
      "Фронтенд-разработчик.",
      "Виталий Реутский.",
      "Фронтенд-разработчик.",
      "Виталий Реутский.",
      "Фронтенд-разработчик.",
    ],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true,
  });
} else {
  const typed = new Typed(".my-info__title", {
    strings: [
      "Vitaly Reutsky.",
      "Frontend-developer.",
      "Vitaly Reutsky.",
      "Frontend-developer.",
      "Vitaly Reutsky.",
      "Frontend-developer.",
      "Vitaly Reutsky.",
      "Frontend-developer.",
    ],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true,
  });
}
