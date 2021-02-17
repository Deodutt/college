// Exercise 1
// for (let i = 0; i < 16; i+=8){
//     console.log(i);
// }

// Exercise 1
// let str = "ahceclwlxo"
// for (let i = 1; i < str.length; i += 2) {
//     console.log(str[i]);
// }

// 1. Print all numbers between - 10 and 19
console.log("1. Print all numbers between - 10 and 19");

for (let i = -10; i < 20; i++) {
    console.log(i);
}



// 2. Print all even numbers between 10 and 40
console.log("2. Print all even numbers between 10 and 40");

// Answer1
// for (let i = 10; i < 41; i += 2) {
//     console.log(i);
// }

// Answer2
for (let i = 10; i < 41; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// 3. Print all odd numbers between 300 and 333
console.log("3. Print all odd numbers between 300 and 333");

for (let i = 300; i < 334; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}



// 4. Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50");

for (let i = 5; i < 51; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}