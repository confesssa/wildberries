function cart() {
  const cartBnt = document.querySelector('.button-cart');
const cart = document.getElementById('modal-cart');
const closeBtn = cart.querySelector('.modal-close');

cartBnt.addEventListener('click', function() {
  cart.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  cart.style.display = '';
})
};

cart();