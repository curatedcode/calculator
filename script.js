
const display = document.getElementById('display');

display.append('0');

const numOne = document.getElementById('num-1');
const numTwo = document.getElementById('num-2');
const numThree = document.getElementById('num-3');
const numFour = document.getElementById('num-4');
const numFive = document.getElementById('num-5');
const numSix = document.getElementById('num-6');
const numSeven = document.getElementById('num-7');
const numEight = document.getElementById('num-8');
const numNine = document.getElementById('num-9');
const numZero = document.getElementById('num-0');

const divide = document.getElementById("op-Divide");
const multiply = document.getElementById("op-Multiply");
const subtract = document.getElementById("op-Subtract");
const add = document.getElementById("op-Add");
const equal = document.getElementById("op-Equal");

const period = document.getElementById("period");
const posNeg = document.getElementById("pos-neg");
const clear = document.getElementById("clear");
const undo = document.getElementById("undo");

numOne.addEventListener('mousedown', storage);
numTwo.addEventListener('mousedown', storage);
numThree.addEventListener('mousedown', storage);
numFour.addEventListener('mousedown', storage);
numFive.addEventListener('mousedown', storage);
numSix.addEventListener('mousedown', storage);
numSeven.addEventListener('mousedown', storage);
numEight.addEventListener('mousedown', storage);
numNine.addEventListener('mousedown', storage);
numZero.addEventListener('mousedown', storage);

period.addEventListener('mousedown', storage);
posNeg.addEventListener('mousedown', storage);

// undo.addEventListener('mousedown', undoLast);

// clear.addEventListener('mousedown', clearAll);

divide.addEventListener('mousedown', opStorage);
multiply.addEventListener('mousedown', opStorage);
subtract.addEventListener('mousedown', opStorage);
add.addEventListener('mousedown', opStorage);
equal.addEventListener('mousedown', opStorage);


let firstValue = '';
let secondValue = '';
let currentValue = firstValue;

let operator = '';
let computeTrigger = false;
let secondComputeTrigger = false;

function storage(e){
    if(e.target == numOne){
        currentValue = currentValue.concat('1');
    } else if (e.target == numTwo){
        currentValue = currentValue.concat('2');
    } else if (e.target == numThree){
        currentValue = currentValue.concat('3');
    } else if (e.target == numFour){
        currentValue = currentValue.concat('4');
    } else if (e.target == numFive){
        currentValue = currentValue.concat('5');
    } else if (e.target == numSix){
        currentValue = currentValue.concat('6');
    } else if (e.target == numSeven){
        currentValue = currentValue.concat('7');
    } else if (e.target == numEight){
        currentValue = currentValue.concat('8');
    } else if (e.target == numNine){
        currentValue = currentValue.concat('9');
    } else if (e.target == numZero){
        currentValue = currentValue.concat('0');
    } else if (e.target == period){
        currentValue = currentValue.concat('.');
    } else if (e.target == posNeg){
        currentValue = currentValue.concat('-');
    }
   
    updateDisplay(currentValue);
};

function opStorage(e){
    if (secondComputeTrigger == false){
        firstValue = parseFloat(currentValue);
    }
    if (e.target == divide){
        operator = operator.concat('/');
        currentValue = secondValue;
    } else if (e.target == multiply){
        operator = operator.concat('*');
        currentValue = secondValue;
    } else if (e.target == subtract){
        operator = operator.concat('-');
        currentValue = secondValue;
    } else if (e.target == add){
        operator = operator.concat('+');
        currentValue = secondValue;
    } else if (e.target == equal){
        // operator = operator.concat('=');
        computeTrigger = true;
        console.log('=');
        compute(currentValue);
        
    }
};

function compute(){
    let result;
    secondValue = parseFloat(currentValue);
    if (operator == '/'){
        result = firstValue/secondValue;
    } else if (operator == '*'){
        result = firstValue*secondValue;
    } else if (operator == '-'){
        result = firstValue-secondValue;
    } else if (operator == '+'){
        result = firstValue+secondValue;
    }
    firstValue = result;
    console.log(firstValue);
    updateDisplay(firstValue);
};

function updateDisplay(){
    display.textContent = '';
    if (computeTrigger == true){
        display.append(firstValue);
    } else {
        display.append(currentValue);
    }
};