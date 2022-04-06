const openMenu = document.querySelector('#hamburger');
const closeButton = document.querySelector('.closeIcon');
const closeItems = document.querySelector('.items');

openMenu.onclick = function openMenu() {
  document.querySelector('.open').style = 'display: block';
  document.querySelector('#hamburger').style = 'display: none';
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('section').style = 'filter: blur(6px)';
};

closeButton.onclick = function closeMenu() {
  document.querySelector('nav').style.display = 'none';
  document.querySelector('#hamburger').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('section').style = 'filter: none';
};

closeItems.onclick = function closeItem() {
  document.querySelector('nav').style.display = 'none';
  document.querySelector('#hamburger').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('section').style = 'filter: none';
};
