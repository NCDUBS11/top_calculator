const button = document.querySelectorAll("#btns");
const screen = document.querySelector(".screenArea");
let runningTotal = null;

function updateScreen(input){
    if(screen.innerHTML.length > 8){
        return;
    }
    else if (input === "." && screen.innerHTML.indexOf(".") !== -1){
        return;
    }       
    screen.append(input);      
}

function positivity(){
    screen.innerHTML.indexOf("-") === -1 ? screen.innerHTML = "-" + screen.innerHTML : screen.innerHTML = screen.innerHTML.slice(1);
}

function clearTotal(){
    screen.innerHTML = "";
    runningTotal = null;
}

function clearScreen(){
    screen.innerHTML = "";
}

function calculate(value, operator){
    // refer to running total, read screen value, modify total per operator by screen value

}