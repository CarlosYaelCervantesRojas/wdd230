const darkButton = document.getElementById("darkIcon");
const main = document.querySelector("main");
const iframe = document.querySelector("iframe");

darkButton.addEventListener("click", () => {
    main.classList.toggle("dark")
    iframe.classList.toggle("dark")
});