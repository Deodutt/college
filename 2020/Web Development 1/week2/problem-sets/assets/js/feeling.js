//1. How are you really feeling? Write a program that asks “How are you feeling?” Then have the program immediately ask again, “How are you really feeling?” Have the program compare the statements. If the statements match, then send a message, “Wow so you really feel insert feeling” If they don’t match send a message, “Ok so you’re not sure if you’re firstFeeling or secondFeeling.”

let question1 = prompt("How are you feeling?");
let question2 = prompt("How are you really feeling?");

if (question1 === question2) {
    alert(`Wow so you really feel ${question1} feeling`);
} else {
    alert(`Ok so you’re not sure if you’re ${question1} or ${question2}.`);
}