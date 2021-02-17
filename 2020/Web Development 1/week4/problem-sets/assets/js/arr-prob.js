//1. Reverse Array – Create a function reverseArray(arr) which takes an array as an argument. The function returns a new array with the values reversed. For example: reverseArray([1,2,3]) returns [3,2,1].

function reverseArray(arr) {
    let reverseArray = [];
    for (let i = arr.length; i > 0; i--) {
        reverseArray.push(i);
    }
    return reverseArray;
}

reverseArray([1, 2, 3]);



//2. Range Array – Create a function rangeArray(start, end) which takes two numbers as arguments. The function returns an array containing all the numbers from the start up to and including the end. For example: rangeArray(3, 9) returns [3,4,5,6,8,9].

function rangeArray(start, end) {
    let rangeArray = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

rangeArray(3, 9);



//3. Longest Username – Create a function longestUser(ar) which takes an array of string values (usernames) as an argument. The function returns the value of the longest username. For example: longestUser(["Tony", "Syeda", "Affroz", "Tatiana”]) returns "Tatiana".

function longestUser(arr) {

    let longestUser = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestUser.length) {
            longestUser = arr[i];
        }
    }
    return longestUser;
}

longestUser(["Tony", "Syeda", "Affroz", "Tatiana"]);










//4. Only Numbers – Create a function onlyNums(arr) which takes an array as an argument. The function returns an array that has removed any values except numbers. For example: onlyNums(["fun", 23, 45, undefined, "a", 4]) returns [23, 45, 4].

// Version 1
function onlyNumber(arr) {
    let onlyNum = [21, 2, "b", 4129, "abc2", "false", 007];
    let newArr = [];

    let count = 0;
    let i = 0;
    while (count < onlyNum.length) {
        if (!isNaN(onlyNum[i])) {
            newArr.push(onlyNum[i]);
        }
        count++;
        i++;
    }

    return newArr;
}

// ------------------------------------------------------------------------------

// Version 2
function onlyNums2(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            // arr.pop(); pop takes out the last value
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}

onlyNums2(["fun", 23, 45, undefined, "a", 4]);

// ------------------------------------------------------------------------------

// Version 3
// Reads backwards
function onlyNums3(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        if (isNaN(arr[i])) {
            // arr.pop(); pop takes out the last value
            arr.splice(i, 1);
        }
    }

    return arr;
}

onlyNums3(["fun", 23, 45, undefined, "a", 4]);