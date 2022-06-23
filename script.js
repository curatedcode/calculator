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

numOne.addEventListener('mousedown', storage());
numTwo.addEventListener('mousedown', storage());
numThree.addEventListener('mousedown', storage());
numFour.addEventListener('mousedown', storage());
numFive.addEventListener('mousedown', storage());
numSix.addEventListener('mousedown', storage());
numSeven.addEventListener('mousedown', storage());
numEight.addEventListener('mousedown', storage());
numNine.addEventListener('mousedown', storage());
numZero.addEventListener('mousedown', storage());
opDivide.addEventListener('mousedown', storage());
opMultiply.addEventListener('mousedown', storage());
opSubtract.addEventListener('mousedown', storage());
opAdd.addEventListener('mousedown', storage());
opEqual.addEventListener('mousedown', storage());


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




add();
subtract();
multiply();
divide();