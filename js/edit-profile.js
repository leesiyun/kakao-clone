const profileName = document.querySelector(".js-profile-name-text");

const getName = function() {
  const originName = localStorage.getItem("currentName");
  return originName ? originName : "Lee Siyun";
};
profileName.innerHTML = getName();

const profileStateMessage = document.querySelector(".js-statusMsg-text");

const getStateMessage = function() {
  const originStateMessage = localStorage.getItem("currentStatusMessage");
  return originStateMessage ? originStateMessage : "Keep up the good work.";
};
profileStateMessage.innerHTML = getStateMessage();
