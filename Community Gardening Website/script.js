// script.js
document.addEventListener("DOMContentLoaded", function () {
    const eventDate = new Date(2023, 10, 15, 10, 0, 0).getTime();

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Event has started!";
        }
    }, 1000);
});
