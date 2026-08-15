var randomNumber = Math.floor((Math.random() * 100) + 1);           // produces a random number between 1 and 100
var guesses = 0;                                                    // keeps track of the user's guesses

var message = document.querySelector(".responseMessage");           // the display message
var submitButton = document.querySelector(".submitButton");         // the guess button
var resetButton = document.querySelector(".resetButton");           // the guess button
var victoryPuppy = document.querySelector(".firstTryImage");        // dancing dog gif

// submit button click
document.querySelector(".submitButton").addEventListener("click", function () {
    var userGuess = document.getElementById("numberInput"); // the user's guess
    guesses++;

    if (userGuess.valueAsNumber > 100) {
        message.innerHTML = "You're higher than Snoop Dogg! ⛰️";
    } else if (userGuess.valueAsNumber < 1) {
        message.innerHTML = "If you go lower you'll find gold! 💰";
    } else if (userGuess.valueAsNumber > randomNumber) {
        message.innerHTML = "⬇️ " + userGuess.value + " is too high, go lower ⬇️";
    } else if (userGuess.valueAsNumber < randomNumber) {
        message.innerHTML = "⬆️ " + userGuess.value + " is too low, go higher ⬆️";
    } else if (userGuess.valueAsNumber == randomNumber) {
        message.innerHTML = "You got it in " + guesses + " tries!";

        if (guesses == 1){
            message.innerHTML = "You got it on your first try!<br />You must be a mind reader!";
            victoryPuppy.classList.remove("invisible");
        }

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
    victoryPuppy.classList.add("invisible");
    randomNumber = Math.floor((Math.random() * 100) + 1);       // makes a new random number
    guesses = 0;
});
