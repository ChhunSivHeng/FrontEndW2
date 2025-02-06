// passowrd: 1234
const SECRET_CODE = "1234"; // Change as needed
let chancesRemaining = localStorage.getItem("chances") 
    ? parseInt(localStorage.getItem("chances")) 
    : 3;

const passwordInput = document.getElementById("passwordInput");
const checkButton = document.getElementById("checkButton");
const tryAgainButton = document.getElementById("tryAgainButton");

const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const instructionLabel = document.getElementById("instructionLabel");
const lostMessage = document.createElement("p");
//lose message
lostMessage.style.color = "white";
lostMessage.style.fontSize = "1.5rem";
lostMessage.style.fontWeight = "bold";
lostMessage.style.marginTop = "1rem";
lostView.appendChild(lostMessage);

// show view
function show(element) {
    element.style.display = "block";
}

// hide view
function hide(element) {
    element.style.display = "none";
}
function checkCode() {
    const enteredCode = passwordInput.value;
    if (enteredCode === SECRET_CODE) {
        // show viwe win lost try again
        hide(passwordView);
        hide(lostView);
        show(wonView);
        localStorage.setItem("gameWon", "true");
    } else {
        chancesRemaining--;
        localStorage.setItem("chances", chancesRemaining);

        if (chancesRemaining > 0) {
            hide(passwordView);
            show(lostView);
            lostMessage.innerHTML = `Try again! (${chancesRemaining} chances left)`;
        } else {
            lostMessage.innerHTML = "You lost!";
            checkButton.disabled = true;
        }
    }
}

// reset game
function resetGame() {
    chancesRemaining = 3;
    localStorage.setItem("chances", "3");
    localStorage.removeItem("gameWon");
    hide(lostView);
    hide(wonView);
    show(passwordView);
    instructionLabel.textContent = "Enter your code (You can try 3 times only!)";
    checkButton.disabled = false;
}

checkButton.addEventListener("click", checkCode);
tryAgainButton.addEventListener("click", resetGame);
if (localStorage.getItem("gameWon") === "true") {
    hide(passwordView);
    hide(lostView);
    show(wonView);
} else if (chancesRemaining === 0) {
    hide(passwordView);
    show(lostView);
    lostMessage.innerHTML = "You lost!";
    checkButton.disabled = true;
} else if (chancesRemaining < 3) {
    hide(passwordView);
    show(lostView);
    lostMessage.innerHTML = `Try again! (${chancesRemaining} chances left)`;
}
