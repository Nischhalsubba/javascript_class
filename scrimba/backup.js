<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculator</title>

    <style>
        .calculator {
            width: 300px;
            height: 300px;
            border: 1px solid black;
        }

        .display {
            width: 100%;
            height: 70px;
            border: 1px solid grey;
            font-size: 30px;
            text-indent: 10px;
            position: relative;
        }

        .display .sign {
            position: absolute;
            right: 20px;
            top: 10px;
            font-size: 0.8em;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        button {
            background: transparent;
            color: black;
            border: 1px solid grey;
            margin: 5px;
            padding: 5px 0;
        }
    </style>

</head>

<body>
    <div class="calculator">
        <div class="display" id="display">
            <span id="display_number">0</span>

            <div class="sign" id="operator_sign">
            </div>
        </div>

        <div class="buttons">
            <button type="button" value="+" class="operations">+</button>
            <button type="button" value="-" class="operations">-</button>
            <button type="button" value="*" class="operations">*</button>
            <button type="button" value="/" class="operations">/</button>

            <button type="button" value="9" class="numbers">9</button>
            <button type="button" value="8" class="numbers">8</button>
            <button type="button" value="7" class="numbers">7</button>
            <button type="button" value="6" class="numbers">6</button>

            <button type="button" value="5" class="numbers">5</button>
            <button type="button" value="4" class="numbers">4</button>
            <button type="button" value="3" class="numbers">3</button>
            <button type="button" value="2" class="numbers">2</button>

            <button type="button" value="1" class="numbers">1</button>
            <button type="button" value="0" class="numbers">0</button>
            <!--<button type="button" value="." class="decimal">.</button>-->
            <button type="button" class="reset">AC</button>
            <button type="button" value="=" id="show_result">=</button>
        </div>
    </div>


    <script>
        //Storing value in the variable from HTML DOM
        var sign = document.getElementById("operator_sign");
        var display = document.getElementById("display_number");
        var num1;
        var num2;
        var operator;
        var arrMulti = [];
        //Adding event listener
        numbers_buttons = document.getElementsByClassName('numbers');
        for (i = 0; i < numbers_buttons.length; i++) {
            numbers_buttons[i].addEventListener("click", number_click_callback);
        }


        operations_buttons = document.getElementsByClassName('operations');
        for (i = 0; i < operations_buttons.length; i++) {
            operations_buttons[i].addEventListener("click", operation_click_callback);
        }


        operations_buttons = document.getElementById('show_result').addEventListener("click",
            show_result_click_callback);;

        //document.getElementsByClassName('numbers').addEventListener("click", updateDisplay);

        //document.getElementsByClassName('operations').addEventListener("click", updateDisplay);

        //Updating display
        function number_click_callback() {

            number_in_action = this.innerText;

            if (display.innerText == 0)
                display.innerText = '';
            display.innerText += number_in_action;
        }


        function operation_click_callback() {
            operation_type = this.innerText;
            num1 = display.innerText; //store exsiting display value on num1;
            operator = operation_type; //store operaton type to calculate later on equals to press
            sign.innerHTML = operator; //to show for user what operotor is being made
            numb1 = arrMulti[num1];
            display.innerText = ''; //clear the display for new number
        }

        function show_result_click_callback() {
            num2 = display.innerText;
            sign.innerHTML = "";

            if (operator == "+")
                display.innerText = parseInt(num1) + parseInt(num2);
            else if (operator == "-")
                display.innerText = parseInt(num1) - parseInt(num2);
            else if (operator == "/")
                display.innerText = parseInt(num1) / parseInt(num2);
            else if (operator == "*")
                display.innerText = parseInt(num1) * parseInt(num2);
        }
    </script>
</body>

</html>