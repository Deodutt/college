/*

// exercise 1
let num = 1;

while (num <= 10) {
    console.log(num);
    num += 2;
}


// exercise 2
// 4 8  12 15 20
let num = 1

while (num <= 20) {
    if (num % 4 === 0) {
        console.log(num)
    }
    num++;
}

// exercise 3
// infinite code
let num = 100;

while (num < 150) {
    console.log(num + 1);
    num--;
}

*/


// 1. Print all numbers between - 10 and 19
console.log("1. Print all numbers between - 10 and 19");
let num1 = -10;

while (num1 < 20) {
    console.log(num1);
    num1++;
}

// 2. Print all even numbers between 10 and 40
console.log("2. Print all even numbers between 10 and 40")
let num2 = 10;

while (num2 < 41) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2++;
}


// 3. Print all odd numbers between 300 and 333
console.log("3. Print all odd numbers between 300 and 333");
let num3 = 300;

while (num3 < 334) {
    // if (num3 % 2 === 1) {
    if (num3 % 2 != 0) {
        console.log(num3);
    }
    num3++;
}


// 4. Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50");
let num4 = 5;

while (num4 < 51) {
    if (num4 % 5 === 0 && num4 % 3 === 0) {
        console.log(num4);
    }
    num4++;
}