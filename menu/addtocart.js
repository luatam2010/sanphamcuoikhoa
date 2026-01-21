let qty = 1;

document.querySelectorAll("input").forEach(i => {
    i.addEventListener("change", calc);
});

function changeQty(n) {
    qty += n;
    if (qty < 1) qty = 1;
    document.getElementById("qty").innerText = qty;
    calc();
}

function calc() {
    let size = document.querySelector("input[name='size']:checked").value;
    let topping = 0;

    document.querySelectorAll("input[type='checkbox']:checked")
        .forEach(i => topping += +i.value);

    let total = (size * 1 + topping) * qty;
    document.getElementById("total").innerText =
        total.toLocaleString("vi-VN");
}

function addCart() {
    alert("Đã thêm vào giỏ hàng!");
    window.location.href = "menu.html";
}

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
// -------------------
// let qty = 1;

// document.querySelectorAll("input").forEach(i => {
//     i.addEventListener("change", calc);
// });

// function changeQty(n) {
//     qty += n;
//     if (qty < 1) qty = 1;
//     document.getElementById("qty").innerText = qty;
//     calc();
// }

// function calc() {
//     let size = document.querySelector("input[name='size']:checked").value;
//     let topping = 0;

//     document.querySelectorAll("input[type='checkbox']:checked")
//         .forEach(i => topping += +i.value);

//     let total = (size * 1 + topping) * qty;
//     document.getElementById("total").innerText =
//         total.toLocaleString("vi-VN");
// }

// function addCart() {
//     alert("Đã thêm vào giỏ hàng!");
//     window.close();
// }