const bannerDiv = document.getElementById("banner");

const today = new Date().getDay();
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const todaysrt = week[today];

if (todaysrt === "Monday" || todaysrt === "Tuesday" || todaysrt ==="Wednesday") {
    const bannerMessage = document.createElement("p");
    const bannerClose = document.createElement("button");

    bannerMessage.textContent = "You are invited to attend to our Puebla Chamber meet and greet on Wednesday at 7:00 pm.";
    bannerClose.innerText = "✖";

    bannerDiv.appendChild(bannerMessage);
    bannerDiv.appendChild(bannerClose);

    bannerClose.addEventListener("click", ()=>{
        bannerDiv.remove();
    });
}