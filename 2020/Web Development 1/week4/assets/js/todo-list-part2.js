// let todos = ["Buy New Turtle"];
let todos = ["Buy New Turtle"];

var input = prompt("What would you like too do?");

while (input !== "quit") {


    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodos();
    } else if (input === "delete") {
        deleteTodos();
    }

    // Ask for a new input agaion
    input = prompt("What would you like too do?");
}
console.log("Ok, you have quit the APP");

function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
        // todos.indexOf(todo);
        console.log(`${i}: ${todo}`);
    });
    console.log("**********");
}

function addTodos() {
    // Ask for new todo
    let newTodo = prompt("Enter a new Todo");
    // add to todos array
    todos.push(newTodo);
    console.log("Todo has been successfully added.");
}

function deleteTodos() {
    // ask for index of todo to be deleted
    let index = prompt("Which specific index would you like to remove?");
    // delete that index
    // splce()
    todos.splice(index, 1);
    // ask user what todo to delete.. todos.splice gona find item. and delete 1 item following that index.
    console.log("Todo has been successfully deleted.");
}