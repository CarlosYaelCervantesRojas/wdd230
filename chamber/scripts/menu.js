const hamburguerHelement = document.getElementById("hamburgerButton");
const nav = document.getElementById("menuLinks");

hamburguerHelement.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburguerHelement.classList.toggle("open");
});