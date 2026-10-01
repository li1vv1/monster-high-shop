let cart =[];
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
    console.log(cart);
}