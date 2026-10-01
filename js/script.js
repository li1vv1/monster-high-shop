const cartButton = document.querySelector(".cart-button");
const cartWindow = document.querySelector(".cart");
cartButton.addEventListener("click", function() {
    cartWindow.classList.add("open");
});