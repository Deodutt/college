// Hardcode, Create secret number
// let secretNumber = 4;

// Random, Create secret number. Number between 1 and 5.
let secretNumber = Math.floor((Math.random() * 5) + 1);;

// ask user for guess
let guess = prompt("Guess a number between 1-5");
// let guess = Number(prompt("Guess a number between 1-5"));

// other way
// let stringGuess = prompt("Guess a number between 1-5");
// let guess = Number(stringGuess);



// check guess
if (Number(guess) === secretNumber) {
    alert("YOU GOT IT!!");
}
// The guess is higher
else if (Number(guess) > secretNumber) {
    alert("The guess was too high. Try again!");
}

// The guess is too low
// else if (Number(guess) < secretNumber) {
//     alert("The guess was too low. Try again!");
// }
else {
    alert("The guess was too low. Try again!");
}