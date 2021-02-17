//Icon Colors from Mike's Video
const black = "#323538";
const white = "#ffffff";
const blue = "#2c8eff";
const green = "#3bdd49";
const yellow = "#fce446";
const red = "#fc0d1b";
const tan = "#d86100";
const lime = "#adba23";
const transparent = "#ffffff00";

let scene = [{
        instructions: [
            'Where are you right now?',
            'Touch the sun, don\'t Worry it\'s not hot.',
            'Don\'t forget your Map.',
        ],
        icons: [{
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
            },
        ],
        answer: [2, 3, 0],
        main: function (icon, indx) {
            console.log(`you clicked ${icon} ${indx}, the answer is  ${scene[level].answer[clickCount-1]}`);
            hide(icon);
            changeInstructions(this.instructions[clickCount]);
        }
    },

    {
        instructions: ['Click the Plus Sign.'],
        icons: [{
                class: ["text-icon"],
                color: black,
                content: "÷",
                size: 8,
                position: [20, 35],
                transform: null,
                filter: "none",
            },
            {
                class: ["text-icon"],
                color: black,
                content: "-",
                size: 8,
                position: [40, 35],
                transform: null,
                filter: "none",
            },
            {
                class: ["text-icon"],
                color: black,
                content: "X",
                size: 8,
                position: [60, 35],
                transform: null,
                filter: "none",
            },
            {
                class: ["text-icon"],
                color: black,
                content: "+",
                size: 8,
                position: [80, 35],
                transform: null,
                filter: "none",
            },
        ],
        answer: [3],
        main: function (icon, indx) {

        }
    },

    {
        instructions: ['Click the yellow ghost, then green twice, then blue.', ''],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: green,
                content: null,
                size: 10,
                position: [22, 25],
                transform: null,
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: blue,
                content: null,
                size: 10,
                position: [40, 50],
                transform: null,
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: red,
                content: null,
                size: 10,
                position: [75, 30],
                transform: null,
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: yellow,
                content: null,
                size: 10,
                position: [80, 65],
                transform: null,
                filter: null,
            },
        ],
        answer: [3, 0, 0, 1],
        start: null,
        finish: null,
        main: function (icon, indx) {
            console.log(`you clicked ${icon} ${indx}, the answer is  ${scene[level].answer[clickCount-1]}`);

            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[clickCount]);
                    break;
                case 2:
                    moveIcon(0, 71, 27);
                    moveIcon(1, 20, 60);
                    moveIcon(2, 20, 27);
                    moveIcon(3, 50, 55);
                    break;
            }
        }
    },
];

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