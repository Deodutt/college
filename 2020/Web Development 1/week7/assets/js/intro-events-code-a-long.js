// element.addEventListener(type, functionToCall);

// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//     console.log("someone clicked the button!");
// })

let button = document.querySelector("button");
let paragraph = document.querySelector("p");

//setup click listener
button.addEventListener("click", function () {
    paragraph.textContent = "someone clicked the gosh button!";
});

let h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
    // alert("h1 was clicked");
    h1.style.background = "orange";
    //you can have more than one listener on a given element.
})
//only applies to H1


document.querySelector("ul").addEventListener("click", function () {
    console.log("You Clicked the UL!!!!!!!!!!!");
});


// SEPERATE LISTERNER TO LIs

let lis = document.querySelectorAll("li");
lis;
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        this.style.color = "pink";
    });
};



button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "someone actually clicked on the button!";
}









//video 134
// document.querySelectorAll("table tr");
//subtract the headers

// document.querySelectorAll("tr").length - document.querySelectorAll("table").length;