const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// Footer dynamic data
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#modified').textContent = document.lastModified;
