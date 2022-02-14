const form = document.querySelector("#game-form");
const rangeInput = document.querySelector("#range-number");
const guessInput = document.querySelector("#guess-number");
const choose = document.querySelector("#choose");
const result = document.querySelector("#result");


function handleSubmit(event) {
    event.preventDefault();
    const range = parseInt(rangeInput.value);
    const guess = parseInt(guessInput.value);
    const randNumber = parseInt(Math.floor(Math.random() * (range + 1)));
    choose.innerText = `You choose: ${guess}, the machin choose: ${randNumber}.`;
    if (guess === randNumber) {
        result.innerText=`You won!`
    } else {
        result.innerText=`You lost!`
    }

}
function handleInputChange() {
    guessInput.max = rangeInput.value;
}
rangeInput.addEventListener("change", handleInputChange);
form.addEventListener("submit", handleSubmit);