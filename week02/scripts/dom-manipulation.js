const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener('click', () => {
    const value = input.value;
    if (value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
        input.focus();

    } else {
        input.removeAttribute("placeHolder");
        input.setAttribute("placeHolder", "Type a book and chapter");
        input.focus();
    }
});