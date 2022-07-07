const mainList = document.querySelector('#categories');

console.log('---task 1---');

const task1 = (value) => value.querySelectorAll('.item').length;
console.log(`Number of categories: ${task1(mainList)}`);

console.log(' ');

// ? перше що спало на думку
console.log('---task 2--- v.1.0');
const task2 = (value) => {
  const masterList = Object.values(value.children); 
  return [...masterList]
    .forEach((innerList) => {    
    console.log(`Category: ${innerList.querySelector('h2').textContent}`);    
    console.log(`Elements: ${innerList.querySelectorAll('li').length}`); 
    console.log('');        
  })    
};
task2(mainList);

console.log(' ');

console.log('---task 2--- v.2.0');
// ? спроба зробити функцію, яку можна перевикористовувати 
const findByIndex = (value, key) => {     
  const masterList = Object.values(value.children);       

  const wantedItem = [...masterList].find((element, index) => key === index);
  
  wantedItem.querySelector('h2').textContent;
  console.log('Category: ', wantedItem.querySelector('h2').textContent);

  wantedItem.querySelectorAll('li');
  console.log('Elements: ', wantedItem.querySelectorAll('li').length);   
  
  console.log(''); 
}
// ! вийшло шось непонятне

findByIndex(mainList, 0);
findByIndex(mainList, 1);
findByIndex(mainList, 2);