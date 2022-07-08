const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;


const onDecrementClick = () => {  
  counterValue -= 1;
  value.innerHTML = counterValue;  
}

const onIncrementClick = () => {  
  counterValue += 1;
  value.innerHTML = counterValue; 
}

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);