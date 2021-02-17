//7. ***BONUS*** Climbing Up the Mountain – Take the phrase, “Climbing up the Mountain” and log one letter per line but in reverse. Also the last line should have one space in front, the second to last two spaces, etc. This will give the impression of a the letters going up to a peak. Hint: You will need to employ new string methods.



// Method 1

// let x = "Climbing up the Mountain";
// let i;
// let y = "                          ";
// for (i = x.length; i >= 0; i--){
//     console.log( y + x[i]);
//     y = y.substr(1);
// }



// Method 2

// let phrase = "Climbing up the Mountain".split('');
// let space = "";
// let count = 0; //index counter
// let spaceCount = 0;

// for (let i = 0; i < phrase.length; i++) {
//     phrase[count] = space + phrase[count];
//     space = space + " ";
//     count++;
// }

// let newPhrase = phrase.reverse();
// let newCount = 0; //index counter
// for (let i = 0; i < newPhrase.length; i++) {
//     console.log(newPhrase[newCount]);
//     newCount++;
// }

// //let phrase = "Climbing up the Mountain";
// let phrase = "Hello";
// console.log(phrase.length);
// for (let i = phrase.length; i > 0; i--) {
//     console.log(phrase[i - 1].padStart(i + 1, ' '));
//     // padStart(length the string needs to be, what it is being padded with infront of it)
// }



// Method 3

let phrase = "Climbing up the Mountain";
for (let i = phrase.length; i > 0; i--) {
    let stair = phrase[i - 1];
    let space = "";
    for (let j = 0; j < i; j++) {
        space += " ";
    }
    console.log(space + stair);
}