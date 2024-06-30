// Fetch product information from the server or local storage
function getProductInfo() {
  // Implement your logic to fetch the product details
  return {
    id: 1,
    name: 'Womens Perfume',
    description: 'This is a sample product description.',
    price: 49.99,
    imageUrl: '../images/products/perfume.jpg'
  };
}

// Render the product information on the page
function renderProductInfo() {
  const product = getProductInfo();

  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('product-image').src = product.imageUrl;
}

// Add the product to the cart
function addToCart() {
  const product = getProductInfo();

  // Check if the cart items are stored in local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the product is already in the cart
  const existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  // Store the updated cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Optionally, you can display a success message or update the cart UI
  console.log('Product added to cart!');
}

// Add event listener to the "Add to Cart" button
document.getElementById('add-to-cart').addEventListener('click', addToCart);

// Render the product information on page load
renderProductInfo();
