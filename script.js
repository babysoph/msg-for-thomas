let isOpened = false;

function openLetter() {
    const image = document.getElementById("letterImage");
    const message = document.getElementById("letterMessage");
    const button = document.querySelector("button");

    if (!isOpened) {
      image.src = "images/letter.png";
      image.style.maxWidth = "375px";
      message.textContent = "";
      button.textContent = "back";
      isOpened = true;
  } else {
      image.src = "images/default.png";
      image.style.maxWidth = "300px";
      message.textContent = "";
      button.textContent = "open me";
      isOpened = false;
  }
}
  