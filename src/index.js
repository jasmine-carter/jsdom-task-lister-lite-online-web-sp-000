document.addEventListener("DOMContentLoaded", () => {

let input = document.getElementById("new-task-description").value
const taskUl = document.getElementById("tasks")
let li = document.createElement("li")

function logSubmit(event) {
    log.textContent = `test`;
        event.preventDefault();
}
const form = document.getElementbyId('form');
const log = document.getElementbyId('log');
form.addEventListener('submit', logSubmit);
});
  // your code here
