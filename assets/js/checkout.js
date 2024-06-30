// Fetch cart items from the browser's local storage
function getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems;
  }
  
  // Render the cart items in the order summary table
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
      `;
      cartItemsContainer.appendChild(row);
  
      totalPrice += item.price * item.quantity;
    });
  
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Handle the shipping form submission
  const shippingForm = document.getElementById('shipping-form');
  shippingForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Retrieve the form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value
    };
  
    // Optionally, you can send the form data to the server for processing
    console.log('Shipping information:', formData);
  
    // Clear the cart and redirect to a thank you page or display a success message
    localStorage.removeItem('cartItems');
    window.location.href = 'thank-you.html';
  });
  
  // Render the cart items on page load
  renderCartItems();
  