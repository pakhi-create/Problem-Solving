const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("ac")) {
      currentInput = "";
      operator = "";
      firstValue = null;
      display.value = "";
    } 
    else if (btn.classList.contains("del")) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } 
    else if (btn.classList.contains("op")) {
      if (firstValue === null) {
        firstValue = parseFloat(currentInput);
      } else {
        firstValue = calculate(firstValue, parseFloat(currentInput), operator);
      }
      operator = value;
      currentInput = "";
      display.value = firstValue;
    } 
    else if (btn.classList.contains("equal")) {
      if (firstValue !== null && operator !== "" && currentInput !== "") {
        firstValue = calculate(firstValue, parseFloat(currentInput), operator);
        display.value = firstValue;
        operator = "";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(a, b, op) {
  let result;
  switch (op) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": 
      result = b === 0 ? "Error" : a / b; 
      break;
    case "%": result = a % b; break;
    default: result = b;
  }
  return result;
}
