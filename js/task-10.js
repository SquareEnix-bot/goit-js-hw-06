function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// * константи контейнерів
const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

// * константи інпута та кнопок
const numberOfBoxes = controls.querySelector('input[type="number"]');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');

// * зчитує значення інпута
function onNumberOfBoxesChange(event) {  
  onCreateBtnClick(event.currentTarget.valueAsNumber);  
  return event.currentTarget.valueAsNumber; // ! вертає необхідне число не знаю як запихнути у функцію
}

let sidesSize = 20;

// * слухачі на кнопки
function onCreateBtnClick(quantity) {
  onDestroyBtnClick();
  for (let index = 0; index < numberOfBoxes.valueAsNumber; index += 1) {    
    sidesSize += 10;
    const newBox = document.createElement('div');
    newBox.style.width = sidesSize + 'px';
    newBox.style.height = sidesSize + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(newBox);    
  }  
} 

function onDestroyBtnClick() {
  boxesContainer.innerHTML = '';
  sidesSize = 20;
}

// * виклик
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);