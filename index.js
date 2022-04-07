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

const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeModal');

function openModal() {
  modal.style = 'display: block; position: fixed; overflow-y: scroll';
  document.querySelector('body').style = 'z-index: -1';
}

modalBtn.addEventListener('click', openModal);

function closeModel() {
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModel);