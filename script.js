let cart = [];
let total = 0;

const popcornButton = document.querySelector('#popcorn');
const sodaButton = document.querySelector('#soda');
const candyButton = document.querySelector('#candy');
const nachosButton = document.querySelector('#nachos');
const icecreamButton = document.querySelector('#icecream');

const shoppingCart = document.getElementById('shopping-cart');
const totalSpan = document.getElementById('total-span');

const UpdateDisplayTotal = () => {
    totalSpan.textContent = total/100;
}
const addPopcorn = () => {
    shoppingCart.innerHTML +=
    total += 450;
    UpdateDisplayTotal();
}
const addSoda = () => {
    shoppingCart.innerHTML +=
    total += 250;
    UpdateDisplayTotal();
}
const addCandy = () => {
    shoppingCart.innerHTML +=
    total += 175;
    UpdateDisplayTotal();
}
const addNachos = () => {
    shoppingCart.innerHTML +=
    total += 500;
    UpdateDisplayTotal();
}
const addIcecream = () => {
    shoppingCart.innerHTML +=
    total += 325;
    UpdateDisplayTotal();
}

popcornButton.addEventListener("click",addPopcorn);
sodaButton.addEventListener("click", addSoda);
candyButton.addEventListener("click",addCandy);
nachosButton.addEventListener("click",addNachos);
icecreamButton.addEventListener("click", addIcecream);