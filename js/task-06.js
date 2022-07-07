const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  textInput.classList.add("invalid");
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
  else {
    textInput.classList.remove("valid");
  }
  console.log(textInput.value.length);
});

