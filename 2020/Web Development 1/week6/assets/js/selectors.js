//122

// document;
// console.dir(document);


//regular objects with a lot more info... font, images, links


//123
// select and manipulate
//write javascript code which goes and select elements which returns it to us and we manipluate it.background-image

// let h1 = document.querySelector("h1");
//This returns an object that saves it in the h1..background-image


// h1.style.color = "pink";
//This is the manipulate.background-image

//let body = document.querySelector("body"); // selects and gives body element.
//let isBlue = false; //boolean we use.

//set interval takes two argument first is code to run and second is number or time in milisecond. Takes this miliseconds and every 1 second it checks the code.
// setInterval(function () {
//     if (isBlue) {
//         body.style.background = "white";
//     } else {
//         body.style.background = "#3498db";
//     }
//     isBlue = !isBlue;
// }, 1000);


//select and manipulate
//when we select we grab some objects 
//then we do somethng to it.


//124
// document.URL;
// document.links; // whole list of evry link
// document.body;
// document.head;


// document.something

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

let tag = document.getElementById("highlight");
tag;
console.log(tag);

let tags = document.getElementsByClassName("bolded");
tags;
console.log(tags);

tags[0];
tags.length;
//cant do tags.forEach().. because its only there is no forEach defined to node list,, onlky for arrays. 
console.dir(tags[0]);


let tags1 = document.getElementsByTagName("li");
// let tags1 = document.getElementsByTagName("h1");
// let tags1 = document.getElementsByTagName("body");
// let tags1 = document.getElementsByTagName("head");
tags1;
let body = document.getElementsByTagName("body")[0];


// QuerySelector is a newer method that hasnt exisited for a while.. We can use it for getelementsbyID..background-image
// What it does is take a CSS Style selector.. (CSS Style Selector is any selectors we would use in CSS document)..background-image
let tag = document.querySelector("#highlight");
let tag = document.querySelector(".bolded");
//Even tho there are 2 elements with bolded. It always returns 1 element. The very first one.. 

//We can take CSS selectors, and select them with queryselector


let h1 = document.querySelector("h1");
h1;
let h1 = document.querySelector("#highlight");
let li = document.querySelector(".bolded");

let h1 = document.querySelector("li a.special");
//We can select all anchor tags inside an li with special.... All ancor tags that have class special that are nested inside li..

// QuerySelector returns the first match.. Usful sometimes. forexample selecting the body
//Query sleector returns first element that matches given css selector. 
//Query sleector all which works the same but returns a list, which is not an array (its also a node list), with all elements that match given selector.

// The alternative to querySelector is querySelectorAll.. It works the same way but returns all matching elements.
let li = document.querySelectorAll("li");
let bolded = document.querySelectorAll(".bolded");

// You can use queryselector all to select even if theres 1 element ur clooking for.




//125 is inside exercise.html