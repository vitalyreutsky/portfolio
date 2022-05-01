//Валидация формы
import { validateForms } from "../functions/validate-forms";

// Реализация модального окна
import GraphModal from "graph-modal";
const modal = new GraphModal();

const afterForm = () => {
  modal.open("modal");
};

const rulesRus = [
  {
    ruleSelector: ".form__input-name",
    rules: [
      {
        rule: "customRegexp",
        value: /^[A-zА-яЁё]+$/,
        errorMessage: "Введи только буквы",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введи минимум 3 символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполни имя!",
      },
    ],
  },
  {
    ruleSelector: ".form__input-tel",
    tel: true,
    telError: "Введи корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполни телефон!",
      },
    ],
  },
];

const rulesEng = [
  {
    ruleSelector: ".form__input-name",
    rules: [
      {
        rule: "customRegexp",
        value: /^[A-zА-яЁё]+$/,
        errorMessage: "Enter only letters",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Enter at least 3 characters",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Fill in the name!",
      },
    ],
  },
  {
    ruleSelector: ".form__input-tel",
    tel: true,
    telError: "Enter the correct phone number",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Fill out the phone!",
      },
    ],
  },
];

if (window.location.hash === "#ru") {
  const inputName = document.querySelector(".form__input-name");
  const inputTel = document.querySelector(".form__input-tel");
  const inputMessage = document.querySelector(".form__textarea");

  inputName.placeholder = "Имя";
  inputTel.placeholder = "Номер телефона";
  inputMessage.placeholder = "Сообщение";

  validateForms(".form", rulesRus, afterForm);
}
if (window.location.hash === "#en") {
  const inputName = document.querySelector(".form__input-name");
  const inputTel = document.querySelector(".form__input-tel");
  const inputMessage = document.querySelector(".form__textarea");

  inputName.placeholder = "Name";
  inputTel.placeholder = "Phone";
  inputMessage.placeholder = "Message";

  validateForms(".form", rulesEng, afterForm);
}
