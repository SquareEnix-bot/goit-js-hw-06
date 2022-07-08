function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

const onChangeBgClick = () => {
  const newBGColor = getRandomHexColor();
  colorValue.textContent = newBGColor;
  document.body.style.backgroundColor = `${newBGColor}`;
}

changeColorBtn.addEventListener('click', onChangeBgClick)