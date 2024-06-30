// Fetch cart items from the browser's local storage
function getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems;
  }
  
  // Render the cart items in the table
  function renderCartItems() {
    const cartItems = getCartItems();
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
  
    let totalPrice = 0;
    cartItems.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
        <td><button class="remove-item" data-id="${item.id}">Remove</button></td>
      `;
      cartItemsContainer.appendChild(row);
  
      totalPrice += item.price * item.quantity;
    });
  
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Remove an item from the cart
  