window.addEventListener("DOMContentLoaded", (event) => {
  const addToCartButton = document.getElementById('add-to-cart')
  const itemValues = document.getElementById('items')
  const quantityValues = document.getElementById('quantity')

  const renderCart = () => {
    const items = Object.keys(localStorage)
    const amount = Object.values(localStorage)
    console.log(items, amount)
    const unorderedList = document.createElement('ul')
    unorderedList.setAttribute('id', 'unorderedList')
    items.forEach((key, index)=>{
      const liElement = document.createElement('li')
      liElement.innerText = `${key}     quantity :${amount[index]}`
      unorderedList.appendChild(liElement)

    })
    document.body.appendChild(unorderedList)
  }
  renderCart()

  addToCartButton.addEventListener('click', event => {
    localStorage.setItem(itemValues.value, quantityValues.value)

  })


});
