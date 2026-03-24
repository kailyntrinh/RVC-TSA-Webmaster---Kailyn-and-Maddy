const resources = [
{
    name: "Middle School Tutoring",
    category: "middle",
    description: "Help younger students to learn to code",
    date: "April 9th, 2026",
    image: "middleschool.jpg",

},

{
    name: "Hour of Code",
    category: "hoc",
    description: "Teach coding basics to all students",
    date: "April 1, 2026",
    image: "hourofcode.jpg",
},

{
    name: "Cypress of Raleigh",
    category: "cypress",
    description: "Help senior citizens with technology",
    date: "March 27th, 2026",
    image: "cypress.jpg",
},

{
    name: "Lower School Helpers",
    category: "lower",
    description: "Help lower schoolers learn the basics of technology",
    date: "April 3, 2026",
    image: "lowerschool.jpg",
},

];

function displayResources(data) {
    const container = document.getElementById("resources");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(r => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <h3>${r.name}</h3>
    <p>${r.description}</p>
    <p>${r.date}</p>
    ${r.image ? `<img src="${r.image}" alt="${r.name}">` : ""}
        `;
        container.appendChild(card);
    });
}


function update() {
    const searchInput = document.getElementById("search");
    const filterInput = document.getElementById("filter");

    if (!searchInput || !filterInput) return;

    const search = searchInput.value.toLowerCase();
    const filter = filterInput.value;

    const filtered = resources.filter(r => {
        return (
            r.name.toLowerCase().includes(search) &&
            (filter === "all" || r.category === filter)
        );
    });
    displayResources(filtered);
}

window.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    const filter = document.getElementById("filter");

    if (search) search.addEventListener("input", update);
    if (filter) filter.addEventListener("change", update);
    displayResources(resources);
});

function toggle(clicked){
    document.querySelectorAll('.image').forEach(img => {
        if (img !== clicked) {
        img.classList.remove('active');
        }
    });
clicked.classList.toggle('active');
}
function goToPage(page) {
    window.location.href = page;
}

