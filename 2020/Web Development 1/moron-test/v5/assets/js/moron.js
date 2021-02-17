const iconSpace = document.querySelector('.icons');
const instructionSpace = document.querySelector('.instructions');
let level = 0;
let icons;
let clickCount = 0;



function drawScene(level) {
    mapIcons(level);
    mapInstructions(level);
}

function playScene() {
    icons = document.querySelectorAll('i');
    let iconsArr = [...icons];
    iconsArr.forEach(function (icon, indx) {
        icon.addEventListener('click', function () {
            check(icon, indx);
        })
    })
}

function nextScene() {
    clearIcons();
    clearInstruction();
    drawScene(level);
    clickCount = 0;
    playScene();
}

function check(icon, indx) {
    let answer = scene[level].answer[clickCount];
    let clicksNeeded = scene[level].answer.length;
    if (indx === answer) {
        clickCount++
        scene[level].main(icon, indx);
        if (clickCount === clicksNeeded) {
            console.log('scene complete');
            level++
            nextScene();
        }
    } else {
        console.log('wrong icon!')
    }
}

// for (let i = 0; i < icons.length; i++) {
//     icons[i].addEventListener('click', function () {
//         console.log('clicked');
//     })
// }
//this does not work because we don't know which icon is being clicked.


// we want to turn nodelist into an Array.. so we can use a forEach method. the forEeach method let us know the value and index of the value.

//the spread operator allows an iterable such as nodelist
//spread operator deals with multiple classes with icons. The spread operator because it looks at many arguements in an function and it passes it and adds it at one time.

//We set iconArr equal an emepty array with the spread operator calling each of the icons from the nodelist.





//firstElementChild selector which selects the first child of a parents element.

iconSpace.firstElementChild;
// iconSpace.removeChild(iconSpace.firstElementChild);
//removeChild method to pass the value of the firstElement to remove.

function clearIcons() {
    while (iconSpace.firstElementChild) {
        iconSpace.removeChild(iconSpace.firstElementChild);
    }
}

// iconSpace.appendChild(document.createElement("i"));
// iconSpace.appendChild(build(scene02Icons));

function mapIcons(level) {
    scene[level].icons.forEach(function (iconObj) {
        iconSpace.appendChild(build(iconObj));
    })
}


function hide(el) {
    el.classList.add('hidden');
}

function moveIcon(indx, left, top) {
    icons[indx].style.left = `${left}%`;
    icons[indx].style.top = `${top}%`;
}

function clearInstruction() {
    while (instructionSpace.firstElementChild) {
        instructionSpace.removeChild(instructionSpace.firstElementChild);
    }
}




function mapInstructions(level) {
    let newInstr = document.createElement('h2');
    newInstr.textContent = scene[level].instructions[0];
    instructionSpace.appendChild(newInstr);
}


function changeInstructions(text) {
    let instr = document.querySelector('.instructions h2');
    instr.textContent = text;
}


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