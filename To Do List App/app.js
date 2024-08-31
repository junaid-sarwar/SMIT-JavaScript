const taskArray = [];
let editIndex = -1;

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        if (editIndex === -1) {
            taskArray.push(taskValue);
        } else {
            taskArray[editIndex] = taskValue;
            editIndex = -1;
        }
        displayTasks();
    }

    taskInput.value = "";
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (let i = 0; i < taskArray.length; i++) {
        const listItem = document.createElement("li");

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");

        const taskText = document.createElement("span");
        taskText.textContent = taskArray[i];
        taskText.classList.add("task-text");

        taskDiv.addEventListener("click", function() {
            taskDiv.classList.toggle("completed")
            taskText.classList.toggle("completed");
        });

        taskDiv.appendChild(taskText);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = function() {
            editTask(i);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("del-btn");
        deleteButton.onclick = function() {
            delTask(i);
        };

        listItem.appendChild(taskDiv);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    }
}


function editTask(i) {
    const taskInput = document.getElementById("task-input");
    taskInput.value = taskArray[i];
    editIndex = i;
}

function delTask(i) {
    taskArray.splice(i, 1);
    displayTasks();
}
