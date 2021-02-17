// printReverse();
// takes an array as an argument and prints out the elements in the array in reveser order (dont actually rever the array itself)

function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([3, 6, 2, 5])



// isUniform();
// writes a function isUnfirom() which takes an array as an argument and returns true if all elements in the array are idenetical

function isUniform(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// sumArray()
// writes a fucnction sumArray() that accepts an array of nujmbers and returns the sum of all numbers in the array

function sumArray(arr) {
    let total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
}

// max()
// writes a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}