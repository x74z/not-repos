const carousel = (() => {
  const imageArray = document.querySelectorAll(".img-carousel__img");
  // const imageContainer = document.querySelector(".js-image-container");
  let currentImageIndex = 0;

  function moveToLeft() {
    if (currentImageIndex === 0) {
      imageArray[0].classList = "img-carousel__img img-carousel__img--hidden";
      currentImageIndex = imageArray.length - 1;
      imageArray[currentImageIndex].classList =
        "img-carousel__img img-carousel__img--visible";
      return;
    }
    imageArray[currentImageIndex].classList =
      "img-carousel__img img-carousel__img--hidden";
    currentImageIndex -= 1;
    imageArray[currentImageIndex].classList =
      "img-carousel__img img-carousel__img--visible";
  }
  function moveToRight() {
    // Add plus 1 so it matches the array lenght when index is 3(end of array)
    if (currentImageIndex + 1 === imageArray.length) {
      imageArray[currentImageIndex].classList =
        "img-carousel__img img-carousel__img--hidden";
      imageArray[0].classList = "img-carousel__img img-carousel__img--visible";
      currentImageIndex = 0;
      return;
    }
    imageArray[currentImageIndex].classList =
      "img-carousel__img img-carousel__img--hidden";
    imageArray[currentImageIndex + 1].classList =
      "img-carousel__img img-carousel__img--visible";
    currentImageIndex += 1;
  }
  return{moveToLeft, moveToRight}
})();

// Event listeners
(()=>{
  const leftButton = document.querySelector(".js-button-left");
  const rightButton = document.querySelector(".js-button-right");
  leftButton.addEventListener("pointerdown", carousel.moveToLeft);
  rightButton.addEventListener("pointerdown", carousel.moveToRight);

})()
