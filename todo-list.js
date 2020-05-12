let taskList = []
// const taskName = []
// let taskCounter = 0;
class Task  {
    constructor(name, dueDate, isDone) {
        this.taskId = Date.now();
        this.name= name;
        this.dueDate=dueDate;
        this.isDone = isDone;
    }
    tostring() {
        // const currentIndex = taskList.length;
        let htmlText= '<li class="task"><div>'
        htmlText += this.name
        htmlText +=", " + this.dueDate + "/" + this.dueDate.getMonth();
        htmlText += '<input type="checkbox" name="isDone" id="isDone">'
        htmlText += '<button onclick ="deleteTask('
        htmlText +=this.taskId;
        htmlText += ')">Delete</button>'
        htmlText+="</div></li>";
        return htmlText;
        }
}
// const taskList = []
function deleteTask(taskId) {
    taskList=taskList.filter(
    (t) => {if(t.taskId != taskId) return t;}
    );
    render()
    console.log(taskList);

}
function createTask() {
    const taskName=document.getElementById("taskName").value;
    // console.log(taskNmae.value);
    addTask(new Task(taskName, new Date(), false));
}

function render() {
    const listUI=document.getElementById("todo")
    listUI.innerHTML="";
    if(taskList.length == 0) listUI.innerHTML="No tasks todo"
    taskList.forEach((task) => {
        listUI.innerHTML += task.tostring();
    })
}
function addTask(t) {
    taskList.push(t)
    render();
    // const list =document.getElementById("todo")
    // list.innerHTML += t.tostring

}
function init() {
    console.log("init called");
    task = new Task("Session", new Date("June 11, 2020"), false);
    addTask(task)
    console.log(task)
}
init();