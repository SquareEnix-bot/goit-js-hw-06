const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');

const createEl = (array, list) => {
  return array.map((element) => {    
    const newItem = document.createElement("li");
    newItem.textContent = element;
    newItem.classList.add('item');
    list.append(newItem);     
    return element;
  });  
}

createEl(ingredients, mainList);


