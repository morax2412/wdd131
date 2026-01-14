
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = input.value;

  deleteButton.textContent = '❌';
  deleteButton.ariaLabel = `Remove ${input.value}`;

  li.append(deleteButton);
  list.append(li);

  input.value = '';
  input.focus();

  
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
  });
});
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

