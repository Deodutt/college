//126
// let tag = document.getElementById("highlight");

//manipulating it
// tag.style.color = "blue";
// tag.style.border = "10px";

// let h1 = document.querySelector("h1");
// h1.style.color = "yellow";
// h1.style.border = "5px solid pink";

//better way to wiritng more styles

//javascriopt should control the behavior of the page.
//in javascript, we can add a class that changes 5 different properties
// .some-class {
//     color: blue;
//     border: 10px solid red
// }

// let tag = document.getElementById("highlight");
// tag.classList.add("some-class");




// tag.classList.add("another-class"); //Add a class to the selected elemtns
// tag.classList.remove("another-class"); // removes a class
// tag.classList.toggle("another-class"); //toggle.. takes a class name and if a given element has that class already, it removes it


//let p = document.querySelector("p");
//p.classList; //empty because no classes assigned to this 
//p.classList.add("big");
//p.classList.remove("big");
//p.classList.toggle("big"); // great for to do list when u click and unlick

//classlist is technically not an array. we have to use .add to add the class.... not .push


//127
// changing text or html on a page 

// let tag = document.querySelector("p");

// tag.textContent; // This is an awesome paragrahp
// tag.textContent = "blah blah balh";


let p = document.getElementsByTagName("p")[0];
p;
p.textContent;

// let ul = document.querySelector("ul");
// ul;
// ul.textContent;

// p.textContent = "Corgi mixes are really really really super adorable;" //removes html strong tags etc

let tag = document.querySelector("p");
tag.innerHTML; // This is an <strong>awesome</strong> paragraph;

let ul = document.querySelector("ul");
ul.innerHTML;
ul.innerHTML = "Plants are qawesome!"; //completely resets html

document.querySelector("h1").textContent = "End of semester!";

//textContent gives the text onlky
//Textcontent trreats whatever it gives you amd whatever u give it as text..



// innerhtm gives all the html for the body
//innerHTML will treat it like html and render it on a page if u give tags to render.


//document.body.textContent = "<h1>Goodbye!</h1>"; //works in console




//128 manipulating attributes
//href or src
//img slides are made by changing the src. One img and the src is being changes
let link = document.querySelector("a");
link.getAttribute("href"); //www.google.com
link.setAttribute("href", "https://www.cars.com/");

let img1 = document.getElementsByTagName("img")[0];
img1.getAttribute("src");
img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Cat-and-Dog.gif/220px-Cat-and-Dog.gif")

let img2 = document.getElementsByTagName("img")[1];
img2.getAttribute("src");
img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Droopy_dog.png/150px-Droopy_dog.png")

img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Droopy_dog.png/150px-Droopy_dog.png")

let a = document.querySelector("a");
a.setAttribute("href", "https://www.youtube.com/watch?v=CV7OQerBcBs");
a.textContent = "Link to Music"





//129