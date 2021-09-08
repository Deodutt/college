//Icon Colors from Mike's Video

const black = '#323538';
const white = '#ffffff';
const blue = '#2c8eff';
const green = '#3bdd49';
const yellow = '#fce446';
const red = '#fc0d1b';
const tan = '#d86100';
const lime = '#adba23';
const transparent = '#ffffff00';

function build(icon) {
    let i = document.createElement("i");

    i.classList.add(...icon.class);
    i.style.color = icon.color;
    i.textContent = icon.content;
    i.style.fontSize = `${icon.size}rem`;
    i.style.left = `${icon.position[0]}%`;
    i.style.top = `${icon.position[1]}%`;
    i.style.transform = `translate(-50%, -50%) ${icon.transform}`;
    i.style.filter = icon.filter;

    return i;
}



//Icon Object

//Class
//Color takes a string
//Content if text... string value if there is content
//Size
//Position top and left values
//transform property.. Uses translate function to position element in the center in the document. May have other transform like scale, rotate, etc..delay-space
//filter.. text icon with no filter. Other icons have filter in the background.

let icon = {
    //Class
    class: ["far", "fa-map"],

    //Color
    color: black,

    //content
    content: null,

    //size
    size: 9,

    //position
    position: [20, 35],

    //transform
    transform: null,

    //filter
    filter: null,
};



let scene02Icons = [{
        //Class
        class: ["far", "fa-map"],

        //Color
        color: black,

        //content
        content: null,

        //size
        size: 9,

        //position
        position: [20, 35],

        //transform
        transform: null,

        //filter
        filter: null,
    },
    {
        //Class
        class: ["fas", "fa-cat"],

        //Color
        color: tan,

        //content
        content: null,

        //size
        size: 9,

        //position
        position: [40, 63],

        //transform
        transform: null,

        //filter
        filter: null,
    },
    {
        //Class
        class: ["fas", "fa-globe-europe"],

        //Color
        color: blue,

        //content
        content: null,

        //size
        size: 9,

        //position
        position: [65, 35],

        //transform
        transform: null,

        //filter
        filter: null,
    },
    {
        //Class
        class: ["fas", "fa-sun"],

        //Color
        color: yellow,

        //content
        content: null,

        //size
        size: 9,

        //position
        position: [80, 65],

        //transform
        transform: null,

        //filter
        filter: null,
    }
];





let scene03Icons = [{
        class: ["text-icon"],
        color: black,
        content: '÷',
        size: 8,
        position: [20, 35],
        transform: null,
        filter: 'none'
    },
    {
        class: ["text-icon"],
        color: black,
        content: '-',
        size: 8,
        position: [40, 35],
        transform: null,
        filter: 'none'
    }, {
        class: ["text-icon"],
        color: black,
        content: 'X',
        size: 8,
        position: [60, 35],
        transform: null,
        filter: 'none'
    }, {
        class: ["text-icon"],
        color: black,
        content: '+',
        size: 8,
        position: [80, 35],
        transform: null,
        filter: 'none'
    }
];