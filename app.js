let fetchAPI = fetch('https://dummyjson.com/products');
let container = document.querySelector('.container');
let sideBar = document.querySelector('.mobile-links');

function openSideBar() {
  let sideBar = document.querySelector('.mobile-links');
  sideBar.style.display = 'flex';
}

function hideSideBar() {
  let sideBar = document.querySelector('.mobile-links');
  sideBar.style.display = 'none';
}

fetchAPI.then((res) => {
  return res.json();
})

  .then((data) => {
    let sumCards = '';
    for (let i = 0; i < data.products.length; i++) {
      let item = data.products[i];
      sumCards += `
      <div class="card">
      <img src="${item.thumbnail}" alt="${item.thumbnail}">
      <p>${item.title}</p>
      <h3>$${item.price}</h3>
      <p class="description">${item.description}</p>
      </div>`;
    }

    container.innerHTML = `${sumCards}`;
  })


  .catch((error) => {
    container.innerHTML = `API cletch ${error}`
    container.classList.add('error')
  })
