// icon colors
const black = '#323538';
const white = '#ffffff';
const blue = '#2c8eff';
const green = '#3bdd49';
const yellow = '#fce446';
const red = '#fc0d1b';
const tan = '#d86100';
const lime = '#adba23';
const transparent = '#ffffff00';

const scene = [{
        instructions: ['Click the red ghost to continue'],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: blue,
                content: null,
                size: 12,
                transform: null,
                position: [18, 75],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: green,
                content: null,
                size: 12,
                transform: null,
                position: [65, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: red,
                content: null,
                size: 12,
                transform: null,
                position: [30, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: yellow,
                content: null,
                size: 12,
                transform: null,
                position: [75, 68],
                filter: null,
            },
        ],
        answer: [2],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: [
            'Where are you right now?',
            "Touch the sun, don't worry it's not hot.",
            "Don't forget your map.",
        ],
        icons: [{
                class: ['far', 'fa-map'],
                color: black,
                content: null,
                size: 9,
                transform: null,
                position: [20, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-cat'],
                color: tan,
                content: null,
                size: 9,
                transform: null,
                position: [40, 65],
                filter: null,
            },
            {
                class: ['fas', 'fa-globe-americas'],
                color: blue,
                content: null,
                size: 9,
                transform: null,
                position: [65, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-sun'],
                color: yellow,
                content: null,
                size: 9,
                transform: null,
                position: [80, 65],
                filter: null,
            },
        ],
        answer: [2, 3, 0],
        start: null,
        finish: null,
        main: function (icon, i) {
            changeInstructions(this.instructions[clickCount]);
            hide(icon);
        },
    },
    {
        instructions: ['Click the plus sign.'],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: '÷',
                size: 8,
                transform: null,
                position: [20, 35],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '-',
                size: 8,
                transform: null,
                position: [39.66, 35],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: 'black',
                content: 'x',
                size: 8,
                transform: null,
                position: [60.33, 35],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '+',
                size: 8,
                transform: null,
                position: [80, 35],
                filter: null,
            },
        ],
        answer: [3],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Smash the bugs from left to right.'],
        icons: [{
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 5,
                transform: 'scale(2, 0.5)',
                position: [10, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 5,
                transform: 'scale(2, 0.5)',
                position: [30, 45],
                filter: null,
            },
            {
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 5,
                transform: 'scale(2, 0.5)',
                position: [50, 70],
                filter: null,
            },
            {
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 5,
                transform: 'scale(2, 0.5)',
                position: [70, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 5,
                transform: 'scale(2, 0.5)',
                position: [90, 55],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 5,
                transform: null,
                position: [10, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 5,
                transform: null,
                position: [30, 45],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 5,
                transform: null,
                position: [50, 70],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 5,
                transform: null,
                position: [70, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 5,
                transform: null,
                position: [90, 55],
                filter: null,
            },
        ],
        answer: [5, 6, 7, 8, 9],
        start: null,
        finish: null,
        main: function (icon, i) {
            hide(icons[i]);
            unhide(icons[i - 5]);
        },
    },
    {
        instructions: ['Click the red ghost, then blue, then green'],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: yellow,
                content: null,
                size: 10,
                transform: null,
                position: [20, 65],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: blue,
                content: null,
                size: 10,
                transform: null,
                position: [30, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: red,
                content: null,
                size: 10,
                transform: null,
                position: [62, 37],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: green,
                content: null,
                size: 10,
                transform: null,
                position: [75, 66],
                filter: null,
            },
        ],
        answer: [2, 1, 3],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the biggest frog.'],
        icons: [{
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 8,
                transform: null,
                position: [20, 25],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 5,
                transform: null,
                position: [30, 65],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 7,
                transform: 'scale(-1, 1)',
                position: [50, 40],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 11,
                transform: null,
                position: [75, 75],
                filter: null,
            },
        ],
        answer: [3],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the eye to continue.'],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: 'i',
                size: 11.5,
                transform: null,
                position: [30, 62],
                filter: null,
            },
            {
                class: ['fas', 'fa-eye'],
                color: black,
                content: null,
                size: 8,
                transform: null,
                position: [70, 65],
                filter: null,
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the yellow ghost, then green twice, then blue.', ''],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: green,
                content: null,
                size: 10,
                transform: null,
                position: [22, 25],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: blue,
                content: null,
                size: 10,
                transform: null,
                position: [40, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: red,
                content: null,
                size: 10,
                transform: null,
                position: [68, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: yellow,
                content: null,
                size: 10,
                transform: null,
                position: [75, 65],
                filter: null,
            },
        ],
        answer: [3, 0, 0, 1],
        start: null,
        finish: null,
        main: function (icon, i) {
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
        },
    },
    {
        instructions: ['Click the paper airplane'],
        icons: [{
                class: ['far', 'fa-sticky-note'],
                color: black,
                content: null,
                size: 7,
                transform: null,
                position: [25, 40],
                filter: null,
            },
            {
                class: ['fas', 'fa-plane'],
                color: black,
                content: null,
                size: 7,
                transform: null,
                position: [50, 40],
                filter: null,
            },
            {
                class: ['fas', 'fa-paper-plane'],
                color: black,
                content: null,
                size: 7,
                transform: null,
                position: [75, 40],
                filter: null,
            },
        ],
        answer: [2],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the frogs from biggest to smallest.'],
        icons: [{
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 4,
                transform: null,
                position: [10, 20],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 11,
                transform: null,
                position: [30, 62],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 7,
                transform: null,
                position: [50, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 3,
                transform: null,
                position: [60, 60],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: green,
                content: null,
                size: 14,
                transform: null,
                position: [75, 75],
                filter: null,
            },
        ],
        answer: [4, 1, 2, 0, 3],
        start: null,
        finish: null,
        main: function (icon, i) {
            hide(icon);
            switch (clickCount) {
                case 1:
                    // changeInstructions(this.instructions[clickCount]);
                    changeInstructions(this.instructions[1]);
                    break;
            }
        },
    },
    {
        instructions: [''],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: 'Pay Attention!',
                size: 6,
                transform: null,
                position: [50, 37],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'Click here to continue.',
                size: 2,
                transform: null,
                position: [50, 55],
                filter: null,
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: [''],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: '1',
                size: 12,
                transform: null,
                position: [25, 30],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '3',
                size: 12,
                transform: null,
                position: [50, 65],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '5',
                size: 12,
                transform: null,
                position: [75, 30],
                filter: null,
            },
        ],
        answer: [],
        start: function () {
            timeoutId = setTimeout(function () {
                level++;
                nextScene();
            }, 2000)
        },
        main: function (icon, i) {},
        finish: null,
    },
    {
        instructions: ["Add them together, what's the answer?"],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: '136',
                size: 12,
                transform: null,
                position: [25, 25],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '9',
                size: 10,
                transform: null,
                position: [25, 55],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '7',
                size: 10,
                transform: null,
                position: [75, 25],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '10',
                size: 10,
                transform: null,
                position: [75, 55],
                filter: null,
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the mail to continue.'],
        icons: [{
                class: ['fas', 'fa-male'],
                color: black,
                content: null,
                size: 8,
                transform: null,
                position: [25, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-envelope'],
                color: black,
                content: null,
                size: 8,
                transform: null,
                position: [75, 50],
                filter: null,
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the green ghost five times.', ''],
        icons: [{
            class: ['fas', 'fa-ghost'],
            color: green,
            content: null,
            size: 14,
            transform: null,
            position: [50, 50],
            filter: null,
        }, ],
        answer: [0, 0, 0, 0, 0],
        start: null,
        finish: function () {
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[1]);
                    break;
            }
            timeoutId = setTimeout(function () {
                level++;
                nextScene();
            }, 5000)
        },
        main: function (icon, i) {
            switch (clickCount) {
                case 1:
                    // changeInstructions(this.instructions[clickCount]);
                    changeInstructions(this.instructions[1]);
                    break;
            }
        },
    },
    {
        instructions: ['Click the largest locked lock.'],
        icons: [{
                class: ['fas', 'fa-unlock'],
                color: black,
                content: null,
                size: 17,
                transform: null,
                position: [20, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-lock-open'],
                color: black,
                content: null,
                size: 7,
                transform: null,
                position: [20, 70],
                filter: null,
            },
            {
                class: ['fas', 'fa-lock'],
                color: black,
                content: null,
                size: 8,
                transform: null,
                position: [45, 80],
                filter: null,
            },
            {
                class: ['fas', 'fa-unlock'],
                color: black,
                content: null,
                size: 6,
                transform: null,
                position: [55, 20],
                filter: null,
            },
            {
                class: ['fas', 'fa-lock-open'],
                color: black,
                content: null,
                size: 8,
                transform: null,
                position: [55, 55],
                filter: null,
            },
            {
                class: ['fas', 'fa-lock'],
                color: black,
                content: null,
                size: 12,
                transform: null,
                position: [85, 25],
                filter: null,
            },
            {
                class: ['fas', 'fa-unlock-alt'],
                color: black,
                content: null,
                size: 10,
                transform: null,
                position: [85, 75],
                filter: null,
            },
        ],
        answer: [5],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Smash the bugs from smallest to largest.'],
        icons: [{
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 6,
                transform: 'scale(2, 0.5)',
                position: [20, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 12,
                transform: 'scale(2, 0.5)',
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-splotch', 'hidden'],
                color: lime,
                content: null,
                size: 3,
                transform: 'scale(2, 0.5)',
                position: [80, 60],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 6,
                transform: null,
                position: [20, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 12,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 3,
                transform: null,
                position: [80, 60],
                filter: null,
            },
        ],
        answer: [5, 3, 4],
        start: null,
        finish: null,
        main: function (icon, i) {
            hide(icons[i]);
            unhide(icons[i - 3]);

        },
    },
    {
        instructions: [
            'Click the t-shirts, biggest to smallest, according to star size.', '',
        ],
        icons: [{
                class: ['fas', 'fa-tshirt'],
                color: black,
                content: null,
                size: 18,
                transform: null,
                position: [25, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-star'],
                color: yellow,
                content: null,
                size: 4,
                transform: null,
                position: [25, 35],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: transparent,
                content: null,
                size: 18,
                transform: null,
                position: [25, 35],
                filter: null,
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: red,
                content: null,
                size: 12,
                transform: null,
                position: [30, 78],
                filter: null,
            },
            {
                class: ['fas', 'fa-star'],
                color: yellow,
                content: null,
                size: 6,
                transform: null,
                position: [30, 78],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: transparent,
                content: null,
                size: 12,
                transform: null,
                position: [30, 78],
                filter: null,
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: blue,
                content: null,
                size: 8,
                transform: null,
                position: [80, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-star'],
                color: yellow,
                content: null,
                size: 2,
                transform: null,
                position: [80, 30],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: transparent,
                content: null,
                size: 8,
                transform: null,
                position: [80, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: green,
                content: null,
                size: 15,
                transform: null,
                position: [65, 65],
                filter: null,
            },
            {
                class: ['fas', 'fa-star'],
                color: yellow,
                content: null,
                size: 8,
                transform: null,
                position: [65, 65],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-tshirt'],
                color: transparent,
                content: null,
                size: 15,
                transform: null,
                position: [65, 65],
                filter: null,
            },
        ],
        answer: [11, 5, 2, 8],
        start: null,
        finish: null,
        main: function (icon, i) {
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[clickCount]);
                    hide(icons[i]);
                    hide(icons[i - 1]);
                    hide(icons[i - 2]);
                    moveIcon(0, 50, 45);
                    moveIcon(1, 50, 45);
                    moveIcon(2, 50, 45);

                    moveIcon(3, 80, 75);
                    moveIcon(4, 80, 75);
                    moveIcon(5, 80, 75);

                    moveIcon(6, 20, 50);
                    moveIcon(7, 20, 50);
                    moveIcon(8, 20, 50);
                    break;

                case 2:
                    hide(icons[i]);
                    hide(icons[i - 1]);
                    hide(icons[i - 2]);
                    moveIcon(0, 50, 60);
                    moveIcon(1, 50, 60);
                    moveIcon(2, 50, 60);

                    moveIcon(6, 80, 65);
                    moveIcon(7, 80, 65);
                    moveIcon(8, 80, 65);
                    break;


                case 3:
                    hide(icons[i]);
                    hide(icons[i - 1]);
                    hide(icons[i - 2]);
                    moveIcon(6, 35, 80);
                    moveIcon(7, 35, 80);
                    moveIcon(8, 35, 80);
                    break;
            }
        },
    },
    {
        instructions: ["Don't touch the ghost."],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: red,
                content: null,
                size: 26,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: 'text-icon',
                color: white,
                content: 'continue',
                size: 2,
                transform: null,
                position: [50, 50],
                filter: 'none',
            },
        ],
        answer: [],
        start: function () {
            timeoutId = setTimeout(function () {
                level++;
                nextScene();
            }, 8000)
        },
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Touch the pie to continue.'],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: '3.14',
                size: 3,
                transform: null,
                position: [20, 62],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '3.41',
                size: 3,
                transform: null,
                position: [40, 62],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: '4.13',
                size: 3,
                transform: null,
                position: [60, 62],
                filter: null,
            },
            {
                class: ['fas', 'fa-cheese'],
                color: tan,
                content: null,
                size: 4,
                transform: null,
                position: [80, 62],
                filter: null,
            },
        ],
        answer: [3],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: [
            "Nudge the person until they're happy.", '',
            'Quick one more nudge!!!',
        ],
        icons: [{
                class: ['fas', 'fa-tired'],
                color: red,
                content: null,
                size: 20,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-frown-open', 'hidden'],
                color: tan,
                content: null,
                size: 20,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-meh', 'hidden'],
                color: blue,
                content: null,
                size: 20,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-grin-alt', 'hidden'],
                color: yellow,
                content: null,
                size: 20,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-sad-cry', 'hidden'],
                color: red,
                content: null,
                size: 20,
                transform: null,
                position: [50, 50],
                filter: null,
            },
        ],
        answer: [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4],
        start: null,
        finish: null,
        main: function (icon, i) {
            // console.log(clickCount);
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[1]);
                    // console.log("Case 1");
                    break;
                case 2:
                    hide(icons[i]);
                    unhide(icons[i + 1]);
                    // console.log("Case 2");
                    break;
                case 6:
                    hide(icons[i]);
                    unhide(icons[i + 1]);
                    // console.log("Case 6");
                    break;
                case 11:
                    hide(icons[i]);
                    unhide(icons[i + 1]);
                    // console.log("Case 11");

                    //You use PInstr, PIcon, PIconPlus because you need to pass the arguments to the timeoutID function. There is a scope issue if you don't use those 3.
                    PInstr = this.instructions[2];
                    PIcon = icons[i + 1];
                    PIconPlus = icons[i + 2];
                    timeoutId = setTimeout(function (PInstr, PIcon, PIconPlus) {
                        changeInstructions(PInstr);
                        hide(PIcon);
                        unhide(PIconPlus);
                        timeoutId = setTimeout(function () {
                            failScene();
                        }, 2000);
                    }, 3000, PInstr, PIcon, PIconPlus);
                    break;
            }
        },
    },
    {
        instructions: [''],
        icons: [{
            class: ['text-icon'],
            color: black,
            content: "Hint: It's the green one.",
            size: 4,
            transform: null,
            position: [50, 50],
            filter: 'none',
        }, ],
        answer: [],
        start: function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                level++;
                nextScene();
            }, 3000)
        },
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click the red ghost seven times.', '', ],
        icons: [{
            class: ['fas', 'fa-ghost'],
            color: red,
            content: null,
            size: 18,
            transform: null,
            position: [50, 50],
            filter: null,
        }, ],
        answer: [0, 0, 0, 0, 0, 0, 0],
        start: null,
        finish: null,
        main: function (icon, i) {
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[1]);
                    break;
                case 4:
                    moveIcon(0, 25, 50);
                    break;
            }
        },
    },
    {
        instructions: ['Which has the most carats?'],
        icons: [{
                class: ['fas', 'fa-carrot'],
                color: tan,
                content: null,
                size: 6,
                transform: 'rotate(30deg)',
                position: [20, 62],
                filter: null,
            },
            {
                class: ['fas', 'fa-carrot'],
                color: tan,
                content: null,
                size: 6.5,
                transform: 'rotate(50deg)',
                position: [50, 60],
                filter: null,
            },
            {
                class: ['fas', 'fa-carrot'],
                color: tan,
                content: null,
                size: 6,
                transform: 'rotate(35deg)',
                position: [50, 62],
                filter: null,
            },
            {
                class: ['fas', 'fa-carrot'],
                color: tan,
                content: null,
                size: 6,
                transform: 'rotate(20deg)',
                position: [50, 64],
                filter: null,
            },
            {
                class: ['fas', 'fa-gem'],
                color: blue,
                content: null,
                size: 6,
                transform: null,
                position: [80, 62],
                filter: null,
            },
        ],
        answer: [4],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: [
            'From smallest to biggest, click the numbers, based on their size.', '',
        ],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: '3',
                size: 2,
                transform: null,
                position: [20, 20],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: '15',
                size: 10,
                transform: null,
                position: [20, 80],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: '16',
                size: 7,
                transform: null,
                position: [50, 50],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: '24',
                size: 13,
                transform: null,
                position: [80, 30],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: '38',
                size: 4,
                transform: null,
                position: [80, 80],
                filter: 'none',
            },
        ],
        answer: [0, 4, 2, 1, 3],
        start: null,
        finish: null,
        main: function (icon, i) {
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[1]);
                    hide(icons[i]);
                    moveIcon(1, 80, 80); //15
                    moveIcon(2, 45, 50); //16
                    moveIcon(3, 30, 80); //24
                    moveIcon(4, 80, 30); //38
                    break;

                case 2:
                    hide(icons[i]);
                    moveIcon(1, 80, 45); //15
                    moveIcon(2, 45, 65); //16
                    moveIcon(3, 80, 70); //24
                    break;

                case 3:
                    hide(icons[i]);
                    moveIcon(1, 40, 60); //15
                    moveIcon(3, 80, 45); //24
                    break;

                case 4:
                    hide(icons[i]);
                    moveIcon(3, 25, 75); //24
                    break;
            }
        },
    },
    {
        instructions: ["You're doing great so far..."],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: 'start over',
                size: 2.7,
                transform: null,
                position: [44, 51],
                filter: 'drop-shadow(2px 2px 0px rgba(200, 200, 200, 1))',
            },
            {
                class: ['fas', 'fa-apple-alt'],
                color: red,
                content: null,
                size: 8,
                transform: null,
                position: [57, 50],
                filter: null,
            },
            {
                class: ['text-icon', 'titan-one'],
                color: white,
                content: 'FREE',
                size: 1.8,
                transform: null,
                position: [57, 51],
                filter: 'none',
            },
        ],
        answer: [],
        start: function () {
            timeoutId = setTimeout(function () {
                level++;
                nextScene();
            }, 8000)
        },
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click North, then South twice.', '', ],
        icons: [{
                class: ['fas', 'fa-expand-arrows-alt'],
                color: black,
                content: null,
                size: 15,
                transform: 'rotate(45deg)',
                position: [50, 50],
                filter: 'none',
            },
            {
                class: ['text-icon', 'titan-one'],
                color: black,
                content: 'N',
                size: 7,
                transform: null,
                position: [50, 18],
                filter: 'none',
            },
            {
                class: ['text-icon', 'titan-one'],
                color: black,
                content: 'S',
                size: 7,
                transform: null,
                position: [50, 80],
                filter: 'none',
            },
            {
                class: ['text-icon', 'titan-one'],
                color: black,
                content: 'W',
                size: 7,
                transform: null,
                position: [25, 50],
                filter: 'none',
            },
            {
                class: ['text-icon', 'titan-one'],
                color: black,
                content: 'E',
                size: 7,
                transform: null,
                position: [73, 50],
                filter: 'none',
            },
        ],
        answer: [1, 2, 2],
        start: null,
        finish: null,
        main: function (icon, i) {
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[1]);
                    break;
                case 2:
                    moveIcon(1, 50, 80);
                    moveIcon(2, 50, 18);
                    moveIcon(3, 73, 50);
                    moveIcon(4, 25, 50);
                    break;
            }
        },
    },
    {
        instructions: [''],
        icons: a4(),
        answer: [],
        start: function () {
            timeoutId = setTimeout(function () {
                level++;
                nextScene();
            }, 4000)
        },
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Which number made the shape?'],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: 'A',
                size: 14,
                transform: null,
                position: [20, 50],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: '4',
                size: 14,
                transform: null,
                position: [40, 50],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'N',
                size: 14,
                transform: null,
                position: [60, 50],
                filter: 'none',
            },
            {
                class: ['text-icon'],
                color: black,
                content: '2',
                size: 14,
                transform: null,
                position: [80, 50],
                filter: 'none',
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['Click your right blinker.'],
        icons: [{
                class: ['fas', 'fa-car'],
                color: black,
                content: null,
                size: 14,
                transform: null,
                position: [50, 50],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-caret-left'],
                color: black,
                content: null,
                size: 10,
                transform: null,
                position: [25, 45],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-caret-right'],
                color: black,
                content: null,
                size: 10,
                transform: null,
                position: [75, 45],
                filter: 'none',
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: [''],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: red,
                content: null,
                size: 10,
                transform: null,
                position: [30, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: green,
                content: null,
                size: 10,
                transform: null,
                position: [30, 70],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: yellow,
                content: null,
                size: 10,
                transform: null,
                position: [70, 30],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: blue,
                content: null,
                size: 10,
                transform: null,
                position: [70, 70],
                filter: null,
            },
        ],
        answer: [1],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ["Don't touch the dad, touch the sun."],
        icons: [{
                class: ['fas', 'fa-sun'],
                color: yellow,
                content: null,
                size: 10,
                transform: null,
                position: [2, 20],
                filter: null,
            },
            {
                class: ['fas', 'fa-male'],
                color: black,
                content: null,
                size: 30,
                transform: null,
                position: [54.5, 60],
                filter: null,
            },
            {
                class: ['fas', 'fa-child'],
                color: black,
                content: null,
                size: 15,
                transform: null,
                position: [68, 77.5],
                filter: null,
            },
        ],
        answer: [0],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ["Touch the yellow ghost ten times."],
        icons: [{
                class: ['fas', 'fa-ghost'],
                color: yellow,
                content: null,
                size: 15,
                transform: null,
                position: [50, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost', 'hidden'],
                color: green,
                content: null,
                size: 15,
                transform: null,
                position: [80, 70],
                filter: null,
            },
        ],
        answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        start: null,
        finish: null,
        main: function (icon, i) {
            // console.log(clickCount);
            switch (clickCount) {
                case 1:
                    changeInstructions(this.instructions[1]);
                    break;

                case 3:
                    moveIcon(0, 80, 70);
                    break;

                case 7:
                    hide(icons[i]);
                    unhide(icons[i + 1]);
                    PIcon = icons[i];
                    PIconPlus = icons[i + 1];
                    timeoutId = setTimeout(function (PIcon, PIconPlus) {
                        hide(PIconPlus);
                        unhide(PIcon);
                    }, 3000, PIcon, PIconPlus);
                    break;
            }
        },
    },
    {
        instructions: ["You are getting close!"],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: 'Now is not the time to mess up.',
                size: 3,
                transform: null,
                position: [50, 17],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'Just keep reading.',
                size: 2.5,
                transform: null,
                position: [50, 26],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'The time is ticking.',
                size: 2.5,
                transform: null,
                position: [50, 34],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'You wasted at least 5 seconds reading this.',
                size: 2,
                transform: null,
                position: [50, 42],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'Smash the smallest',
                size: 2,
                transform: null,
                position: [41, 50],
                filter: null,
            },
            {
                class: ['text-icon'],
                color: black,
                content: 'to continue',
                size: 2,
                transform: null,
                position: [61, 50],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 2,
                transform: null,
                position: [53, 50],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 4,
                transform: null,
                position: [18, 80],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 6,
                transform: null,
                position: [37, 80],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 12,
                transform: null,
                position: [62, 79],
                filter: null,
            },
            {
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 3,
                transform: null,
                position: [83, 80],
                filter: null,
            },
        ],
        answer: [6],
        start: null,
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ["Quick! Touch the blue ghost!"],
        icons: [{
                class: ['fas', 'fa-bug'],
                color: black,
                content: null,
                size: 13,
                transform: null,
                position: [20, 28],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: blue,
                content: null,
                size: 13,
                transform: null,
                position: [40, 69],
                filter: null,
            },
            {
                class: ['fas', 'fa-ghost'],
                color: green,
                content: null,
                size: 13,
                transform: null,
                position: [60, 31],
                filter: null,
            },
            {
                class: ['fas', 'fa-frog'],
                color: lime,
                content: null,
                size: 13,
                transform: null,
                position: [80, 72],
                filter: null,
            },
        ],
        answer: [1],
        start: function () {
            timeoutId = setTimeout(function () {
                failScene();
            }, 3000)
        },
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: [""],
        icons: [{
                class: ['text-icon'],
                color: black,
                content: "Touch the up arrow.",
                size: 4,
                transform: null,
                position: [50, 50],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-arrow-down', 'hidden'],
                color: red,
                content: null,
                size: 15,
                transform: null,
                position: [50, 50],
                filter: 'none',
            },
            {
                class: ['fas', 'fa-arrow-down', 'hidden'],
                color: green,
                content: null,
                size: 15,
                transform: null,
                position: [50, 50],
                filter: 'none',
            }
        ],
        answer: [2],
        start: function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                hide(icons[0]);
                unhide(icons[1]);
                timeoutId = setTimeout(function () {
                    rotateScreen(180);
                    hide(icons[1]);
                    unhide(icons[2]);
                }, 1000);
            }, 2000);
        },
        finish: null,
        main: function (icon, i) {},
    },
    {
        instructions: ['You made it!!!!.'],
        icons: [{
            class: ['text-icon'],
            color: black,
            content: "You're a certified",
            size: 4,
            transform: null,
            position: [50, 20],
            filter: 'none',
        }, {
            class: ['text-icon'],
            color: black,
            content: "GENIUS",
            size: 4,
            transform: null,
            position: [50, 30],
            filter: 'none',
        }, {
            class: ['fas', 'fa-grin-beam-sweat'],
            color: yellow,
            content: null,
            size: 26,
            transform: null,
            position: [50, 60],
            filter: null,
        }, ],
        answer: [],
        start: function () {
            stopTimer();
        },
        finish: null,
        main: function (icon, i) {},
    },
];

const fail = [{
    icons: [{
            class: ['fas', 'fa-tired'],
            color: yellow,
            content: null,
            size: 25,
            transform: null,
            position: [60, 50],
            filter: null,
        },
        {
            class: ['fail'],
            color: black,
            content: 'you can haz',
            size: 6,
            transform: 'rotate(-15deg)',
            position: [37, 14],
            filter: null,
        },
        {
            class: ['fail'],
            color: red,
            content: 'fail!',
            size: 14,
            transform: 'rotate(-15deg)',
            position: [40, 38],
            filter: null,
        },
        {
            class: ['fail'],
            color: black,
            content: 'try again?',
            size: 7,
            transform: null,
            position: [42, 69],
            filter: null,
        },
    ]
}]