const inputContainer = document.querySelector(".inputField input"); //For Input Field
const addBtn = document.querySelector(".inputField button"); // For Input Button
const todoList = document.querySelector(".todoList"); // For List Of Tasks
const deleteAllBtn = document.querySelector(".footer button"); // For Delete All Button

showTask() // To show the number of tasks present

inputContainer.addEventListener("keydown", function(event){
    if (event.keyCode === 13 && inputContainer.value != "") {
        let userData = inputContainer.value;
        let getLocalStorage = localStorage.getItem("New Todo");
        if(getLocalStorage == null) {
        list = [];
    }
        else {
        list = JSON.parse(getLocalStorage); 
        // Here parse is used to convert JSON string form into JavaScript objects.
    }
        list.push(userData); // used to push the data inside teh localStorage
        localStorage.setItem("New Todo" , JSON.stringify(list)); 
        // It converts JavaScript object to JSON string
        showTask(); 
    }
});

// To add data to the local storage 
addBtn.onclick = () => {
    if (inputContainer.value == "") {
        alert("Please add a task");
    }
    else {
        let userData = inputContainer.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    
    if(getLocalStorage == null) {
        list = [];
        list.push(userData); // used to push the data inside teh localStorage
    localStorage.setItem("New Todo" , JSON.stringify(list)); 
    // It converts JavaScript object to JSON string
    }
    else {
        list = JSON.parse(getLocalStorage); 
        // Here parse is used to convert JSON string form into JavaScript objects.
        list.push(userData); // used to push the data inside teh localStorage
    localStorage.setItem("New Todo" , JSON.stringify(list)); // It converts JavaScript object to JSON string
    }
    showTask();
    }
}


// This is created and used everywhere so that after every operations the local storage will be updated and viewed
function showTask() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        list = [];
    }
    else {
        list = JSON.parse(getLocalStorage);
    }


    const pendingNumbers = document.querySelector(".pendingNumbers"); 
    // Is used to select the pending number of tasks
    pendingNumbers.textContent = list.length;
    
    
    let newTag = '';
    list.forEach((element, index) =>{
        newTag += `<li >${element}<span onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></li>`;
    })
    todoList.innerHTML = newTag;
    inputContainer.value = "";

}
// For deleting the task
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    list = JSON.parse(getLocalStorage);
    list.splice(index,1); 
    // it is used to add/delete the elements from array and it also overwrites the array
    localStorage.setItem("New Todo", JSON.stringify(list));
    showTask();
}

// It is used to delete all the tasks in the list
deleteAllBtn.onclick = () => {
    list = [];
    localStorage.setItem("New Todo", JSON.stringify(list));
    showTask();
}

