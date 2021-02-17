// -----------------------------------------------------------------------------------------------------
// 106 array quiz


// //What does the folowing line print?
let numbers = [22, 67, 33, 96, 88];
console.log(numbers[numbers.length]);

// // We are printing out an index in numbers. we are accessing the 5th index. the greatest index is 4. so it returns undefined because index 5 does not exist.

// //What does the folowing line print?
let friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];

console.log(friendGroups[2][0]);

// // Nested arrays. The last array is accessed because friendGroups[2] and the first value is outputted because [0].
// // Mooney

console.log(friendGroups[2][1]);
// // Wormtail


// -----------------------------------------------------------------------------------------------------



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function (color) {
    if (color % 3 === 0) {
        console.log(color);
    }
});

// 3, 6 ,9

// we are using forEach on the numbers array function(color) can be used as abything
// If number is divisibe by 3,