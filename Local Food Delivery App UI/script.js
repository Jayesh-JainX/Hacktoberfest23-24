// script.js

document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-button");

    orderButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const menuItem = this.closest(".menu-item");
            const itemName = menuItem.querySelector("h3").textContent;
            const itemPrice = menuItem.querySelector(".price").textContent;
            alert(`You've ordered ${itemName} for ${itemPrice}. Enjoy your meal!`);
        });
    });
});
