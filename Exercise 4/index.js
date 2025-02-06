//code 1234
const SECRET_CODE = "1234"; 
let chancesRemaining = 3;

const passwordInput = document.getElementById("passwordInput");
const checkButton = document.getElementById("checkButton");
const tryAgainButton = document.getElementById("tryAgainButton");
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");
const instructionLabel = document.getElementById("instructionLabel");
const lostMessage = document.createElement("p");
lostMessage.style.color = "white";
lostMessage.style.fontSize = "1.5rem";
lostMessage.style.fontWeight = "bold";
lostMessage.style.marginTop = "1rem";
lostView.appendChild(lostMessage);
function show(element) {
    element.style.display = "block";
}
function hide(element) {
    element.style.display = "none";
}
function checkCode() {
    const enteredCode = passwordInput.value;

    if (enteredCode === SECRET_CODE) {
        // win
        hide(passwordView);
        hide(lostView);
        show(wonView);
    } else {
        // chancesRemaining--;
        if (chancesRemaining > 1) {
            // wrong code
            chancesRemaining--;
            instructionLabel.textContent = `Wrong code! ${chancesRemaining} chances remaining`;
        } else {
            // no chancs
            hide(passwordView);
            show(lostView);
            checkButton.disabled = true;
        }
    }
}
// reset
function resetGame() {
    location.reload();
}

checkButton.addEventListener("click", checkCode);
tryAgainButton.addEventListener("click", resetGame);
