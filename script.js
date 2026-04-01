// shopping cart functionality
let cart = [];

// function to add product to cart
function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to your cart.`);
}

// function to remove product from cart
function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index > -1) {
        cart.splice(index, 1);
        console.log(`${product.name} has been removed from your cart.`);
    } else {
        console.log(`Product not found in cart.`);
    }
}

// function to display cart items
function displayCart() {
    console.log(`Your Cart:`);
    cart.forEach(product => {
        console.log(`- ${product.name}: $${product.price}`);
    });
}

// product filtering functionality
let products = [
    { name: 'Water Bottle', price: 10, category: 'Beverages' },
    { name: 'Soda Can', price: 5, category: 'Beverages' },
    { name: 'Juice Pack', price: 7, category: 'Beverages' },
    { name: 'Snack Pack', price: 3, category: 'Snacks' }
];

// function to filter products by category
function filterProducts(category) {
    return products.filter(product => product.category === category);
}

// interactive feature to add product to cart
function interactiveAddToCart() {
    console.log(`Available Products:`);
    products.forEach(product => {
        console.log(`- ${product.name}: $${product.price}`);
    });
    // Simulate adding product to cart
    addToCart(products[0]); // Example: adding first product
}

// Example usage
interactiveAddToCart();
displayCart();