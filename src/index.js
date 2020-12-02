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




  let input = document.getElementById("new-task-description").value
  const ul = document.getElementById("tasks")
  let li = document.createElement("li")
  li.innerText = input
  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    ul.appendChild(li);
    event.preventDefault();
  })
});
