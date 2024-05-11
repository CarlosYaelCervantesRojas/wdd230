const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(item => {displayList(item)});

button.addEventListener('click', () => {
    const value = input.value;

    if (value != '') {
        displayList(value);
        chaptersArray.push(value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delte");

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    input.value = "";
    input.focus();

    // } else {
        
    //     input.removeAttribute("placeHolder");
    //     input.setAttribute("placeHolder", "Type a book and chapter");
    //     input.focus();
    // }
}

function setChapterList() {
    localStorage.setItem("myBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    setChapterList();
}