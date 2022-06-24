
const display = document.getElementById('display');

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

const opDivide = document.getElementById("op-Divide");
const opMultiply = document.getElementById("op-Multiply");
const opSubtract = document.getElementById("op-Subtract");
const opAdd = document.getElementById("op-Add");
const opEqual = document.getElementById("op-Equal");

const period = document.getElementById("period");
const posNeg = document.getElementById("pos-neg");
const clear = document.getElementById('clear');
const percent = document.getElementById("percent");

// let operatorTrigger = false;
// opDivide.onclick = () => {operatorTrigger = true; divideTrigger = true};
// opMultiply.onclick = () => {operatorTrigger = true; multiplyTrigger = true};
// opSubtract.onclick = () => {operatorTrigger = true; subtractTrigger = true};
// opAdd.onclick = () => {operatorTrigger = true; addTrigger = true};

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

percent.addEventListener('mousedown', storage);


opDivide.addEventListener('mousedown', operatorFunc);
opMultiply.addEventListener('mousedown', operatorFunc);
opSubtract.addEventListener('mousedown', operatorFunc);
opAdd.addEventListener('mousedown', operatorFunc);
opEqual.addEventListener('mousedown', result);

// clear.addEventListener('mousedown', clearDisplay);

let divideTrigger = false;
let multiplyTrigger = false;
let subtractTrigger = false;
let addTrigger = false;

let opTrigger = false;

let firstValue = [];
let secondValue = [];
let operator;

let stringOne;
let stringTwo;
let valueOne;
let valueTwo;

let currentValue = firstValue;

function operatorFunc(e){
    stringOne = firstValue.toString();
    valueOne = stringOne.replace(/,/g, '');
    if (e.target == opDivide){
        opTrigger = true;
        divideTrigger = true;
        currentValue = secondValue;
    } else if (e.target == opMultiply){
        opTrigger = true;
        multiplyTrigger = true;
        currentValue = secondValue;
    } else if (e.target == opSubtract){
        opTrigger = true;
        subtractTrigger = true;
        currentValue = secondValue;
    } else if (e.target == opAdd){
        opTrigger = true;
        addTrigger = true;
        currentValue = secondValue;
    }
};

function storage(e){
    if(e.target == numOne){
        currentValue.push('1');
    } else if (e.target == numTwo){
        currentValue.push('2');
    } else if (e.target == numThree){
        currentValue.push('3');
    } else if (e.target == numFour){
        currentValue.push('4');
    } else if (e.target == numFive){
        currentValue.push('5');
    } else if (e.target == numSix){
        currentValue.push('6');
    } else if (e.target == numSeven){
        currentValue.push('7');
    } else if (e.target == numEight){
        currentValue.push('8');
    } else if (e.target == numNine){
        currentValue.push('9');
    } else if (e.target == numZero){
        currentValue.push('0');
    }
};

function result(){
    let finalResult;
    stringTwo = secondValue.toString();
    valueTwo = stringTwo.replace(/,/g,'');
    if (divideTrigger == true){
        finalResult = valueOne/valueTwo;
    } else if (multiplyTrigger == true){
        finalResult = valueOne*valueTwo;
    } else if (subtractTrigger == true){
        finalResult = valueOne-valueTwo;
    } else if (addTrigger == true){
        finalResult = valueOne+valueTwo;
    }
    
};
