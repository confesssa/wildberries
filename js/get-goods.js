const getGoods = () => {
const links = document.querySelectorAll('.navigation-link');

const getData = (value, category) => {
  fetch('https://test-3fd0f-default-rtdb.firebaseio.com/db.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const array = category ? data.filter((item) => item[category] === value) : data;
      localStorage.setItem('goods', JSON.stringify(array));
      console.log(JSON.parse(localStorage.getItem('goods')));
    })
};

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const linkValue = link.textContent;
    const category = link.dataset.field;
    getData(linkValue, category);
  })
})
};

getGoods();