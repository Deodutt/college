// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.

// Use another function, Math.floor() to round the number ***down*** to its nearest whole number.
// Math.random() * 10)

// Use another function, Math.ceil() to round the number ***up*** to its nearest whole number.
// Math.ceil(Math.random() * 10)

// Use another function, Math.round() to round the number to its nearest whole number.
// Math.round(Math.random() * 10)


// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

// let random = Math.floor(Math.random() * 100) + 1;
// let guess = prompt("Guess a number between 1 and 100");




function randomColor() {
    let color1 = Math.floor(Math.random() * 256) + 0;
    let color2 = Math.floor(Math.random() * 256) + 0;
    let color3 = Math.floor(Math.random() * 256) + 0;
    let randomColorRGB = `rgb(${color1}, ${color2}, ${color3})`;
    return randomColorRGB;
}

console.log(randomColor());




// function randomRGBColor(){
//     return `rgb(${ranRGBNum()}, rgb(${ranRGBNum()}, rgb(${ranRGBNum()})`;
// }

// document.querySelector("body").style.backgroundColor = randomRGBColor();