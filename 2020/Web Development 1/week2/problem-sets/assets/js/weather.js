//3. What’s the weather? Write a program that asks a user what the weather looks like today. Using a switch statement, have your program respond with advice to the following answers, “rain”, “cloudy”, “sunny”, “cold”,  “hot”, and for all other answers let the user know, “I don’t have any advice for you today, sorry.”

let question1 = prompt("What does the weather look like today?");

switch (question1) {
    case "rain":
        alert("Wear a raincoat.");
        break;

    case "cloudy":
        alert("Be alarmed, it might rain eventually.");
        break;
    case "sunny":
        alert("Go get a tan outside.");
        break;
    case "cold":
        alert("Wear your winter coats.");
        break;
    case "hot":
        alert("Dress lightly and use sunblock.");
        break;

    default:
        alert("I don't have any advice today, sorry.");
}