let inputCount = 0;
const TOTAL = 4;

function handleInput(event) {
  if (event.target.value === "") inputCount -= 1;
  else inputCount += 1;
  if (inputCount === TOTAL)
    document.getElementById("signup-button").style.backgroundColor = "#0095F6";
  else
    document.getElementById("signup-button").style.backgroundColor = "#4DB5F9";
}
