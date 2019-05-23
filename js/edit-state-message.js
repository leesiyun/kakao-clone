const input = document.querySelector(".js-status-message__input");
const okBtn = document.querySelector(".js-status-message__okBtn");
const delBtn = document.querySelector(".js-status-message__delBtn");

input.focus();

const CURRENT_STATUS_MESSAGE = "currentStatusMessage";

const saveStatusMessage = function() {
  const value = input.value;
  const originValue = localStorage.getItem(CURRENT_STATUS_MESSAGE);

  if (originValue !== value) {
    localStorage.setItem(CURRENT_STATUS_MESSAGE, value);
  }
};
okBtn.addEventListener("click", saveStatusMessage);

const inputHandler = function() {
  const value = event.target.value;
  const originValue = localStorage.getItem(CURRENT_STATUS_MESSAGE);
  if (originValue !== value) {
    okBtn.classList.add("color-black");
    okBtn.classList.remove("color-gray");
  } else {
    okBtn.classList.add("color-gray");
    okBtn.classList.remove("color-black");
  }
};
input.addEventListener("keyup", inputHandler);

const getValue = function() {
  const originValue = localStorage.getItem(CURRENT_STATUS_MESSAGE);
  return originValue ? originValue : "Keep up the good work.";
};

input.value = getValue();

const deleteTextHandler = function() {
  input.value = "";
  input.focus();
};
delBtn.addEventListener("click", deleteTextHandler);
