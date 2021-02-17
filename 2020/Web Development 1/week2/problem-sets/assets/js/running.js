//2. How fast were you running? Write a program that asks for how many miles a person ran and how many minutes the run took. If either answer was not a number, then let the user know they should try again. If both answers are numbers calculate and report the MPH the user averaged.


// parseInt changes the string to integer
// Number.isInteger(x) checks if its a number == boolean
// let miles = parseInt(prompt("How many miles did you run?", "PLACEHOLDER"));

// Prompt puts input as string always.
let miles = parseInt(prompt("How many miles did you run?"));
while (Number.isInteger(miles) === false){
    miles = parseInt(prompt("Input denied. Please enter how many miles you ran today."));
}

let minutes = parseInt(prompt("How many minutes did the run take?"));
while (Number.isInteger(minutes) === false){
    minutes = parseInt(prompt("Input denied. Please enter how many minutes you ran for."));
}

let calculatation = (miles / minutes) * 60;

alert(`You have ran ${calculatation} miles per hour, today.`);