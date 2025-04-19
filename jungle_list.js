function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    listItem.classList.toggle("completed");
  });

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  const actions = document.createElement("div");
  actions.className = "task-actions";
  actions.appendChild(removeBtn);

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(actions);

  taskList.appendChild(listItem);

  input.value = "";
}
