if (!localStorage.getItem("cartNumItems")) {
    localStorage.setItem("cartNumItems", 0);
}
let cartNumItems = localStorage.getItem("cartNumItems");
document.getElementById('tspan').textContent = cartNumItems;

let items = [];
if (localStorage.getItem('cartItems')) {
    items = JSON.parse(localStorage.cartItems);
}

function isDupe(item) {
    for (let i = 0; i < items.length; i++) {
        if (item == items[i]) {
            return true
        }
    }
}

function addToCart(item) {
    if (!isDupe(item)) {
        items.push(item);
        localStorage.setItem(item, 1);
    } else {
        var idk = localStorage.getItem(item);
        idk++;
        localStorage.setItem(item, idk);
    }
    cartNumItems++;
    console.log(item+" item added to cart");
    localStorage.setItem("cartItems", JSON.stringify(items));
    localStorage.setItem("cartNumItems", cartNumItems);
    document.getElementById('tspan').textContent = cartNumItems;
}