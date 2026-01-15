console.log("script running");

let totalInCent = 0;;

const popcornbtn = document.querySelector("#popcorn");
const sodabtn = document.querySelector("#soda");
const candybtn = document.querySelector("#candy");
const nachosbtn = document.querySelector("#nachos");
const icecreambtn = document.querySelector("#icecream");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

console.log(
    popcornbtn,
    sodabtn,
    candybtn,
    nachosbtn,
    icecreambtn,
    shoppingCart,
    totalSpan
);

const updateTotal = () => {
    totalSpan.innerHTML = (totalInCent / 100).toFixed(2);
};
const addPopcorn = () => {
    shoppingCart.innerHTML += `<p>🍿 Popcorn</p>`;
    totalInCent += 450;
    updateTotal();
}
popcornbtn.addEventListener("click", addPopcorn);

const addSoda = () => {
    shoppingCart.innerHTML += `<p>🥤 Soda</p>`;
    totalInCent += 250;
    updateTotal();
}
sodabtn.addEventListener("click", addSoda);

const addCandy = () => {
    shoppingCart.innerHTML += `<p>🍬 Candy</p>`;
    totalInCent += 175;
    updateTotal();
}
candybtn.addEventListener("click", addCandy);

const addNachos = () => {
    shoppingCart.innerHTML += `<p>🧀 Nachos</p>`;
    totalInCent += 500;
    updateTotal();
}
nachosbtn.addEventListener("click", addNachos);

const addicecream = () => {
    shoppingCart.innerHTML += `<p>🍦 Ice cream</p>`;
    totalInCent += 325;
    updateTotal();
};
icecreambtn.addEventListener("click", addicecream);