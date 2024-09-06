import Task from "./Task.js";

class TaskManager {
  constructor() {
    // Load tasks from local storage or initialize an empty array if none exist
    this.tasks = this.loadTasks() || [];
  }

  // Method to add a new task
  addTask(description) {
    this.tasks.push(new Task(description));
    this.saveTasks(); // Save tasks to local storage
  }

  // Method to delete a task by its ID
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.saveTasks(); // Save tasks to local storage
  }

  // Method to update a task's description by its ID
  updateTaskDescription(id, newDesc) {
    let task = this.tasks.find(task => task.id === id);
    if (task) {
      task.description = newDesc;
      this.saveTasks(); // Save tasks to local storage
    }
  }

  // Method to mark a task as completed by its ID
  completeTask(id) {
    let task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
      this.saveTasks(); // Save tasks to local storage
    }
  }

  // Method to save tasks to local storage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // Method to load tasks from local storage
  loadTasks() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      let tasks = JSON.parse(storedTasks);
      // Map the loaded tasks to Task instances
      return tasks.map(task => new Task(task.description, task.id, task.completed));
    } else {
      return [];
    }
  }

  // Method to clear all tasks
  clearTasks() {
    this.tasks = [];
    this.saveTasks(); // Save the empty task list to local storage
  }
}

export default TaskManager;
