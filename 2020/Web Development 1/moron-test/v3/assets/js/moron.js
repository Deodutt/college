const iconSpace = document.querySelector('.icons');
const instructionSpace = document.querySelector('.instructions');
let level = 0;




function drawScene(level) {
    clearIcons();
    clearInstruction();
    mapIcons(level);
    mapInstructions(level);
}





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