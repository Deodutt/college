//119 Adding Methods to object

//A method is a function inside a property
let obj = {
    name: "Chck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function (x, y) {
        return x + y;
    }
}

//We cant just call the function add()

obj.add(10, 5);
// We need to type obj.add(10,5);

// console.log()
// Console is an object. Log is a method on the object. 

//We add function to object, to group things logically and make thing organized


function add() {

}



function speak() {
    return "WOOF!";
}

function speak() {
    return "MEOW!";
}

//Name space collision. If we add them to two different objects, we can have two different speak

let dogSpace = {};
dogSpace.speak = function () {
    return "WOOF!";
}
dogSpace.speak();



let catSpace = {};
catSpace.speak = function () {
    return "WOOF!";
}
catSpace.speak();

//Nice way to organize logically. A way to avoid name space collision




// 120 The Keyword This
// underscore.js bunch of functions some else wrote
// Everything that starts with _. is grouped into _ object.background-image

//The wkeyword this
let comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

//To make a function call print
function print(arr) {
    arr.forEach(function (el) {
        console.log(el);
    });
}
print(comments.data);

comments.print = function () {
    this.data.forEach(function (el) {
        console.log(el);
    });
}
// This is used to refer to the object comments. This refers to the entire cobject.background-image

comments.print();

//Writing ,this, inside of a method it refers to the object that the method is defiend in.