const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.classList.toggle('open');

  const isOpen = nav.classList.contains('open');
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    menuButton.classList.remove('open');
    menuButton.setAttribute('aria-label', 'Open menu');
  }
});


// Footer dynamic data
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#modified').textContent = document.lastModified;
