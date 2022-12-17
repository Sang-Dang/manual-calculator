var operatorToggle = false;

var firstNumber;
var secondNumber;
var operator;

function toDisplay(num) {
    if(!document.getElementById("number-display").value.match(/^[0-9]+$/)) {
        document.getElementById("number-display").value = "";
        document.getElementById("previous-number-display").value = "";
        document.getElementById("operator-display").value = "";
    }
    if(num.classList[1] == "number") {
        if(operatorToggle == true) {
            operatorToggle = false;
            document.getElementById("number-display").value = "";
        }
        document.getElementById("number-display").value += num.innerHTML;
    }

    if(num.classList[1] == "operator" && document.getElementById("number-display").value != "") {
        document.getElementById("operator-display").value = num.innerHTML;
        document.getElementById("previous-number-display").value = document.getElementById("number-display").value;
        operator = num.innerHTML;
        firstNumber = parseFloat(document.getElementById("number-display").value);

        operatorToggle = true;
    }
}

function clear_backspace() {
    if(document.getElementById("number-display").value == "") {
        if(document.getElementById("operator-display").value == "") {
            document.getElementById("previous-number-display").value = "";
            firstNumber = null;
        } else {
            document.getElementById("operator-display").value = "";
            operator = null;
        }
    } else {
        document.getElementById("number-display").value = document.getElementById("number-display").value.slice(0, -1);
        if(document.getElementById("number-display").value == "") {
            firstNumber = null;
        }
    }
}

function clear_all() {
    var displays = document.getElementsByClassName("display");
    for(var i = 0; i < displays.length; i++) {
        displays[i].value = "";
    }

    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function calculate() {
    secondNumber = parseFloat(document.getElementById("number-display").value);
    if(firstNumber != null && secondNumber != null && operator != null) {
        console.log("calculate: " + firstNumber + " " + operator + " " + secondNumber);
        
        switch(operator) {
            case "+":
                document.getElementById("number-display").value = document.getElementById("previous-number-display").value = firstNumber + secondNumber;
                break;
            case "-":
                document.getElementById("number-display").value = document.getElementById("previous-number-display").value = firstNumber - secondNumber;
                break;
            case "x":
                document.getElementById("number-display").value = document.getElementById("previous-number-display").value = firstNumber * secondNumber;
                break;
            case "÷":
                document.getElementById("number-display").value = document.getElementById("previous-number-display").value = firstNumber / secondNumber;
                break;
            case "%":
                document.getElementById("number-display").value = document.getElementById("previous-number-display").value = firstNumber % secondNumber;
                break;
        }

        firstNumber = parseFloat(document.getElementById("number-display").value);
        operatorToggle = true;
    }
}