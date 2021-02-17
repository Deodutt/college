//Come up with 4 different ways to select the first <p> tag

document.getElementById("first");
document.querySelector("#first");


document.getElementsByClassName("special");
document.getElementsByClassName("special")[0];
document.querySelector(".special");
document.querySelectorAll(".special")[0];

document.getElementsByTagName("p"); // gives all p tags
document.getElementsByTagName("p")[0];
document.querySelector("p");
document.querySelectorAll("p")[0];

document.querySelectorAll("h1 + p");