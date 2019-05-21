const profileName = document.querySelector(".js-name__edit"),
  profileNameInput = profileName.querySelector("input");

const USER_LS = "currentUser";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
  console.log(USER_LS);
}

/*
function okbtnhandler() {
  const okBtn = document.querySelector("js-name__ok-btn");
  okBtn.addEventListener("onclick", saveName);
}
*/
