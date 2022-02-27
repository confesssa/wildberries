const getGoods = () => {
const links = document.querySelectorAll('.navigation-link');

const getData = () => {
  fetch('https://test-3fd0f-default-rtdb.firebaseio.com/db.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      localStorage.setItem('data', JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem('data')));
    })
};

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    getData()
  })
})
};

getGoods();