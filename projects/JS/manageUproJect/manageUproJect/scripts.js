import TaskManager from "./classes/TaskManager.js";

let manager = new TaskManager();

window.addNewTask = function addNewTask() {

  let description = document.getElementById("description").value;

  try {
    if (description) {
      manager.addTask(description);
      showTasks();
    }
  } catch (error) {
    console.log(error);
  }
  document.getElementById("description").value = ''
};

function showTasks() {
  document.getElementById("activeTasks").innerHTML = "";
  document.getElementById("completedTasks").innerHTML = "";

  for (let task of manager.tasks) {

    if (task.completed) {

      document.getElementById(
        "completedTasks"
      ).innerHTML += `<div><li id="li" class=' list-group-item d-inline-block w-50'><del class="text-danger-emphasis">${task.description}</del></li></button><button onclick="deleteTask(${task.id})" class='btn btn-danger me-1'> <i class="fa-solid fa-trash"></i></button></div>
    `;

    } else {
      document.getElementById("activeTasks").innerHTML += `
      <div>
        <li class=' list-group-item d-inline-block w-50'> ${task.description} </li>
        <button class='btn btn-success me-1' onclick='completeTask(${task.id})'>
          <i class="fa-solid fa-check"></i>
        </button>
        <button class='btn btn-primary me-1' onclick="updateTaskDescription(${task.id})">
          <i class="text-light fa-sharp fa-solid fa-pencil"></i>
        </button>
        <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
`;
    }
  }
}

showTasks();

window.completeTask = function completeTask(id) {
  manager.completeTask(id);
  if (!manager.completeTask) {
    disableResetButton()
  } else {
    showResetButton()
  }
  showTasks();
};

function showResetButton() {
  return document.getElementById('buttonRow').innerHTML = `<br><button onclick="resetAll()" id="bu" class="btn btn-danger w-25 my-3 m-auto">Reset All</button>`
}



function disableResetButton() {
  return document.getElementById('bu').style.display = 'none'
}

window.deleteTask = function deleteTask(id) {
  try {
    manager.deleteTask(id);
    showTasks();
  } catch (error) {
    console.error("An error while deleting the task:", error);
    alert("Failed to delete the task. Please check the console for details.");
  }
};

window.updateTaskDescription = function updateTaskDescription(id) {
  let idPlusNewDescription = prompt("Please Eneter the new Description")
  if (idPlusNewDescription) {
    manager.updateTaskDescription(id, idPlusNewDescription);
    showTasks();
  } else if (idPlusNewDescription == '') {
    alert("err Please fill the description")
  }
  showTasks();
};


window.resetAll = function resetAll() {
  disableResetButton()
  document.getElementById("activeTasks").innerHTML = ''
  document.getElementById("completedTasks").innerHTML = ''
  document.getElementById("description").value = ''
  manager.clearTasks()
}