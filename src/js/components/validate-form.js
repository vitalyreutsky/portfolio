//Валидация формы
import { validateForms } from "../functions/validate-forms";

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

const rules = [
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

validateForms(".form", rules, afterForm);
