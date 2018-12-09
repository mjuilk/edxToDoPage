var addButton = document.getElementById("add");
var taskInput = document.getElementById("input");
var taskList = document.getElementById("taskList");
var clearButton = document.getElementById("clear");

addButton.addEventListener("click", function(){
    var task = taskInput.value;
    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        taskInput.value = "";
        var removeButton = document.createElement("BUTTON");
        removeButton.innerHTML = "DONE";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty!");
    }
}
);

clearButton.addEventListener("click", function(){
    taskList.innerHTML = "";
}
);

function removeTask(e){
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
}