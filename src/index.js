document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.getElementById("new-task-description").value
  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    document.getElementById("tasks").appendChild(input);
  })
});
