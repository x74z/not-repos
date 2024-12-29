const formValidator = (() => {
  const activeErrorClass = "form__error-message--active";
  function showErrorMessage(message, errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add(activeErrorClass);
  }
  function removeErrorMessage(errorElement) {
    errorElement.textContent = "";
    errorElement.classList.remove(activeErrorClass);
  }

  function validateEmail() {
    const emailInput = document.querySelector(".js-email");
    const emailError = document.querySelector(".js-error-email");

    if (emailInput.validity.valid) {
      removeErrorMessage(emailError);
      return;
    }

    showErrorMessage("Email not valid", emailError);
  }

  function validateZip() {
    const zipInput = document.querySelector(".js-zip");
    const zipError = document.querySelector(".js-error-zip");

    // Valid will also check things like patterns(regex)
    if (zipInput.validity.valid) {
      removeErrorMessage(zipError);
      return;
    }

    showErrorMessage("zip not valid", zipError);
  }
  function validateCountry() {
    const countryInput = document.querySelector(".js-country");
    const countryError = document.querySelector(".js-error-country");

    if (countryInput.validity.valid) {
      removeErrorMessage(countryError);
      return;
    }

    showErrorMessage("country not valid", countryError);
  }
  function validatePassword() {
    const passwordInput = document.querySelector(".js-password");
    const passwordError = document.querySelector(".js-error-password");

    if (passwordInput.validity.valid) {
      removeErrorMessage(passwordError);
      return;
    }

    showErrorMessage("password not valid", passwordError);
  }

  function validateConfirmPassword() {
    const confirmPasswordInput = document.querySelector(".js-confirm-password");
    const confirmPasswordError = document.querySelector( ".js-error-confirm-password");

    if(confirmPasswordInput.value === document.querySelector(".js-password").value) {
      removeErrorMessage(confirmPasswordError);
      return;
    }

    showErrorMessage("Passwords do not match", confirmPasswordError); 
  }
  function validateAllFields() { validateEmail(); validateZip(); validateCountry(); validatePassword(); validateConfirmPassword(); }
  return {validateAllFields, validateEmail, validateZip,validateCountry, validatePassword, validateConfirmPassword};
})();

// eventListeners to be added
(()=>{
document.querySelector(".js-collector-form").addEventListener("submit", (e)=>{ 
    e.preventDefault();
    formValidator.validateAllFields();
  })

  document.querySelector(".js-email").addEventListener("focusout", formValidator.validateEmail);
  document.querySelector(".js-zip").addEventListener("focusout", formValidator.validateZip);
  document.querySelector(".js-country").addEventListener("focusout", formValidator.validateCountry);
  document.querySelector(".js-password").addEventListener("focusout", formValidator.validatePassword);
  document.querySelector(".js-confirm-password").addEventListener("focusout", formValidator.validateConfirmPassword);
})();
