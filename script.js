
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

let divideTrigger = false;
let multiplyTrigger = false;
let subtractTrigger = false;
let addTrigger = false;

let opTrigger = false;


let firstValue = '';
let secondValue = '';
let operator;
let currentValue = firstValue;

function operatorFunc(e){
    if (e.target == opDivide){
        divideTrigger = true;
        firstValue = parseFloat(currentValue);
        currentValue = secondValue;
    } else if (e.target == opMultiply){
        multiplyTrigger = true;
        firstValue = parseFloat(currentValue);
        currentValue = secondValue;
    } else if (e.target == opSubtract){
        subtractTrigger = true;
        firstValue = parseFloat(currentValue);
        currentValue = secondValue;
    } else if (e.target == opAdd){
        addTrigger = true;
        firstValue = parseFloat(currentValue);
        currentValue = secondValue;
    }
};

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
    }
};

function result(){
    let finalResult;
    secondValue = parseFloat(currentValue);
    if (divideTrigger == true){
        finalResult = firstValue/secondValue;
    } else if (multiplyTrigger == true){
        finalResult = firstValue*secondValue;
    } else if (subtractTrigger == true){
        finalResult = firstValue-secondValue;
    } else if (addTrigger == true){
        finalResult = firstValue+secondValue;
    }
};