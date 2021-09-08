//////////////////////////////////////////////////////////////////////////
//First


// function init() {
//     startTime()
// }


// function startTime() {
//     start = new Date().getTime();
// }


// function endTime() {
//     end = new Date().getTime();
//     seconds();
// }


// function seconds() {
//     offset = end - start;
//     seconds = offset / 1000;
//     timeElapsed.textContent = `Time Elapsed: ${seconds}seconds`;
// }




//////////////////////////////////////////////////////////////////////////
//Second



//With the help of this
//https://jsfiddle.net/Daniel_Hug/pvk6p/
// let timeElapsed = document.querySelector(".timer h3");
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let x;


// timer();

// function add() {
//     seconds++

//     if (seconds >= 60) {
//         seconds = 0;
//         minutes++;

//         if (minutes >= 60) {
//             minutes = 0;
//             hours++;
//         }
//     }

//     timeElapsed.textContent = `${hours}:${minutes}:${seconds}`
//     timer();
// }



// function timer() {
//     x = setTimeout(add, 1000)
// }


//////////////////////////////////////////////////////////////////////////
//Third


let timeElapsed = document.querySelector(".timer h3");
let seconds = 0;
let minutes = 0;
let hours = 0;
let x;


function add() {
    seconds++
    timeElapsed.textContent = `Time Elapsed: ${seconds} seconds`;
    timer();
}

function timer() {
    x = setTimeout(add, 1000)
}

function stopTimer() {
    clearTimeout(x);
}