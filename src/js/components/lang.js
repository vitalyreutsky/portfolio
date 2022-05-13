const langArr = {
  title: {
    ru: "Виталий Реутский",
    en: "Vitaly Reutsky",
  },
  navMain: {
    ru: "Главная",
    en: "Main",
  },
  navAbout: {
    ru: "Обо мне",
    en: "About",
  },
  navPortfolio: {
    ru: "Портфолио",
    en: "Portfolio",
  },
  navContacts: {
    ru: "Контакты",
    en: "Contacts",
  },
  hello: {
    ru: "Привет!",
    en: "Hi!",
  },
  myName: {
    ru: "Виталий Реутский",
    en: "Vitaly Reutsky",
  },
  im: {
    ru: "Я",
    en: "I'm",
  },
  download: {
    ru: "Скачать резюме",
    en: "Download resume",
  },
  aboutTitle: {
    ru: "Обо мне",
    en: "About me",
  },
  aboutBigTitle: {
    ru: "Обо мне",
    en: "About me",
  },
  aboutText: {
    ru: "Привет! Я занимаюсь разработкой сайтов любой сложности и веб-приложений. Также специализируюсь на веб-дизайне. Создаю не только красивый и уникальный продукт но и продающий. Опыт более 2-х лет. За это время помог реализовать идеи своих клиентов из Украины, Молдовы, Казахстана, Беларуси и России. В своей работе (frontend) использую такие технологии как HTML5, SCSS3, Bootstrap, JavaScript, JQuery, различные библиотеки Slick, Swiper, AOS и многое другое. Автоматизирую свой процесс разработки с помощью Gulp, Webpack. Также есть опыт с React JS. Есть опыт с backend частью - PHP. И это далеко не все на чем я готов остановиться. <br> Для улучшения своих навыков, закончил курсы в школе it-shatle.",
    en: "Hi! I develop websites of any complexity and web applications. I also specialize in web design. I create not only a beautiful and unique product, but also a selling one. My experience is more than 2 years. During this time, I have helped to realize the ideas of my clients from Ukraine, Moldova, Kazakhstan, Belarus and Russia. In my work (frontend) I use technologies such as HTML5, SCSS3, Bootstrap, JavaScript, JQuery, various libraries Slick, Swiper, AOS and much more. I automate my development process using Gulp, Webpack. Also I have experience with React JS. I have experience with the backend part - PHP. And that's not all I'm ready to cover. <br> To improve my skills, completed a course at the it-shatle school.",
  },
  prioritiesTitle: {
    ru: "Приоритеты",
    en: "Priorities",
  },
  prioritiesBigTitle: {
    ru: "Приоритеты",
    en: "Priorities",
  },
  prioritiesTitleSpeed: {
    ru: "Скорость загрузки",
    en: "Download speed",
  },
  prioritiesTitleDevices: {
    ru: "Отзывчивость",
    en: "Responsiveness",
  },
  prioritiesTitleCross: {
    ru: "Кроссбраузерность",
    en: "Cross-browser compatibility",
  },
  prioritiesTextSpeed: {
    ru: "Быстрое время загрузки сайта - один из моих главных приоритетов. Благодаря сервису pagespeed можно отследить скорость загрузки сайта.",
    en: "Fast site loading times are one of my top priorities. Thanks to the pagespeed service, you can track the speed of loading a site.",
  },
  prioritiesTextDevices: {
    ru: "Благодаря полной адаптации, сайт будет хорошо смотреться на всех мобильных устройствах.",
    en: "Thanks to full adaptation, the site will look good on all mobile devices.",
  },
  prioritiesTextCross: {
    ru: "Сайт будет хорошо работать на всех популярных браузерах без проблем в функционировании и ошибок в работе.",
    en: "The site will work well on all popular browsers without problems in functioning and errors in operation.",
  },
  skillsTitle: {
    ru: "Навыки",
    en: "Skills",
  },
  skillsBigTitle: {
    ru: "Навыки",
    en: "Skills",
  },
  reviewsTitle: {
    ru: "Отзывы",
    en: "Reviews",
  },
  reviewsBigTitle: {
    ru: "Отзывы",
    en: "Reviews",
  },
  review1: {
    ru: `"Все сделано быстро и отлично! Однозначно рекомендую Виталия как отличного исполнителя!"`,
    en: `"Everything was done quickly and perfectly! I definitely recommend Vitaly as an excellent performer!"`,
  },
  reviewAuthor1: {
    ru: "Роман Довгаль",
    en: "Roman Dovgal",
  },
  review2: {
    ru: `"Работа была выполнена хорошо, приятно иметь дело с таким специалистом!"`,
    en: `"Job well done, a pleasure to deal with specialist!"`,
  },
  reviewAuthor2: {
    ru: "Максим Журавлев",
    en: "Maxim Zhuravlev",
  },
  review3: {
    ru: `"Всегда на связи, если есть какие то моменты - всегда предупреждает заранее. Работу выполнил хорошо."`,
    en: `"Always in touch, if there are any moments - always warns in advance. Did the job well"`,
  },
  reviewAuthor3: {
    ru: "Павел Арнутов",
    en: "Pavel Arnutov",
  },
  review4: {
    ru: `"Обратился к Виталию с проектом на SCSS. Проект был согласован и выполнен очень быстро (а это очень важно когда сроки поджимают), структурированно. Рекомендую."`,
    en: `"I contacted Vitaly with a SCSS project. The project was agreed and completed very quickly (and this is very important when the deadlines are running out). Structured. Recommend."`,
  },
  reviewAuthor4: {
    ru: "Мурат Ташенев",
    en: "Murat Tashenov",
  },
  review5: {
    ru: `"Сделано день в день! Очень доволен сотрудничеством! Качественный исполнитель!"`,
    en: `"Made to the day! Very pleased with the cooperation! Quality performer!"`,
  },
  reviewAuthor5: {
    ru: "Роман Довгаль",
    en: "Roman Dovgal",
  },
  review6: {
    ru: `"Отличный исполнитель!!! Очень приятный человек и очень качественно всё сделал!!! Рекомендую!!!"`,
    en: `"Great performer!!! Very nice person and did a great job! Recommend!!!"`,
  },
  reviewAuthor6: {
    ru: "Ярослав Бурлевич",
    en: "Yaroslav Burlevich",
  },
  portfolioTitle: {
    ru: "Портфолио",
    en: "Portfolio",
  },
  portfolioBigTitle: {
    ru: "Портфолио",
    en: "Portfolio",
  },
  portfolioMP: {
    ru: "Многостраничные сайты",
    en: "Multipage sites",
  },
  portfolioOS: {
    ru: "Интернет-магазины",
    en: "Online stores",
  },
  portfolioMoreWS: {
    ru: "Подробнее",
    en: "More",
  },
  modalTextWS: {
    ru: "Сайт для стоматологической клиники White Story.",
    en: "Website for the White Story dental clinic.",
  },
  modalLinkWS: {
    ru: "Перейти",
    en: "Link",
  },
  portfolioMoreSS: {
    ru: "Подробнее",
    en: "More",
  },
  modalTextSS: {
    ru: "Интернет-магазин мужской спортивной обуви.",
    en: "Online store for men's sports shoes.",
  },
  modalLinkSS: {
    ru: "Перейти",
    en: "Link",
  },
  modalTextCh: {
    ru: "Страница для молдавского сайта Chisinau Visit.",
    en: "Page for Moldovan site Chisinau Visit.",
  },
  modalLinkCh: {
    ru: "Перейти",
    en: "Link",
  },
  modalTextST: {
    ru: "Сайт для услуги космического туризма.",
    en: "Site for space tourism service.",
  },
  modalLinkST: {
    ru: "Перейти",
    en: "Link",
  },
  portfolioMoreCh: {
    ru: "Подробнее",
    en: "More",
  },
  portfolioMoreST: {
    ru: "Подробнее",
    en: "More",
  },
  portfolioDescr: {
    ru: "* большую часть работ можно посмотреть на github",
    en: "* most of the work can be viewed on github",
  },
  contactsTitle: {
    ru: "Контакты",
    en: "Contacts",
  },
  contactsBigTitle: {
    ru: "Контакты",
    en: "Contacts",
  },
  contactsRequest: {
    ru: "Оставь заявку",
    en: "Leave a request",
  },
  contactsInputName: {
    ru: "Имя",
    en: "Name",
  },
  contactsInputPhone: {
    ru: "Телефон",
    en: "Phone",
  },
  contactsInputMessage: {
    ru: "Сообщение",
    en: "Message",
  },
  contactsSend: {
    ru: "Отправить",
    en: "Send",
  },
  contactsAdress: {
    ru: "Беларусь, Минск",
    en: "Belarus, Minsk",
  },
  footer: {
    ru: "Все права защищены ©",
    en: "All rights reserved ©",
  },
};

const select = document.querySelector(".change-lang");
const allLang = ["ru", "en"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;

  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;

  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;
  document.querySelector("title").innerHTML = langArr["title"][hash];

  for (let key in langArr) {
    let elem = document.querySelector(`[lng-${key}]`);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();
