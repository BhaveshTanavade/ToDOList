
function addTask() {
    var taskInput = document.getElementById("taskInput");
    // console.log(taskInput)
    var taskText = taskInput.value.trim();
    // console.log(taskText)
    // creating alert window for no text as ipnput but hitting the add task button
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var tasksContainer = document.getElementById("tasks");
    // console.log(tasksContainer)
    // to create a new individiual div inside for every tasks  
    var taskElement = document.createElement("div");
    // console.log(taskElement)
    // will create a class for the div with name "task"
    taskElement.classList.add("task");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // console.log(checkbox)
    checkbox.addEventListener("change", function() {
        taskElement.classList.toggle("completed", checkbox.checked);
        updateTaskCount();
    });

    var taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        tasksContainer.removeChild(taskElement);
        updateTaskCount();
    });

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(deleteButton);
    // console.log(taskElement.childElementCount)
    tasksContainer.appendChild(taskElement);
    //Cange the value again to null for alert window to work
    taskInput.value = "";
    console.log(tasksContainer.childElementCount)

    updateTaskCount();
}

function updateTaskCount() {
    var taskCountElement = document.getElementById("task-count");
    var tasksContainer = document.getElementById("tasks");
    var totalTasks = tasksContainer.childElementCount;
    taskCountElement.textContent = "Tasks to do: " + totalTasks;
}

