const controlEl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

textToChange.style.fontSize = controlEl.value + 'px';

controlEl.addEventListener("input", () => textToChange.style.fontSize = controlEl.value + 'px');

