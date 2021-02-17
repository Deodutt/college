// function doMath(){
//     var x = 40;
//     console.log(x);
// }

// doMath();

let y = 99;

function doMoreMath() {
    console.log(y);
}

// if you define variable outside of function, you can use it inside 



// let phrase = "hi there!";
// function doSomething() {
//     let phrase = "Goodbye!";
//     console.log(phrase);
// }
// doSomething();
// phrase;



let num = 8;

function doMath() {
    num += 1;
    if (num % 5 == 0) {
        return true;
    } else {
        return false
    }
}

num += 1;
doMath();




function hi() {
    let name = "Crusty";
    console.log(name);
}

function bye() {
    console.log(name);
}

hi();
bye();