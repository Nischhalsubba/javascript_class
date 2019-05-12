var modal = document.getElementById('login_modal');

var button = document.getElementById('btn');

button.onclick = function () {
    modal.style.display = "block";
}


// Javascript for calculator
var numbers = document.querySelectorAll('.numbers');

var operators = document.querySelectorAll('.operators');

var equals = document.querySelectorAll('.equals');

//varaible used while calculation
var oldValue = null;

var newValue = null;

var operator = null;


// onclick 
for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function (e) {

        var number = e.srcElement.value;

        var parsedNumber = parseInt(number);

        if (!isNaN(parsedNumber)) {
            if (!newValue) {
                newValue = parsedNumber;
            } else {
                newValue = parseInt(`${newValue}${parsedNumber}`);
                console.log(newValue);
            }
            document.querySelector('.display').innerText = newValue;
        }
    }
}

// getting operators
for (var i = 0; i < operators.length; i++) {
    operators[i].onclick = function (e) {
        var operatorClicked = e.srcElement.value;
        operator = operatorClicked
        console.log(operator)
        oldValue = newValue
        newValue = null
    }
}

function checkForOperation(operator) {
    if (!oldValue) {
        oldValue = 0;
    }

    switch (operator) {
        case 'add':
            return add(oldValue, newValue)
            break;
        case 'substract':
            return substract(oldValue, newValue)
            break;
        case 'multiply':
            return multiply(oldValue, newValue)
            break;
        case 'divide':
            return divide(oldValue, newValue)
            break;

        default:
            break;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

equals.onclick = function (e) {
    var result = checkForOperation(operator)
    console.log('result', result)
    newValue = result
    document.getElementById('#display').innerText = result
}