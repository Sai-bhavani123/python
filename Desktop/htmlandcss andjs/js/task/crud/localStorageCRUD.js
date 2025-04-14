let btn = document.querySelector("button");
let inputTag = document.getElementById("task")
let tasksContainer = document.getElementById("tasksContainer")

window.addEventListener("DOMContentLoaded",()=>{
    const allTasks=JSON.parse(localStorage.getItem("allTasks"))
    console.log(allTasks)
    allTasks.forEach((task)=>{
        console.log(task)
        let divTag=document.createElement("div")
        divTag.innerHTML=`
        <span>${task}</span>
        <button>edit</button>
        <button id="deleteBtn">delete</button>
        `
        tasksContainer.append(divTag)
    })
})
btn.addEventListener("click", () => {
    let inputTagText = inputTag.value.trim();

    if (inputTagText === "") {
        return alert("pls enter something")
    }
    let divTag = document.createElement("div");
    divTag.innerHTML = `
    <span>${inputTagText}</span>
    <button>edit</button>
    <button id="deleteBtn">delete</button>
    `
    tasksContainer.append(divTag)
    let allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    allTasks.push(inputTagText)
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
    const deleteBtn = divTag.querySelector("#deleteBtn")
    deleteBtn.addEventListener("click", () => {
        const confirmation = confirm("are you sure to delete the details?")
        if (confirmation) {
            divTag.remove()
            alert("successfully deleted!!!")
        }
    })
})