let cartItems = 1;

function addToCart(item) {
    console.log(item+" item added to cart");
    document.getElementById('tspan').textContent = cartItems++;
}