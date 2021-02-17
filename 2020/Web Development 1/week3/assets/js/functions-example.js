// function sayHi() {
//     console.log("Hello!!!!!");
//     console.log("GoodBye!!");
// }

// sayHi();


// function singSong(){
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How i wonder what you are!,");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// }

// singSong();
// singSong();
// singSong();



// Arguments

function square(num) {
    console.log(num * num);
}
square(10);
square(3);
square(4);

function sayHello(name) {
    console.log("Hello there " + name + "!");
}


sayHello("Crusty");




function area(length, width) {
    console.log(length * width);
}
area(9, 2);




function greet(person1, person2, person3) {
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);
}

greet("Harry", "Ron", "Hermione");



function square(x) {
    return x * x;
}

square(4);
let result = square(104);