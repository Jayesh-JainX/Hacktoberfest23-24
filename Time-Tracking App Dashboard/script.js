const taskNameInput = document.getElementById("taskName");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const timerDisplay = document.getElementById("timer");
const tasksList = document.getElementById("tasks");

let startTime;
let interval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
    if (!taskNameInput.value) {
        alert("Please enter a task name.");
        return;
    }

    startTime = Date.now();

    interval = setInterval(updateTimer, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    if (startTime) {
        const endTime = Date.now();
        const elapsedSeconds = Math.floor((endTime - startTime) / 1000);

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskNameInput.value} - ${formatTime(elapsedSeconds)}
            <button onclick="removeTask(this)">Delete</button>
        `;
        tasksList.appendChild(taskItem);

        taskNameInput.value = "";

        clearInterval(interval);

        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);

    timerDisplay.textContent = formatTime(elapsedSeconds);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
