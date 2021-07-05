import './style.scss';

const btn = document.querySelector('.header button.btn-default');
const menu = document.querySelector('.header .links');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('block');
})