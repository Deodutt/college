// This attaches a onclick function to the input buttons in the elements with ID calculator.
// 
function Attach(Calc) {
    var Inputs = Calc.getElementsByTagName('input');
    for (var i = 0; i < Inputs.length; i++) {
        var Input = Inputs[i];
        Input.onclick = function () {
            CalcInsert(this);
        }
    }
}


// This removes the onlclicks function from the elements. Not needed. This is basically if you want to reverse the above function which was function Attach(Calc).
function Detach(Calc) {
    var Inputs = Calc.getElementsByTagName('input');
    for (var i = 0; i < Inputs.length; i++) {
        var Input = Inputs[i];
        Input.onclick = null;
    }
}


// When the page finshes loading, it calls the attach function with the element that has the ID calculator.
window.onload = function () {
    var Calc = this.document.getElementById('calculator');
    Attach(Calc);
}

// This checks the class of the button and it returns what type of button it is. For example if a user clicks the button 6, it will return 'number'.
function CalcInsertType(InsertElement) {
    var Class = InsertElement.className;
    if (Class.includes('clearentry')) {
        return 'clearentry';
    } else if (Class.includes('clear')) {
        return 'clear';
    } else if (Class.includes('equals')) {
        return 'equals';
    } else if (Class.includes('number')) {
        return 'number';
    } else if (Class.includes('operator')) {
        return 'operator';
    }
}

// This adds padding for the operations. Before it would look like "5+5" now it looks like "5 + 5"
function PadOperator(Value) {
    return ' ' + Value + ' ';
}

// This checks if the last character in the string is an operater(+,-,*,/).
function CanOperate() {
    var Display = this.document.getElementById('displayscreen');
    if (Display.value.length > 0) {
        var CleanValue = Display.value.replace(/\s/g, '');
        // This removes padding from the entire string.
        var LastChar = CleanValue.charAt(CleanValue.length - 1);
        // This basically stops user from entering multiple operators
        // This checks if the last character is not a number and not a '.'(dot).
        // If its not a number and not a  '.'(dot) it is false. If its false you cant add an operator
        // If its a number or '.', it is true and you can add an operator.
        if (isNaN(LastChar) && LastChar != '.') {
            return false;
        } else {
            return true;
        }
    }
    // If its empty, its false.
    return false;
}

// This adds whatever the user clicks onto the display screen.
function DisplayInsert(Value) {
    var Display = this.document.getElementById('displayscreen');
    Display.value += Value;
}

// This is when the user clicks 'C'. Which clears the display screen.
function ExecuteClear() {
    var Display = this.document.getElementById('displayscreen');
    if (Display.value.length > 0) {
        Display.value = '';
    }
}

// This is when the user clicks CE. This clears the last entry.
// https://www.quora.com/What-does-the-CE-button-on-a-calculator-stand-for-and-what-does-it-do-differently-to-the-C-button-Clear
function ExecuteClearEntry() {
    var Display = this.document.getElementById('displayscreen');
    if (Display.value.length > 0) {
        if (CanOperate()) {
            Display.value = Display.value.slice(0, -1);
        } else {
            Display.value = Display.value.slice(0, -3);
        }
    }
}

// This is does the calculations. This evalutates the expression in the display screen.
function ExecuteEvaluate() {
    var Display = this.document.getElementById('displayscreen');
    if (Display.value.length > 0) {
        if (CanOperate()) {
            try {
                // This is the built in Javascript Eval function, that evaulates expressions.
                // I added /÷/g, "/" because '÷' is not recognized as a divide operator.
                Display.value = eval(Display.value.replace(/÷/g, "/"));
                // https://www.w3schools.com/jsref/jsref_eval.asp

                // This was used to replace the string from ÷ to / https://www.w3schools.com/jsref/jsref_replace.asp

            }
            //   This happens when the expression is invalid.
            // https://www.w3schools.com/js/js_errors.asp
            catch (err) {
                alert('Invlaid Entry');
                return;
            }
        }
    }
}

// This is the onclick function that the buttons call when they are clicked. This tells you what to do with the button. For example if you get a 'number' its inserted onto the display screen.
function CalcInsert(InsertElement) {
    var Value = InsertElement.value;
    var Type = CalcInsertType(InsertElement);
    if (Type == 'clearentry') {
        ExecuteClearEntry();
    } else if (Type == 'clear') {
        ExecuteClear();
    } else if (Type == 'equals') {
        ExecuteEvaluate();
    } else if (Type == 'number') {
        DisplayInsert(Value);
    } else if (Type == 'operator' && CanOperate()) {
        DisplayInsert(PadOperator(Value));
    }
}