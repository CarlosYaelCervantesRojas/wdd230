const button = document.getElementById("hamburger");
const menu = document.querySelector(".menuLinks");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
    button.classList.toggle("open")
});