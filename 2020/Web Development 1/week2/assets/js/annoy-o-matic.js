// let answer = prompt("Did we arrive there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//     let answer = prompt("Did we arrive there yet?");
// }

// alert("Wow! We made it!!");

// Version 2

let answer = prompt("Did we arrive there yet?");

while (answer.indexOf("yes") === -1) {
    let answer = prompt("Did we arrive there yet?");
}

alert("Wow! We made it!!");