let burger = document.getElementById("menu");
let nav = document.getElementById("Nav");
let first = document.querySelector("#menu #first");
let second = document.querySelector("#menu #second");
let third = document.querySelector("#menu #third");

function toggleMenu(forceClose) {
    const open = forceClose ? false : !nav.classList.contains("show-ul");
    first.classList.toggle("first", open);
    second.classList.toggle("second", open);
    third.classList.toggle("third", open);
    nav.classList.toggle("show-ul", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

burger.addEventListener("click", () => toggleMenu());

burger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
    }
});

// close the menu after choosing a link, or pressing Escape
nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => toggleMenu(true))
);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu(true);
});
