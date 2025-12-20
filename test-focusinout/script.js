window.addEventListener("blur", () => {
  document.documentElement.style.backgroundColor = "blue";
});

window.addEventListener("focus", () => {
  document.documentElement.style.backgroundColor = "white";
});
const originalTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Come back!";
});

window.addEventListener("focus", () => {
  document.title = originalTitle;
});
