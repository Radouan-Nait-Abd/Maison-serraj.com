let burger = document.getElementById("menu");
let nav = document.getElementById("Nav");
let first = document.querySelector("#menu #first");
let second = document.querySelector("#menu #second");
let third = document.querySelector("#menu #third");

burger.onclick = () => {
    first.classList.toggle("first");
    second.classList.toggle("second");
    third.classList.toggle("third");
};

console.log(first);

burger.addEventListener("click", () => {
    nav.classList.toggle("show-ul");
});
