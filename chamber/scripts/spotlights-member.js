const url = "https://carlosyaelcervantesrojas.github.io/wdd230/chamber/data/members.json";
const divMembers = document.getElementById("members");


async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMerbers(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayMerbers(members) {
    const spotlightsMember = members.filter((member) => member.level === "Gold" || member.level === "Silver");
    const randomMembers = spotlightsMember.sort(() => 0.5 - Math.random()).slice(0,3);

    randomMembers.forEach(member => {
        const article = document.createElement("article");
        const picture = document.createElement("picture");
        const img = document.createElement("img");

        img.src = member.image;
        img.alt = member.name;

        picture.appendChild(img);

        article.appendChild(picture)

        divMembers.appendChild(article);
    });
}

getMembers();