(function() {
    "use strict";

    let equation = [];

    function button_clicked() {
        let btn = this.innerHTML;
        let disp = document.getElementById('disp');

        // clicking the C button clear the screen and the equation, must start from first number again
        if (btn === "C") {
            disp.innerHTML = "&nbsp;";
            equation = [];
        } else {
            if (isNaN(btn)) {
                if (btn === ".") {
                    // cannot have more than one decimal point in a number
                    if (!disp.innerHTML.includes(".")) {
                        // a number can either start with a decimal point, or it can go after a number
                        if (disp.innerHTML === "&nbsp;" || disp.innerHTML === "+" || disp.innerHTML === "-"
                            || disp.innerHTML === "x" || disp.innerHTML === "/") {
                            disp.innerHTML = btn;
                        } else {
                            disp.innerHTML += btn;
                        }
                    }
                // equations cannot start with operators and operators cannot follow other operators
                } else if (disp.innerHTML !== "&nbsp;" && (!isNaN(disp.innerHTML) || disp.innerHTML !== ".")) {
                    if (btn === "+/=") {
                        // if there are already 2 numbers typed, then the +/= button functions to solve the equation
                        if (equation.length === 2) {
                            equation.push(disp.innerHTML);
                            // solve the equation
                            let ans;
                            switch (equation[1]) {
                                case "+":
                                    ans = +equation[0] + +equation[2];
                                    break;
                                case "-":
                                    ans = equation[0] - equation[2];
                                    break;
                                case "x":
                                    ans = equation[0] * equation[2];
                                    break;
                                case "/":
                                    ans = equation[0] / equation[2];
                                    break;
                            }
                            equation = [];
                            disp.innerHTML = ans;
                        // only 2 numbers can exist per equation in a 4 function calculator
                        // if there has only been one number type, the +/= button functions as addition
                        } else if (equation.length < 2) {
                            equation.push(disp.innerHTML);
                            disp.innerHTML = "+";
                            equation.push("+");
                        }
                    } else {
                        // this handles subtraction, multiplication, and division
                        // the length is check because only 2 numbers can exist per equation in a 4 function calculator,
                        // so if there is already a full equation, nothing registers.
                        // this calculator intentionally does not accommodate the typing of negative numbers, as there
                        // is no +/- button (the subtraction button does not have more than one function).
                        if (equation.length < 2) {
                            equation.push(disp.innerHTML);
                            disp.innerHTML = btn;
                            equation.push(btn);
                        }
                    }
                }
            } else {
                // numbers can either be the start of a new number, or adding a digit to an existing digit
                if (disp.innerHTML === "&nbsp;" || disp.innerHTML === "+" || disp.innerHTML === "-"
                    || disp.innerHTML === "x" || disp.innerHTML === "/") {
                    disp.innerHTML = btn;
                } else {
                    // the max length of a number in this calculator is 40 digits
                    if (disp.innerHTML.length < 40) {
                        disp.innerHTML += btn;
                    }
                }
            }
        }
    }

    function setup_button() {
        let btn1 = document.getElementById('btn-1');
        btn1.addEventListener('click', button_clicked, false);

        let btn2 = document.getElementById('btn-2');
        btn2.addEventListener('click', button_clicked, false);

        let btn3 = document.getElementById('btn-3');
        btn3.addEventListener('click', button_clicked, false);
        
        let btn4 = document.getElementById('btn-4');
        btn4.addEventListener('click', button_clicked, false);

        let btn5 = document.getElementById('btn-5');
        btn5.addEventListener('click', button_clicked, false);

        let btn6 = document.getElementById('btn-6');
        btn6.addEventListener('click', button_clicked, false);

        let btn7 = document.getElementById('btn-7');
        btn7.addEventListener('click', button_clicked, false);

        let btn8 = document.getElementById('btn-8');
        btn8.addEventListener('click', button_clicked, false);

        let btn9 = document.getElementById('btn-9');
        btn9.addEventListener('click', button_clicked, false);

        let btn0 = document.getElementById('btn-0');
        btn0.addEventListener('click', button_clicked, false);

        let btnAdd = document.getElementById('btn-add');
        btnAdd.addEventListener('click', button_clicked, false);

        let btnSub = document.getElementById('btn-sub');
        btnSub.addEventListener('click', button_clicked, false);

        let btnMult = document.getElementById('btn-mult');
        btnMult.addEventListener('click', button_clicked, false);
        
        let btnDiv = document.getElementById('btn-div');
        btnDiv.addEventListener('click', button_clicked, false);

        let btnDec = document.getElementById('btn-dec');
        btnDec.addEventListener('click', button_clicked, false);

        let btnC = document.getElementById('btn-c');
        btnC.addEventListener('click', button_clicked, false);

    }

window.addEventListener('load', setup_button, false);

})();
