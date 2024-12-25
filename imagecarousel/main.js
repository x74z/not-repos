const carousel = (() => {
  const imageArray = document.querySelectorAll(".img-carousel__img");
  // const imageContainer = document.querySelector(".js-image-container");
  let currentImageIndex = 0;
  const hiddenClass = "img-carousel__img img-carousel__img--hidden";
  const visibleClass = "img-carousel__img img-carousel__img--visible";

  function addDotColor() {
    const dot = document.querySelector(`#dot-${currentImageIndex}`);
    dot.classList.add("img-carousel__dot--selected");
  }
  function removeDotColor() {
    const dot = document.querySelector(`#dot-${currentImageIndex}`);
    dot.classList.remove("img-carousel__dot--selected");
  }
  function moveToLeft() {
    removeDotColor();
    if (currentImageIndex === 0) {
      imageArray[0].classList = hiddenClass;
      currentImageIndex = imageArray.length - 1;
      imageArray[currentImageIndex].classList = visibleClass;
      addDotColor();
      return;
    }
    imageArray[currentImageIndex].classList = hiddenClass;
    currentImageIndex -= 1;
    imageArray[currentImageIndex].classList = visibleClass;
    addDotColor();
  }
  function moveToRight() {
    removeDotColor();
    // Add plus 1 so it matches the array lenght when index is 3(end of array)
    if (currentImageIndex + 1 === imageArray.length) {
      imageArray[currentImageIndex].classList = hiddenClass;
      imageArray[0].classList = visibleClass;
      currentImageIndex = 0;
      addDotColor();
      return;
    }
    imageArray[currentImageIndex].classList = hiddenClass;
    imageArray[currentImageIndex + 1].classList = visibleClass;
    currentImageIndex += 1;
    addDotColor();
  }
  function toSlideOfIndex(index) {
    removeDotColor();
    imageArray[currentImageIndex].classList = hiddenClass;
    imageArray[index].classList = visibleClass;
    currentImageIndex = index;
    addDotColor();
  }
  return { moveToLeft, moveToRight, imageArray, toSlideOfIndex };
})();
//Dots
(() => {
  const dotsContainer = document.querySelector(".js-dots");
  carousel.imageArray.forEach((img, imgIndex) => {
    const dot = document.createElement("button");
    dot.textContent = "•";
    dot.classList = "js-dot img-carousel__dot";
    dot.id = `dot-${imgIndex}`;
    dot.addEventListener("pointerdown", () =>
      carousel.toSlideOfIndex(imgIndex),
    );
    dotsContainer.appendChild(dot);
  });
})();
// Event listeners
(() => {
  const leftButton = document.querySelector(".js-button-left");
  const rightButton = document.querySelector(".js-button-right");
  leftButton.addEventListener("pointerdown", carousel.moveToLeft);
  rightButton.addEventListener("pointerdown", carousel.moveToRight);
  // Make the first slide color coded
  carousel.toSlideOfIndex(0);
})();
