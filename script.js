let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function clearDisplay() {
    display.innerText = '0';
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}

function deleteDigit() {
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') {
        currentOperand = '0';
    }
    display.innerText = currentOperand;
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand = currentOperand.toString() + number.toString();
    }
    display.innerText = currentOperand;
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    display.innerText = currentOperand;
}
