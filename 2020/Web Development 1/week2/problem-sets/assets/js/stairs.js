//6. Falling down the stairs – Take the phrase “falling down the stairs” and write a program that console logs the phrase one letter per line, but for each line add one additional space is in front of each letter. This will give the appearance of the letters in the phrase looking like a staircase.

let phrase = "falling down the stairs";
let space = "";
let count = 0; //index counter

for (let i = 0; i < phrase.length; i++) {
    console.log(space + phrase[count]);
    space = space + " ";
    count++;
}


// let p = "falling down the stairs";
// let spaces = "";

// for(let i = 0; i < p.length; i++){
//     console.log(spaces + p[i]);
//     spaces+= " ";
// }