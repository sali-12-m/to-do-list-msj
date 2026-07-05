const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const errorMsg=document.getElementById("errorMsg");
const remainingCount=document.getElementById("remainingCount");

let tasks=[];

function updateCounter() {
    let remaining = 0;

    tasks.forEach(function (task) {
        if (!task.done) {
            remaining++;
        }
    });

    remainingCount.textContent = remaining;
}
function addTask(){
    if(taskInput.value.trim() === ''){
        errorMsg.textContent="Please type a task first";
        return;
    }

        errorMsg.textContent="";
        tasks.push({
        text: taskInput.value.trim(),
        done: false
    });

    taskInput.value = "";
    displayTasks();
}
function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {

    let li = document.createElement("li");
    li.className = "task-item";

    if (task.done) {
        li.classList.add("done"); 
}

        let span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        let doneBtn=document.createElement("button");
        doneBtn.className="done-btn";
        doneBtn.textContent="Done";

        doneBtn.addEventListener("click",function(){
            li.classList.toggle("done");
            tasks[index].done = li.classList.contains("done");

            updateCounter();
        });

        let deleteBtn=document.createElement("button");
        deleteBtn.className="delete-btn";
        deleteBtn.textContent="Delete";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click",function(){
            tasks.splice(index, 1);
            displayTasks();
        });
        li.appendChild(span);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

    });
     updateCounter(); 
}


let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",addTask);
displayTasks();
const clearBtn=document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    tasks = [];
    displayTasks();
});

const colorCircles = document.querySelectorAll(".color-circle");
colorCircles.forEach(function (circle) {
    circle.addEventListener("click", function () {
        document.body.style.backgroundColor = circle.dataset.color;

        colorCircles.forEach(function (c) {
            c.classList.remove("active");
        });
        circle.classList.add("active");
    });
});