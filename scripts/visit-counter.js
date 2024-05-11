const p = document.getElementById("visit-count");
let numberOfVisits = getNumberOfVisits() || 0;

function getNumberOfVisits() {
    return Number(localStorage.getItem("NumberOfVisits"));
}

function setVisitsVariable() {
    localStorage.setItem("NumberOfVisits", numberOfVisits);
}

if (numberOfVisits !== 0) {
    p.innerText = `Visit Count: ${numberOfVisits}`;
} else {
    p.innerText = "Welcome! This is your first time here!"
}

numberOfVisits++;

setVisitsVariable();