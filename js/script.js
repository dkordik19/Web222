/* eslint-disable no-unused-vars */

function createItem(obj, className) {
  let main = document.querySelector('.content-wrapper');
  let itemContainer = document.createElement('div');
  let image = document.createElement('img');
  let title = document.createElement('h3');
  let description = document.createElement('p');
  let price = document.createElement('h4');

  main.appendChild(itemContainer);

  image.setAttribute('src', obj.image);
  itemContainer.appendChild(image);

  title.innerHTML = obj.title;
  itemContainer.appendChild(title);

  description.innerHTML = obj.description;
  itemContainer.appendChild(description);

  price.innerHTML = `Price: ${obj.price}`;
  itemContainer.appendChild(price);

  itemContainer.style.display = 'flex';
  itemContainer.style.flexDirection = 'column';
  itemContainer.style.alignItems = 'center';
  itemContainer.style.width = '40%';
  itemContainer.style.height = '40%';
  itemContainer.style.padding = '20px';
  itemContainer.style.margin = '10px';
  itemContainer.style.backgroundColor = 'var(--item-bg-color)';
  itemContainer.style.borderRadius = '5px';

  itemContainer.className = className;
  itemContainer.setAttribute('id', obj.id);

  image.style.display = 'block';
  image.style.width = '60%';
  image.style.marginBottom = '15px';
}

function loadRods(obj, className) {
  obj.forEach(element => createItem(element, className));
}

//Generate components
window.addEventListener('load', loadRods(rods, 'rods-container'));
window.addEventListener('load', loadRods(reels, 'reels-container'));

//default load
window.addEventListener('load', () => {
  document.querySelector('.home-container').style.display = 'block';
  document.querySelectorAll('.reels-container').forEach(e => (e.style.display = 'none'));
  document.querySelectorAll('.rods-container').forEach(e => (e.style.display = 'none'));
});

//Show home
document.querySelector('#menu-home').addEventListener('click', () => {
  document.querySelector('.home-container').style.display = 'block';
  document.querySelectorAll('.rods-container').forEach(e => (e.style.display = 'none'));
  document.querySelectorAll('.reels-container').forEach(e => (e.style.display = 'none'));
});

//Show reels
document.querySelector('#menu-reels').addEventListener('click', () => {
  document.querySelector('.home-container').style.display = 'none';
  document.querySelectorAll('.rods-container').forEach(e => (e.style.display = 'none'));
  document.querySelectorAll('.reels-container').forEach(e => {
    e.style.display = 'flex';
    e.style.width = '40%';
  });
});

//Show rods
document.querySelector('#menu-rods').addEventListener('click', () => {
  document.querySelector('.home-container').style.display = 'none';
  document.querySelectorAll('.reels-container').forEach(e => (e.style.display = 'none'));
  document.querySelectorAll('.rods-container').forEach(e => {
    e.style.display = 'flex';
    e.style.width = '40%';
  });
});

//Show home

document.querySelector('#menu-contact').addEventListener('click', () => {
  document.querySelector('.home-container').style.display = 'none';
  document.querySelectorAll('.rods-container').forEach(e => (e.style.display = 'none'));
  document.querySelectorAll('.reels-container').forEach(e => (e.style.display = 'none'));
  window.location.href = 'contact.html';
});

//Select reel (item details)
document.querySelectorAll('.content-wrapper .reels-container').forEach(elem => {
  elem.addEventListener('click', e => {
    let index = e.target.id;
    console.log(index);
    document.querySelectorAll('.content-wrapper .reels-container').forEach(elem => {
      elem.style.display = 'none';
    });
    elem.style.display = 'flex';
    elem.style.width = '100%';
  });
});
//Select rod (item details)
document.querySelectorAll('.content-wrapper .rods-container').forEach(elem => {
  elem.addEventListener('click', e => {
    let index = e.target.id;
    console.log(index);
    document.querySelectorAll('.content-wrapper .rods-container').forEach(elem => {
      elem.style.display = 'none';
    });
    elem.style.display = 'flex';
    elem.style.width = '100%';
  });
});
