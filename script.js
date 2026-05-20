let input = document.getElementById("inputtext");
let button = document.getElementById("addbtn");
let list = document.getElementById("list");

let tasks = [];
let savedTask = localStorage.getItem("task");
if (savedTask) {
    tasks = JSON.parse(savedTask);
}



function createTask(task) {

    let li = document.createElement("li");
    li.textContent = task;

    let completebtn = document.createElement("button");
    completebtn.textContent = "complete";
    completebtn.classList.add("complete-btn");

    completebtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    // let deletebtn = document.createElement("button");
    //
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Erase";
    deletebtn.classList.add("delete-btn");
    deletebtn.addEventListener("click", () => {
        tasks = tasks.filter((t) => t !== task);
        localStorage.setItem("task", JSON.stringify(tasks));
        li.remove();
    })

    li.appendChild(completebtn);
    li.appendChild(deletebtn);
    list.appendChild(li);

}
tasks.forEach((task) => {

    createTask(task);
});

button.addEventListener("click", () => {
    let task = input.value;
    if (task === "") {
        return;
    }
    tasks.push(task);

    localStorage.setItem("task",
        JSON.stringify(tasks));
    createTask(task);
    input.value = "";


});
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});
