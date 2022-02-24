function cart() {
  const cartBnt = document.querySelector('.button-cart');
const cart = document.getElementById('modal-cart');
const closeBtn = cart.querySelector('.modal-close');

cartBnt.addEventListener('click', () => {
  cart.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  cart.style.display = '';
});
};

cart();
