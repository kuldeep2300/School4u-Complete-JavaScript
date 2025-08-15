const display = document.querySelector(".display");
const buttonContainer = document.querySelector(".buttonContainer");

let currentInput = "0";
let errorState = false;

buttonContainer.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return; // If other than button

  // Value
  let value = event.target.textContent;

  // Clear button
  if (event.target.classList.contains("clearBtn")) {
    resetCalculator();
    return;
  }

  // Equal to
  if (event.target.classList.contains("equalTo")) {
    calculateResult();
    return;
  }

  handleInput(value); // Taking number input
  updateDisplay(); // Displaying on the screen
});

// Reset Calculator function
function resetCalculator() {
  currentInput = "0";
  errorState = false;
  updateDisplay();
}

// Handle Input
function handleInput(value) {
  if (errorState) {
    // Reset the button for numbers & .
    if (!isNaN(value) || value === ".") {
      currentInput = value; // Replace error with current value
      errorState = false;
    } else {
      // other than number like operator do nothing return
      return;
    }
  } else {
    if (currentInput === "0" && !isNaN(value)) {
      currentInput = value; // replace 0 with value
    } else {
      let lastChar = currentInput.slice(-1);
      if (isOperator(lastChar) && isOperator(value)) {
        // Prevent Multiple consecutive operators
        showError("Error");
        return;
      }

      currentInput += value;
    }
  }
}

// Show Error
function showError(string) {
    currentInput = string;
    errorState = true;
    updateDisplay();
}

// Calculate Result 
function calculateResult() {
    // Prevent last char to be operator
    let lastChar = currentInput.slice(-1);
    if(isOperator(lastChar)) {
        showError('Error');
        errorState = true;
        return;
    }

    let result = eval(currentInput);

    if(!isFinite(result)) {
        showError('Infinity');
        errorState = true;
        return;
    }

    // eval return result in integer that why we have to convert into string so that character can be added to currentInput
    currentInput = result.toString();
    updateDisplay();
}

// Update Display
function updateDisplay() {
    display.innerText = currentInput;
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}
