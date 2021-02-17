let p = prompt("Enter a phrase");

function climbingTheMountain(p) {
    for (let i = p.length; i > 0; i--) {
        let stair = p[i - 1];
        let spaces = "";

        for (let j = 0; j < i; j++) {
            spaces += " ";
        }
        console.log(spaces + stair);
    }
}

climbingTheMountain(p);