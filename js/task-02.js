const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');

const create = (array, list) => {
  array.map((element) => {    
    const newItem = document.createElement("li");
    newItem.textContent = element;
    newItem.classList.add('item');
    list.append(newItem);
    console.log('newItem: ', newItem);
  });
  return list;
}

create(ingredients, mainList);


