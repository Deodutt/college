let age = prompt("Welcome to the club. Before you enter, how old are you?");


// checks if the age is under 0.
if (age < 18) {
    alert("Get out of here! Your not old enough to enter.");
}

//  less than 21 but older than 18.
else if (age < 21) {
    alert("You may pass, but you cannot drink!");
}

// else
else {
    alert("Come on in. You can drink here.")
}