function search() {
  const input = document.querySelector('.search-block > input');
  const searchBnt = document.querySelector('.search-block > button');

  input.addEventListener('input', (event) => {
    console.log(event.target.value)
  })
}

search();