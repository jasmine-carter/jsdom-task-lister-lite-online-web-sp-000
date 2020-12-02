document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.getElementById("new-task-description").value
  let ul = document.getElementById("tasks")
  let li = document.createElement("li")
  li.innerText = input
  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    ul.appendChild(li);
    event.preventDefault();
  })
});
