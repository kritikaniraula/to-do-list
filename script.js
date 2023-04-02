document.querySelector("#add").addEventListener("click", function () {
  const inputField = document.querySelector("#container .input");
  const inputValue = inputField.value.trim();

  if (!inputValue) {
    alert("Please enter a task!");
    return;
  }

  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
      <span id="taskname">${inputValue}</span>
      <button class="delete"><i class="fa-solid fa-trash fa-3x"></i></button>
    `;
  document.querySelector("#tasks").appendChild(taskElement);

  inputField.value = "";

  const deleteButton = taskElement.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    taskElement.remove();
  });
});
