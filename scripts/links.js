const ulLinks = document.getElementById("week-links");

const baseURL = "https://carlosyaelcervantesrojas.github.io/wdd230/";
const linksURL = "https://carlosyaelcervantesrojas.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks({weeks}) {
    weeks.forEach(week => {

        const li = document.createElement("li");
        const weekNumber = week.week;

        let node = `${weekNumber}: `;

        week.links.forEach(link => {
            node += `<a href="${link.url}" target="_blank">${link.title}</a> | `;
        });

        const lenght = node.length;

        const html = node.slice(0, lenght - 3)

        li.innerHTML = html;

        ulLinks.appendChild(li);
    });
}

getLinks();