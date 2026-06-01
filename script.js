// CART

let total = 0;

function addToCart(name, price) {

    const cart =
    document.getElementById("cartItems");

    if (!cart) return;

    if (cart.innerHTML.includes("No items yet")) {
        cart.innerHTML = "";
    }

    let item =
    document.createElement("div");

    item.className = "cart-item";

    item.innerHTML =
    name + " - $" + price;

    cart.appendChild(item);

    total += price;

    const totalBox =
    document.getElementById("cartTotal");

    if (totalBox) {
        totalBox.innerText = total;
    }

}

// CHECKOUT

function checkout() {

    alert(
        "Thank you for your order!"
    );

}

// BUILDER

function calculateBuild() {

    let cpu =
    parseInt(
    document.getElementById("cpu").value
    );

    let gpu =
    parseInt(
    document.getElementById("gpu").value
    );

    let ram =
    parseInt(
    document.getElementById("ram").value
    );

    let storage =
    parseInt(
    document.getElementById("storage").value
    );

    let pcCase =
    parseInt(
    document.getElementById("pcCase").value
    );

    let total =
    cpu +
    gpu +
    ram +
    storage +
    pcCase;

    document.getElementById(
    "totalPrice"
    ).innerText =
    "Total Price: $" + total;

}

// CONTACT

function sendMessage() {

    alert(
        "Message sent successfully!"
    );

}

// LOGIN

function login() {

    alert(
        "Login successful!"
    );

}

// REGISTER

function register() {

    alert(
        "Account created successfully!"
    );

}