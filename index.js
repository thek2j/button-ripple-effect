const btnEl = document.querySelector("button");

btnEl.addEventListener("mouseover", (event) => {
  btnEl.style.setProperty("--xPos", event.offsetX + "px");
  btnEl.style.setProperty("--yPos", event.offsetY + "px");
});
