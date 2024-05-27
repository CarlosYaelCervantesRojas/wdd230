const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

let prophets = [];

const nofilter = document.querySelector("#nofilter");
const utahBorn = document.querySelector("#utah");
const nonUS = document.querySelector("#non-us");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    prophets = data.prophets;

    displayProphets(prophets);
}

nofilter.addEventListener("click", () => {
    reset();
    
    displayProphets(prophets);
});

utahBorn.addEventListener("click", () => {
    const prophetsBornUtah = prophets.filter(prophet => prophet.birthplace === "Utah");
    reset();

    displayProphets(prophetsBornUtah);
});

nonUS.addEventListener("click", () => {
    const prophetsNonUSBorn = prophets.filter(prophet => prophet.birthplace === "England");
    reset();

    displayProphets(prophetsNonUSBorn);
});

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {

        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateBirth = document.createElement("p");
        const placeBirth = document.createElement("p");
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.src = prophet.imageurl;
        portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order}${order = prophet.otder === 2 ? "nd" : prophet.order === 3 ? "rd": "th"} Latter-day President`;
        portrait.loading = "lazy";
        portrait.setAttribute("width", "340")
        portrait.setAttribute("heigth", "440")

        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

function reset() {
    cards.innerHTML = "";
}

getProphetData();