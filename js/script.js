let popupIsOpen = false;
let popupSuccesIsOpen = false;
const popupSuccess = document.querySelector(".pagecrm_popup-success");
const popup = document.querySelector(".pagecrm_popup");

function showPopup() {
  popup.classList.add("pagecrm_popup_shown");
  popupIsOpen = true;
}

function openSuccess() {
  popupSuccess.classList.add("pagecrm_popup_shown");
  popupSuccesIsOpen = true;
  closePopup();
}

function closePopup() {
  if (popup) {
    popup.classList.remove("pagecrm_popup_shown");
    popupIsOpen = false;
  }
}

function closeSuccess() {
  if (popupSuccess) {
    popupSuccess.classList.remove("pagecrm_popup_shown");
    popupSuccesIsOpen = false;
  }
}

document
  .querySelector(".pagecrm_popup__back")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    if (popupIsOpen) {
      closePopup();
    }
  });

document
  .querySelector(".pagecrm_popup-success__back")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    if (popupSuccesIsOpen) {
      closeSuccess();
    }
  });

function loadHeaderFooter() {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data));
}

document.addEventListener("DOMContentLoaded", loadHeaderFooter);
