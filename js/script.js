let cart =[];
const cartItemsDiv = document.querySelector(".cart-items");
const cartTotalSpan = document.querySelector(".cart-total");
const cartButton = document.querySelector(".cart-button");
const cartWindow = document.querySelector(".cart");
cartButton.addEventListener("click", function() {
    cartWindow.classList.add("open");
});
const closeButton = document.querySelector(".close-cart");
closeButton.addEventListener("click", function() {
    cartWindow.classList.remove("open");
});
function addToCart(name, price) {
    cart.push({ name: name, price: price, quantity: 1 });
    updateCart();
}
function updateCart() {
    let html = "";
    for (let i = 0; i < cart.length; i++) {
        html += "<p>" + cart[i].name + " — " + cart[i].quantity + " шт.</p>";
    }
    cartItemsDiv.innerHTML = html;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    cartTotalSpan.textContent = total;
}