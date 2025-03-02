if (localStorage.getItem('cartItems')) {
    let items = JSON.parse(localStorage.cartItems);
    for (let i = 0; i < items.length; i++) {
        document.getElementById('products').innerHTML += `
                <div class="product">
                    <img src="../`+items[i]+`/images/img1.png">
                    <p>`+items[i]+`</p>
                </div>
            `;
    }
}