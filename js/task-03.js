const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const mainList = document.querySelector('.gallery');

mainList.style.listStyle = "none";
mainList.style.display = "flex";
mainList.style.flexWrap = "wrap";
mainList.style.gap = "50px";

// * спроба зробити по конспекту

// const createGalleryMarkup = (imgArray, list) => {
//   const itemsGallery = [...imgArray]
//     .map((element) =>
//       `<li class="gallery__item">
//       <img class="gallery__img" src="${element.url}"      
//       alt="${element.alt}">
//     </li>
//     `)
//     .join("");   
//   return list.insertAdjacentHTML("beforeend", itemsGallery);
// }

// createGalleryMarkup(images, mainList);

// * по Репеті

const createImageMarkup = ({url, alt}) => {  
  return `<li class="gallery__item">
            <img class="gallery__img" src="${url}"      
            alt="${alt}">
          </li>
          `
};

const createGalleryMarkup = images
  .map(createImageMarkup)
  .join('');

mainList.insertAdjacentHTML("beforeend", createGalleryMarkup);

// оформлення галереї
const listItem = mainList.querySelectorAll('.gallery__item');

[...listItem].map((element) => {
  element.style.marginLeft = "auto";
  element.style.marginRight = "auto";
});

const itemImg = mainList.querySelectorAll('.gallery__img');

[...itemImg].map((element) => {
  element.style.width = "300px";
  element.style.height = "200px";  
  element.style.display = "block";  
})