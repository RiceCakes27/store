fetch('../prices.json').then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => loadCart(data))
.catch(error => console.error('Failed to fetch data:', error));

var total = 0;

function loadCart(data) {
    if (localStorage.getItem('cartItems')) {
        let items = JSON.parse(localStorage.cartItems);
        for (let i = 0; i < items.length; i++) {
            document.getElementById('products').innerHTML += `
                    <div class="product">
                        <img src="../`+items[i]+`/images/img1.png">
                        <p>`+items[i]+`</p>
                        <h3>$`+data[0][items[i]]+`</h3>
                        <h3>`+localStorage.getItem(items[i])+` in cart</h3>
                    </div>
                `;
            total = +data[0][items[i]]*localStorage.getItem(items[i]) + total;
        }
        document.getElementById('products').innerHTML += `
                <h1>total: `+total+`</h1>
            `;
    }
}
