// let todos = ["Buy New Turtle"];
let todos = ["Buy New Turtle"];


var input = prompt("What would you like too do?");

while (input !== "quit") {

    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        // Ask for new todo
        let newTodo = prompt("Enter a new Todo");
        // add to todos array
        todos.push(newTodo);
    }

    // Ask for a new input agaion
    input = prompt("What would you like too do?");
}

console.log("Ok, you have quit the APP");