const searchImg = document.querySelector('.menu__search');
const menuLinksActive = document.querySelector('.menu__links_active');
const btnElse = document.querySelector('.model__button');
const menuModelsHidden = document.querySelector('.model__hidden');
const lastModelItem = document.querySelector('.model__item_last');
const btnHide = document.querySelector('.model__button_hide');                                

searchImg.addEventListener('click', (event) => {
  event.preventDefault();
  menuLinksActive.style.display = 'none';
  searchImg.classList.add('menu__search_active');
});

btnElse.addEventListener('click',(e) => {
  e.preventDefault();
  menuModelsHidden.classList.add('model__hidden_active');
  btnElse.classList.add('model__button_hidden');
  lastModelItem.classList.add('model__item_last_active');
});

btnHide.addEventListener('click',(e) => {
  e.preventDefault();
  menuModelsHidden.classList.toggle('model__hidden_active');
  btnElse.classList.toggle('model__button_hidden');
  lastModelItem.classList.toggle('model__item_last_active');
});


