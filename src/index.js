document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page reload

      const input = document.querySelector("#new-task-description");
      const task = document.createElement("li");
      task.textContent = input.value;

      taskList.appendChild(task);
      input.value = ""; // Clear input field
  });
});


