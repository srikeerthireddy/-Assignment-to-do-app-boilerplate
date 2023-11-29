//targeting the elements
const userInput = document.getElementById("input")
const addBtn = document.getElementById("button")
const parentTodoContainer = document.getElementById("todolist")
let listOfTodos = [];


addBtn.onclick = () =>{
    //Storing the todos of the user
      listOfTodos.push(userInput.value);
    //clearing the input tag
      userInput.value = ""
     console.log(listOfTodos)
    // Dispaly todos
     displayTodo();
};
function displayTodo(){
    let newTodo="";


    listOfTodos.map((todo,index)=>{
        newTodo +=`<li>
        ${todo}
        <a onclick="editTodo(${index})">Edit</a>
        <a onclick="deleteTodo(${index})">Delete </a>
        </li>`;
    });
    parentTodoContainer.innerHTML= newTodo;
}

function deleteTodo(indexValue){
    //delete a element from any array using splice.
    listOfTodos.splice(indexValue,1);
    //display todos
    displayTodo();
}

function editTodo(indexValue){
    //Take updated input from the user
    let updateTodo=prompt("Please update the todo");

    //Replace the old todo with the new todo/ updatedt todo
    listOfTodos.splice(indexValue,1,updateTodo);
}