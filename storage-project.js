window.addEventListener("DOMContentLoaded", (event) => {
  const addToCartButton = document.getElementById('add-to-cart')
  const itemValues = document.getElementById('items')
  const quantityValues = document.getElementById('quantity')

  const clearbutton = document.createElement('button')
  const shoppingCartHead = document.getElementById("shopping-cart")

  const createClearButtonFunc = () => {
    clearbutton.innerText = 'Clear Cart'
    if (Object.keys(localStorage).length > 0) {
      shoppingCartHead.appendChild(clearbutton)
    }
    // } else if (Object.keys(localStorage).length > 0 || shoppingCartHead.clearbutton === undefined) {
    //   shoppingCartHead.removeChild(clearbutton)
    // }
  }
  //! removing the clearbutton after page reloads without local storage.




  const renderCart = () => {

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


  // debugger;
  // const removeFromCart = (itemId) => {
    //   Storage.removeItem(itemId)


    addToCartButton.addEventListener('click', event => {
      event.preventDefault()
      localStorage.setItem(itemValues.value, quantityValues.value)
      renderCart()
      createClearButtonFunc()
  })

  clearbutton.addEventListener(('click'), (event) => {
    event.preventDefault()
    for (key in localStorage) {
      localStorage.removeItem(key)
    }
    let list = document.getElementById('unorderedList')
    document.body.removeChild(list)

  })


});
