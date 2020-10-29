window.addEventListener("DOMContentLoaded", (event) => {
  const addToCartButton = document.getElementById('add-to-cart')
  const itemValues = document.getElementById('items')
  const quantityValues = document.getElementById('quantity')

  const clearbutton = () => {
    const shoppingCartHead = document.getElementById("shopping-cart")
    const clearbutton = document.createElement('button')
    clearbutton.innerText = 'Clear Cart'
    shoppingCartHead.appendChild(clearbutton)
    return clearbutton
  }

  const renderCart = () => {
    clearbutton().addEventListener(('click'), () => {
      unorderedList.innerHTML = ''
    })
    const items = Object.keys(localStorage)
    const amount = Object.values(localStorage)
    const unorderedList = document.createElement('ul')
    unorderedList.setAttribute('id', 'unorderedList')
    items.forEach((key, index)=>{
      const liElement = document.createElement('li')
      const button = document.createElement('button')
      button.innerText = 'Remove Item'
      liElement.innerText = `${key}     quantity :${amount[index]}`
      liElement.appendChild(button)
      unorderedList.appendChild(liElement)

    })
    document.body.appendChild(unorderedList)
  }
  renderCart()

  const removeFromCart = (itemId) => {
    Storage.removeItem(itemId)
  }

  addToCartButton.addEventListener('click', event => {
    localStorage.setItem(itemValues.value, quantityValues.value)

  })


});
