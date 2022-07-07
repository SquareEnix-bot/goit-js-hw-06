const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;


const clickDecrement = () => {  
  counterValue -= 1;
  value.innerHTML = counterValue;  
}

const clickIncrement = () => {  
  counterValue += 1;
  value.innerHTML = counterValue; 
}

decrementBtn.addEventListener('click', clickDecrement);
incrementBtn.addEventListener('click', clickIncrement);