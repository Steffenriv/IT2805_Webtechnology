let tasks =  [];
var total = 0;
var done = 0;

document.getElementById("submit").addEventListener("click", addTask);

function addTask() {
    total++;
    //Task 2:

    //variables:
    let task = document.getElementById('task').value;
    let list = document.getElementById('taskList');
    let type = document.createElement('li');
    let newNode = document.createTextNode(task);
    let inputElement = document.createElement('input');
    
    //Append into list:
    inputElement.type = 'checkbox';
    inputElement.name = 'checkbox';
    type.appendChild(newNode);
    type.appendChild(inputElement);
    list.insertBefore(type, list.firstChild);

    //Task 3:
    let newTask = {};
    newTask.Task = task;
    newTask.Time = new Date();
    console.log(tasks);

    //Task 5:

    checking();
}
//Got inspired by code from stack overflow user: thordarson
//date required code: 01.11.22
//date comment made: jan 27 2013
//URL: https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
//First comment
function checking() {
    var checkbox = document.querySelector("input[name=checkbox]");

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentNode.style.textDecoration = 'line-through';
            done++;
        } 
        else {
            this.parentNode.style.textDecoration = 'none';
        }
    });
    document.getElementById("taskOutput").innerHTML = done + " / " + total;
}