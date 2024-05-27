const button = document.querySelectorAll("#btns");
const screen = document.querySelector(".screenArea");
const numPad = document.querySelector(".numBtn");
const operatorPad = document.querySelector(".operatorBtn");
const modPad = document.querySelector(".modBtn");
let runningTotal = null;
let tempSymbol = null;
let a = 0;

function updateScreen(input){
    if (a !== 0 && input >= 0 && input <= 9){
        clearScreen();
        screen.append(input);
        runningTotal = null;
        a = 0;
        return;
    }
    else if(screen.innerHTML.length > 8){
        return;
    }
    else if (input === "." && screen.innerHTML.indexOf(".") !== -1){
        return;
    }  
    screen.append(input);
    a = 0;      
}

function positivity(){
    screen.innerHTML.indexOf("-") === -1 ? screen.innerHTML = "-" + screen.innerHTML : screen.innerHTML = screen.innerHTML.slice(1);
}

function clearTotal(){
    screen.innerHTML = "";
    runningTotal = null;
    tempSymbol = null;
    a = 0;
}

function clearScreen(){
    screen.innerHTML = "";
}

function calculate(symbol){
    // To be performed if -,+,/ or * is pressed.  Calculates values and updates runningTotal. does not display current value  until equals is pressed.
    switch(tempSymbol){
        case '+':
            runningTotal = runningTotal + parseFloat(screen.innerHTML);
            break;
        case '-':
            runningTotal = runningTotal - parseFloat(screen.innerHTML);
            break;
        case 'x':
            runningTotal = runningTotal * parseFloat(screen.innerHTML);
            break;
        case '/':
            runningTotal = runningTotal / parseFloat(screen.innerHTML);
            break;
        default:
            runningTotal = parseFloat(screen.innerHTML);
            break;
    }
    clearScreen();
    a = 0;
    tempSymbol = symbol;
    return;
}

function finalSolve(){
    //action to be performed if = is pressed. Finish last calculation and clear temp variables, display total on screen.  Lock into while loop unless another operator is selector or clear is pushed. If another number is pressed, push number to screen and end loop.
    switch(tempSymbol){
        case 'null':
            runningTotal = parseFloat(screen.innerHTML);
            break;
        case '+':
            runningTotal = runningTotal + parseFloat(screen.innerHTML);
            break;
        case '-':
            runningTotal = runningTotal - parseFloat(screen.innerHTML);
            break;
        case 'x':
            runningTotal = runningTotal * parseFloat(screen.innerHTML);
            break;
        case '/':
            runningTotal = runningTotal / parseFloat(screen.innerHTML);
            break;
    }
    if(runningTotal.toString().length > 8){
        screen.innerHTML = runningTotal.toExponential(3);
    }
    else{
    screen.innerHTML = runningTotal;
    }
    tempSymbol = null;
    a++;   
}