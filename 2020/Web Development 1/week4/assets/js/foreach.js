// with a for loop
let colors = ["red", "orange", "yellow", "green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// with a forEach
let colors = ["red", "orange", "yellow", "green"];

colors.forEach(function (color) {
    // color is a placeholder, call it whatever you want
    console.log(color);
});




// video 113 optional
let colors = ["red", "orange", "yellow"];


function myForEach(arr, func) {
    // loop thru array
    for (let i = 0; i < arr.length; i++) {
        // call func for each item
        func(arr[i]);
    }
}

myForEach(colors, function (color) {
    console.log(color);
});

Array.prototype.myForEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}
let friends = ["not qadeer", "not qadeer 2", "not qadeer 3"];
friends.myForEach(function (name) {
    console.log("These are my friends,  " + name);
})