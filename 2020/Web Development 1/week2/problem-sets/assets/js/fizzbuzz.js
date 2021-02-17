//4. FizzBuzz – This is a classic loop problem for which the solution exists in a myriad of languages and methods. Write a program that console.log’s the numbers 1 to 100. Except log for numbers divisible by 3 log “Fizz”, numbers divisible by 5 log “Buzz”, and numbers divisible by both 3 and 5 log “FizzBuzz”.

for (let i = 1; i < 101; i++) {

    console.log(i);
    if ((i % 3) === 0) {
        console.log("Fizz");
    } else if ((i % 5) === 0) {
        console.log("Fizz");
    }
}