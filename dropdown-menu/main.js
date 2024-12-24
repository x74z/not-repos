const dropdownBtn = document.querySelector(".js-dropdown-button");
const dropMenu = document.querySelector(".js-dropdown-content");

function handleDropdownBtnOnMouseOver(e) {
  dropMenu.classList = "dropdown__content--visible dropdown__content js-dropdown-content";
}
dropdownBtn.addEventListener("mouseover", handleDropdownBtnOnMouseOver);

function handleDropdownBtnOnFocusOut(e) {
  dropMenu.classList = "dropdown__content--invisible dropdown__content js-dropdown-content";
}
dropdownBtn.addEventListener("pointerdown", handleDropdownBtnOnFocusOut);
