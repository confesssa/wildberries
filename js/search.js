function search() {
  const input = document.querySelector('.search-block > input');
  const searchBnt = document.querySelector('.search-block > button');

 searchBnt.addEventListener('click', (event) => {
    console.log(input.value)
  })
}

search();
