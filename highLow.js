var randomNumber = Math.floor((Math.random() * 100) + 1);           // produces a random number between 1 and 100
var guesses = 0;                                                    // keeps track of the user's guesses

var message = document.querySelector(".responseMessage");           // the display message
var submitButton = document.querySelector(".submitButton");         // the guess button
var resetButton = document.querySelector(".resetButton");           // the guess button

// submit button click
document.querySelector(".submitButton").addEventListener("click", function () {
    var userGuess = document.getElementById("numberInput"); // the user's guess
    guesses++;

    if (userGuess.valueAsNumber > randomNumber) {
        message.innerHTML = userGuess.value + " is too high!";
    } else if (userGuess.valueAsNumber < randomNumber) {
        message.innerHTML = userGuess.value + " is too low!";
    } else if (userGuess.valueAsNumber == randomNumber) {
        message.innerHTML = "You got it in " + guesses + " tries!";
        message.classList.add("victory");
        userGuess.classList.add("invisible");
        submitButton.classList.add("invisible");
        resetButton.classList.remove("invisible");
        userGuess.value = "";
    } else {
        message.innerHTML = "Sorry I don't understand that (⊙_⊙)？";
        guesses--;
    }
});

// reset button click
document.querySelector(".resetButton").addEventListener("click", function () {
    message.classList.remove("victory");
    message.innerHTML = "Welcome back I got a new number!";
    document.getElementById("numberInput").classList.remove("invisible");
    submitButton.classList.remove("invisible");
    resetButton.classList.add("invisible");
    randomNumber = Math.floor((Math.random() * 100) + 1);       // makes a new random number
    guesses = 0;
});
