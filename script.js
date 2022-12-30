const buttons = document.querySelectorAll('.buttons')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.id);
    });
});

let input1 = 0;
let input2 = 0;
let inputOp = "";

function display(keyInput) {
    const currentDisp = document.querySelector('.disp');
    const crashMat = "Not TOday N00B!!!";
    if (currentDisp.textContent == crashMat) {
        currentDisp.textContent = "";
    }
    if (keyInput == "+" || keyInput == "-" || keyInput == "*" || keyInput == "/") {
        if (inputOp != "") {
            let solution = operate(inputOp, input1, input2);
            currentDisp.textContent = solution + `${keyInput} `;
            input1 = solution;
            input2 = 0;
            inputOp = keyInput;
        } else {
        inputOp = keyInput;
        currentDisp.textContent = currentDisp.textContent + ` ${keyInput} `;
        }
    } else if (keyInput == "=") {
        let solution = operate(inputOp, input1, input2);
        currentDisp.textContent = solution;
        input1 = solution;
        input2 = 0;
        inputOp = "";
    } else if (keyInput == "clear") {
        currentDisp.textContent = "";
        inputOp = "";
        input1 = 0;
        input2 = 0;
    } else {
        if (inputOp != "") {
            input2 = input2 + keyInput;
            if (input1 == "00" && inputOp == "/" && input2 == "00") {
                currentDisp.textContent = crashMat;
                input1 = 0;
                input2 = 0
                inputOp = "";
            } else {
            currentDisp.textContent = currentDisp.textContent + keyInput;
            }
        } else {
            input1 = input1 + keyInput;
            currentDisp.textContent = currentDisp.textContent + keyInput;
        }
    }
    if (currentDisp.textContent.length > 16) {
        const display = currentDisp.textContent.slice(0,16);
        currentDisp.textContent = display;
    }
}

function add(num1, num2) {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    let sum = (int1 + int2);
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
        return
    }
}


