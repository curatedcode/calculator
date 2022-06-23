let testOne = 3;
let testTwo = 4;


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
const opEqual = document.getElementById("op-Multiply");

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
clear.addEventListener('mousedown', storage);
percent.addEventListener('mousedown', storage);


opDivide.addEventListener('mousedown', storage);
opMultiply.addEventListener('mousedown', storage);
opSubtract.addEventListener('mousedown', storage);
opAdd.addEventListener('mousedown', storage);
opEqual.addEventListener('mousedown', storage);



function storage(e){
    if(e.target == numOne){
        console.log('1');
    } else if (e.target == numTwo){
        console.log('2');
    } else if (e.target == numThree){
        console.log('3');
    } else if (e.target == numFour){
        console.log('4');
    } else if (e.target == numFive){
        console.log('5');
    } else if (e.target == numSix){
        console.log('6');
    } else if (e.target == numSeven){
        console.log('7');
    } else if (e.target == numEight){
        console.log('8');
    } else if (e.target == numNine){
        console.log('9');
    } else if (e.target == numZero){
        console.log('0');
    } else if (e.target == opDivide){
        console.log('Divide');
    } else if (e.target == opMultiply){
        console.log('Multiply');
    } else if (e.target == opSubtract){
        console.log('Subtract');
    } else if (e.target == opAdd){
        console.log('Add');
    } else if (e.target == opEqual){
        console.log('Equal');
    } else if (e.target == period){
        console.log('period');
    } else if (e.target == posNeg){
        console.log('posNeg');
    } else if (e.target == clear){
        console.log('clear');
    } else if (e.target == percent){
        console.log('percent');
    }
};

function add(){
    let result = testOne+testTwo;
    console.log(result);
};

function subtract(){
    let result = testOne-testTwo;
    console.log(result);
};

function multiply(){
    let result = testOne*testTwo;
    console.log(result);
};

function divide(){
    let result = testOne/testTwo;
    console.log(result);
};
