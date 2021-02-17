let age = prompt("Welcome to the club. Before you enter, how old are you?");

// checks if the age is under 0.
if (age < 0) {
    alert("Get out of here! Your not even born yet.");
}

// checks if the age is EXACTLY 21
else if (age == 21) {
    alert("Have fun in there and Happy Birthday!.");
}

// checks if the age is odd aka not evenly disisible by 2.
else if ((age % 2) !== 0) {
    alert("Your age is Odd.");
}

// if the age is a perfect square
else if (age > 0 && Math.sqrt(age) % 1 == 0) {
    alert("Your age is a perfect square");
}

// 1	1 * 1
// 4	2 * 2
// 9	3 * 3
// 16	4 * 4
// 25	5 * 5
// 36	6 * 6
// 49	7 * 7
// 64	8 * 8
// 81	9 * 9
// 100	10 * 10
// 121	11 * 11
// 144	12 * 12
// 169	13 * 13
// 196	14 * 14
// 225	15 * 15
// 256	16 * 16
// 289	17 * 17
// 324	18 * 18
// 361	19 * 19
// 400	20 * 20