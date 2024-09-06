import TaskManager from "./classes/TaskManager.js";

// Create a new instance of TaskManager
let manager = new TaskManager();

// Function to add a new task
window.addNewTask = function addNewTask() {
  // Get the task description from the input field
  let description = document.getElementById("description").value;

  try {
    // If the description is not empty, add the task and show the updated task list
    if (description) {
      manager.addTask(description);
      showTasks();
    }
  } catch (error) {
    console.log(error); // Log any errors that occur
  }
  // Clear the input field
  document.getElementById("description").value = '';
};

// Function to display the tasks
function showTasks() {
  // Clear the current task lists
  document.getElementById("activeTasks").innerHTML = "";
  document.getElementById("completedTasks").innerHTML = "";

  // Loop through each task in the manager
  for (let task of manager.tasks) {
    // If the task is completed, add it to the completed tasks list
    if (task.completed) {
      document.getElementById("completedTasks").innerHTML += `
        <div>
          <li id="li" class='list-group-item d-inline-block w-50'>
            <del class="text-danger-emphasis">${task.description}</del>
          </li>
          <button onclick="deleteTask(${task.id})" class='btn btn-danger me-1'>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    } else {
      // If the task is not completed, add it to the active tasks list
      document.getElementById("activeTasks").innerHTML += `
        <div>
          <li class='list-group-item d-inline-block w-50'>${task.description}</li>
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


// Initial call to display tasks
showTasks();

// Function to mark a task as completed
window.completeTask = function completeTask(id) {
  manager.completeTask(id);
  // Check if there are any completed tasks to show or hide the reset button
  if (!manager.completeTask) {
    disableResetButton();
  } else {
    showResetButton();
  }
  // Refresh the task list
  showTasks();
};

// Function to show the reset button
function showResetButton() {
  return document.getElementById('buttonRow').innerHTML = `<br><button onclick="resetAll()" id="bu" class="btn btn-danger w-25 my-3 m-auto">Reset All</button>`;
}

// Function to hide the reset button
function disableResetButton() {
  return document.getElementById('bu').style.display = 'none';
}

// Function to delete a task
window.deleteTask = function deleteTask(id) {
  try {
    manager.deleteTask(id);
    // Refresh the task list
    showTasks();
  } catch (error) {
    console.error("An error occurred while deleting the task:", error);
    alert("Failed to delete the task. Please check the console for details.");
  }
};

// Function to update a task's description
window.updateTaskDescription = function updateTaskDescription(id) {
  let idPlusNewDescription = prompt("Please enter the new description");
  if (idPlusNewDescription) {
    manager.updateTaskDescription(id, idPlusNewDescription);
    // Refresh the task list
    showTasks();
  } else if (idPlusNewDescription == '') {
    alert("Error: Please fill in the description");
  }
  // Refresh the task list
  showTasks();
};

// Function to reset all tasks
window.resetAll = function resetAll() {
  disableResetButton();
  document.getElementById("activeTasks").innerHTML = '';
  document.getElementById("completedTasks").innerHTML = '';
  document.getElementById("description").value = '';
  manager.clearTasks();
}
