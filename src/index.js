document.addEventListener("DOMContentLoaded", () => {

let input = document.getElementById("new-task-description").value
const taskUl = document.getElementById("tasks")
let li = document.createElement("li")

document.querySelector("input[type=submit]").addEventListener("click", function(event){
  li.textContent = input
  taskUl.appendChild(li);
  event.preventDefault()
});
});
  // your code here
