// 114 introduction to objects
// let person = ["Cindy", 32, "Missoula];

person[2];
let person2 = ["Travis", "Los Angeles", 21];

// Arrays is not the perfect solution
// for every situation

// Javascript Objects is the perfect
let person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
}

let person = {
    name: "Travis",
    age: 21,
    city: "Los Angeles"
}

// Unlike array, which has an order 1 st item, 2n d item, 3 rd item
// Ojbects have no array.Things floating inside

// To retrive data out of an object you have 2 chocies

console.log(person["name"]);

//Dot Notation
console.log(person.name);



let dog = {
    name: "Rusty",
    breed: "Mutt",
    age: 3
}
// dog in the console would return
// {name: "Rusty", breed: "Mutt", age: 3}

//dog["age"]
//would return 3
//dog.age
//would return 3


// You cannot use dot notion if the property starts with a number
// You cant use dot notionation if your propery names with space
somebject["fav color"];

//You can use someObect[str] to look up a property.background-image

// to update data ∂n object
//person["age"] += 1;
// his age will be 22 now

//person.city = "London";


// Few ways to initilize array 
// Making an empty object and then add to it
let person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

// All at once
let person = {
    name: "Travis",
    age: 21,
    city: "LA"
}

//Another way of initilazing an object

let person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";


// Objects can hold all sorts of data even another object


//115
//Objects. Key and Value

//arrays
let dogs = ["Rusty", "Lucky", "Bubba"];
dogs[1];
dogs.push("Wyatt");
dogs[1] = "Lucy"

//objects
var dog = {
    name: "Bubba",
    breed: "Lab"
}
dog["name"];
dog["age"] = 6;
dog.breed = "Black Lab";



//116 nested objects

//arrays
let posted = [{
        title: "Cats are mediocre",
        author: "Colt",
        comments: ["Awesome post", "Terrible Post"]
    },
    {
        title: "Cats are actually awesome",
        author: "Cat Hater",
        comments: ["<3", "go to hell i hate u"]
    }
]

posted.length;
posted[0].title;
posted[1].comments[1]


//117 Objects Quiz

let someObject = {};

//which of the following are vale?
// Valid but weird to see.
someObject._name = "Hedwig";
// Valid 
someObject.age = 6;

//Valud
let prop = "color";
someObject[prop] = "red";

//Not valid. Cant see .dot notion when it has numbers 
// someObject .123 = true;


let someObject2 = {
    friends: [{
            name: "Malfoy"
        },
        {
            name: "Crabbe"
        },
        {
            name: "Goyle"
        },
    ],
    color: "baby blue",
    isEvil: true
};


//write code to retrieve "Malfoy" from someObject
someObject2.friends[0].name;
someObject2["friends"][0]







//Blog Post

let post = {
    user_avatar: "osrs.jpg",
    user_name: "Old School Runescape",
    user_security: "public", //Used to tell if all post is public, private, etc...
    content: {
        date: "February 6",
        time: "2:01pm",
        time_zone: "GMT", //Used for different time zone conversion
        text: "The Nightmare has awoken!",
        media: "osrs-nightmare.mp4",
        feedback: { //This is right under the media.
            like1: function () {},
            like2: function () {},
            like3: function () {},
            comments: function () {},
            shares: function () {},
        },
        links: { //This is the last section which allows user to like, comment, or share the post.
            like: function () {},
            comment: function () {},
            share: function () {},
        }
    }
}