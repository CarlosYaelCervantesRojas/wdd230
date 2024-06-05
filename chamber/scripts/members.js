const url = "https://carlosyaelcervantesrojas.github.io/wdd230/chamber/data/members.json";
const members = document.querySelector("#directory-cards");

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.log(error);
    }
}

function displayMembers(companies) {

    companies.forEach(company => {
        const article = document.createElement("article");
        const title = document.createElement("h3");
        const picture = document.createElement("picture");
        const img = document.createElement("img");
        const addres = document.createElement("address");
        const phone = document.createElement("span");
        const link = document.createElement("a");
        const level = document.createElement("p");

        title.textContent = company.name;
        img.src = company.image;
        img.alt = company.name;
        img.loading = "lazy";
        addres.textContent = company.addres;
        phone.textContent = company.phone;
        link.href = company.url;
        link.target = "_blank"
        link.textContent = company.url;
        level.textContent = company.level;

        picture.appendChild(img);

        article.appendChild(title);
        article.appendChild(picture);
        article.appendChild(addres);
        article.appendChild(phone);
        article.appendChild(link);
        article.appendChild(level);

        members.appendChild(article);
    });
}

getMembers();