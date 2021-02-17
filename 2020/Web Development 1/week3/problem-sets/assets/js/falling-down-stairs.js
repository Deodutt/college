let p = prompt("Enter a phrase");

function fallingDownStairs(p) {
    let spaces = "";
    for (let i = 0; i < p.length; i++) {
        console.log(spaces + p[i]);
        spaces += " ";
    }
}

fallingDownStairs(p);