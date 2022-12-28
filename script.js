const buttons = document.querySelectorAll('.buttons')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.id);
    });
});

let input1 = 0;
let input2 = 0;
let inputOp = "";
let currentEq = "";

function display(keyInput) {
    const currentDisp = document.querySelector('.disp');

    if (keyInput == "+" || keyInput == "-" || keyInput == "*" || keyInput == "/") {
        input1 = currentEq;
        inputOp = keyInput;
    } else if (keyInput == "=") {
        operate(inputOp, input1, input2);
    } else if (keyInput == "clear") {
        currentDisp.textContent = "";
        currentEq = "";
        inputOp = "";
        input1 = 0;
        input2 = 0;
    } else {
        currentEq = currentDisp.textContent;
        currentDisp.textContent = currentEq + keyInput;
    }
}

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 - num2; 
    return difference;
}

function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
}

function divide(num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}

function operate(operator, operand1, operand2) {
    if (operator == "+") {
        return add(operand1, operand2);
    } else if (operator == "-") {
        return subtract(operand1, operand2);
    } else if (operator == "*") {
        return multiply(operand1, operand2);
    } else if (operator == "/") {
        return divide(operand1, operand2);
    } else {
        return "broke";
    }
}


