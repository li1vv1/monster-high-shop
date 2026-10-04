let cart = [];

const cartItemsDiv = document.querySelector(".cart-items");
const cartTotalSpan = document.querySelector(".cart-total");
const cartButton = document.querySelector(".cart-button");
const cartWindow = document.querySelector(".cart");
const closeButton = document.querySelector(".close-cart");

cartButton.addEventListener("click", function() {
    cartWindow.classList.add("open");
});

closeButton.addEventListener("click", function() {
    cartWindow.classList.remove("open");
});

function addToCart(name, price) {
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].quantity = cart[i].quantity + 1;
            found = true;
        }
    }
    if (found === false) {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCart();
}

function increaseQuantity(index) {
    cart[index].quantity = cart[index].quantity + 1;
    updateCart();
}

function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity = cart[index].quantity - 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    let html = "";
    for (let i = 0; i < cart.length; i++) {
        html += "<p>" + cart[i].name + " — " + cart[i].quantity + " шт. ";
        html += "<button onclick='increaseQuantity(" + i + ")'>+</button> ";
        html += "<button onclick='removeFromCart(" + i + ")'>-</button></p>";
    }
    cartItemsDiv.innerHTML = html;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    cartTotalSpan.textContent = total;
}