//5. Guessing Game between 1 and 100 – Write a program that generates a random whole number between 1 and 100 and then prompts a user to guess the number. If the guess is less than the answer given, prompt the user with the hint that the number is lower than the one guessed. If the guess is higher than the answer given, prompt the user with the clue that the number is higher than the one guessed. If the user guesses correctly, alert the user that they have guessed the answer. Be sure to report the correctly guessed number in the alert.

let random = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Guess a number between 1 and 100");

while (guess != random) {
    if (random > guess) {
        guess = prompt(`The number ${guess} is too low, try again.`);
    } else {
        guess = prompt(`The number ${guess} is too high, try again.`);
    }

}
alert(`The number ${guess} is correct!!`);