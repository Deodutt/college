// Function quiz
function test(x, y) {
    return y - x;
}
test(10, 40);

function test(x) {
    // as soon as we return something, the execution is stopped
    return x * 2;
    console.log(x);
    return x / 2;
}

// Function problem set

function isEven(number) {
    // return true if even
    if (number % 2 === 0) {
        return true;
    }
    // Return false otherwise
    else {
        return false;
    }

    // return num % 2 === 0;
}


function factorial(number) {
    // define a resilt variable
    let result = 1;
    // calculate factorial and store value in results.
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    // return the result varible
    return result;
}


function kebabToSnake(str) {
    // mystring.replace(/,/g , "newchar")
    let newStr = str.replace(/-/g, "_");
    return newStr;
}




// High Order Function
function sing() {
    console.log("Twinkle twinkle...");
    console.log("how I wonder");
}

// setInterval(anotherFunc, interval);
setInterval(sing, 1000);
// clearInterval(number console gives)

setInterval(function () {
    console.log("I am anoymous function!!");
    console.log("This is cool!");
}, 2000);