// Sample JavaScript to add resources dynamically
const resources = [
    {
        title: "Mental Health Hotline",
        description: "A 24/7 helpline for immediate support.",
        link: "https://example.com/hotline",
    },
    {
        title: "Online Support Groups",
        description: "Join our online community for shared experiences.",
        link: "https://example.com/support-groups",
    },
    // Add more resource objects as needed
];

const resourcesContainer = document.getElementById("resources");

resources.forEach((resource) => {
    const resourceCard = document.createElement("div");
    resourceCard.classList.add("resource-card");

    resourceCard.innerHTML = `
        <h2>${resource.title}</h2>
        <p>${resource.description}</p>
        <a href="${resource.link}" target="_blank">Learn more</a>
    `;

    resourcesContainer.appendChild(resourceCard);
});
