const inputValidatingFunctions = {
  username: [
    function (value) {
      return value.length <= 0 ? "поле обязательно*" : "";
    },
    function (value) {
      return /[A-Z]|[А-Я]/.test(value[0])
        ? ""
        : "Первая буква должен быть заглавным*";
    },
    function (value) {
      return value.length < 3 ? "должно быть более 3 символов*" : "";
    },
  ],
  password: [
    function (value) {
      return value.length === 0 ? "поле обязательно*" : "";
    },
    function (value) {
      return value.length < 6 ? "должно быть более 6 символов*" : "";
    },
    function (value) {
      return /[a-z]|[а-я]|[A-Z]|[А-Я]/.test(value)? "": "паролье должен быть буквы";
    },
    function (value) {
      return /[1-9]/.test(value) ? "" : "паролье должен быть число*";
    },
  ],
  repeatPassword: [
    function (value) {
      return value.length === 0 ? "поле обязательно*" : "";
    },
    function (value) {
      const originPas = document.querySelector(".authorization__password").value 
      return originPas === value ? "" : "Пароль не совпадает*";
    },
  ],
};

export function renderValidation(formInput) {
  const warningErrorText = document.querySelector(
    `.warning-${formInput.name}-error`
  );

  let errorText = "";
  inputValidatingFunctions[formInput.name].forEach((getErrorText) => {
    if (errorText) return;
    errorText = getErrorText(formInput.value);
  });
  warningErrorText.textContent = errorText;
  formInput.classList.add("error");
  if (!errorText) {
    formInput.classList.remove("error");
    return true;
  }
}
