const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");
const directory = document.getElementById("directory-cards");

gridButton.addEventListener("click", () => {
    gridButton.classList.add("view-active");
    listButton.classList.remove("view-active");
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listButton.addEventListener("click", () => {
    listButton.classList.add("view-active");
    gridButton.classList.remove("view-active");
    directory.classList.add("list");
    directory.classList.remove("grid");
});
