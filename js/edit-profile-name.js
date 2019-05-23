const profileNameInput = document.querySelector(".js-name__input");
const okBtn = document.querySelector(".js-name__okBtn");
const delBtn = document.querySelector(".js-name__input-delBtn");

const CURRENT_NAME = "currentName";

profileNameInput.focus();

const saveNameHandler = function() {
  const value = profileNameInput.value;
  const originName = localStorage.getItem(CURRENT_NAME);

  if (value && originName !== value) {
    localStorage.setItem(CURRENT_NAME, value);
  }
};

okBtn.addEventListener("click", saveNameHandler);

const inputNameHandler = function() {
  const value = event.target.value;
  const originName = localStorage.getItem(CURRENT_NAME);
  if (value && originName !== value) {
    okBtn.classList.add("color-black");
    okBtn.classList.remove("color-gray");
  } else {
    okBtn.classList.add("color-gray");
    okBtn.classList.remove("color-black");
  }
};

profileNameInput.addEventListener("keyup", inputNameHandler);

const getName = function() {
  const originName = localStorage.getItem(CURRENT_NAME);
  return originName ? originName : "Lee Siyun";
};

profileNameInput.value = getName();

const deleteTextHandler = function() {
  profileNameInput.value = "";
  profileNameInput.focus();
};

delBtn.addEventListener("click", deleteTextHandler);
