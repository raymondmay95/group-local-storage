window.addEventListener("DOMContentLoaded", (event) => {
  const addToCartButton = document.getElementById('add-to-cart')
  const itemValues = document.getElementById('items')
  const quantityValues = document.getElementById('quantity')

  addToCartButton.addEventListener('click', event => {
    localStorage.setItem(itemValues.value, quantityValues.value)

  })


});
