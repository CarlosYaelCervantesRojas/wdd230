const darkButton = document.getElementById("darkIcon");
const main = document.querySelector("main");

darkButton.addEventListener("click", () => {
    main.classList.toggle("dark")
});