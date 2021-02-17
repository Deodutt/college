// // let game = {};

// game.init = function () {
//     setupModeButtons();
//     setupSquares();
//     reset();
// }

// game.init();
//keep things structred and organized. avoids name space collision.




// let colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(255, 255, 0)"];
let numSquares = 6;
// let colors = generateRandomColors(numSquares);
let colors = [];
let pickedColor;
// let pickedColor = colors[3];
// let pickedColor = pickColor();

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

let modeButtons = document.querySelectorAll(".mode");

init(); // everything that needs to run



function init() {

    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}


function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            // condition ? then num squares =3 ; otherwise numsquares = 6;
            // if (this.textContent === "Easy") {
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //adding initial colors to squares
        // squares[i].style.background = colors[i];

        //adding click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked squares
            let clickedColor = this.style.background;
            // console.log(clickedColor, pickedColor);
            //comparing color to picked Color
            if (clickedColor === pickedColor) {

                messageDisplay.textContent = "Excellent!"
                resetButton.textContent = "Play Again?!?"
                changeColors(clickedColor);
                h1.style.background = clickedColor;

            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again"
            }

        });
    }
}


function reset() {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"

    messageDisplay.textContent = "";

    //change colors of the square
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "steelblue";
}


//     easyBtn.addEventListener("click", function () {
//         hardBtn.classList.remove("selected");
//         easyBtn.classList.add("selected");
//         numSquares = 3;
//         colors = generateRandomColors(numSquares);
//         pickedColor = pickColor();
//         colorDisplay.textContent = pickedColor;

//         for (let i = 0; i < squares.length; i++) {
//             if (colors[i]) {
//                 squares[i].style.background = colors[i];
//             } else {
//                 squares[i].style.display = "none";
//             }
//         }
//     });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});




function changeColors(color) {
    //looping through all squares
    for (let i = 0; i < squares.length; i++) {
        //changing each color to match given color
        squares[i].style.background = color;
    }
}


function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //making an array
    let arr = [];

    //repeating (num) times
    for (let i = 0; i < num; i++) {
        //geting random number and push it into the array
        arr.push(randomColor());

    }
    //return the array at the very 
    return arr;
}

function randomColor() {
    //pick a 'red' from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a 'green' from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0-255
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;

}



//video 142

// https://drive.google.com/drive/folders/0B91UfxpMiSKTbWowamIwY3hpN1E 