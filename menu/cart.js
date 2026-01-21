function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = cart.find(p => p.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

