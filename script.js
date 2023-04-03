//make functional our calculator

// function add(oparand1, oparand2){

//     let opration = oparand1 + oparand2;
 
//     return opration;
// };
// function subtract(oparand1, oparand2){

//     let opration = oparand1 - oparand2;

//     return opration;
// };
// function multiply(oparand1, oparand2){

//     let opration = oparand1 * oparand2;

//     return opration;
// };

// function divide(oparand1, oparand2){

//     let opration = oparand1 / oparand2;

//     return opration;
// };

// function operate(operator, num1, num2){
//     if (operator == '+'){
//         return add(num1, num2);
//     }
//     else if (operator == '-'){
//         return subtract(num1, num2);
//     }
//     else if (operator == '*'){
//         return multiply(num1, num2);
//     }
//     else if(operator == '/'){
//         return divide(num1, num2);
//     }
//     else{
//         return "Invalid operator";
//     }
// }

//grabing html elements
const display = document.getElementById("screen");

const clr_btn = document.getElementById('clear-btn');
clr_btn.addEventListener("click", function clr(){
    display.value = '';
});
const  dlt_btn = document.getElementById('delete-btn');
dlt_btn.addEventListener("click", function dlt(){
    display.value = display.value.toString().slice(0,-1);
    // element.parentElement.removeChild(element);

});

const  seven = document.getElementById('seven');
seven.addEventListener("click", function se(){
    display.value += 7;
});

const  eight = document.getElementById('eight');
eight.addEventListener("click", function se(){
    display.value += 8;
});

const  nine = document.getElementById('nine');
nine.addEventListener("click", function se(){
    display.value += 9;
});

const  divid = document.getElementById('divide');
divid.addEventListener("click", function se(){
    display.value += '/';
});

const  four = document.getElementById('four');
four.addEventListener("click", function se(){
    display.value += 4;
});

const  five = document.getElementById('five');
five.addEventListener("click", function se(){
    display.value += 5;
});

const  six = document.getElementById('six');
six.addEventListener("click", function se(){
    display.value += 6;
});

const  multi = document.getElementById('multi');
multi.addEventListener("click", function se(){
    display.value += '*';
});

const  one = document.getElementById('one');
one.addEventListener("click", function se(){
    display.value += 1;
});

const  two = document.getElementById('two');
two.addEventListener("click", function se(){
    display.value += 2;
});


const  three = document.getElementById('three');
three.addEventListener("click", function se(){
    display.value += 3;
});

const  minus = document.getElementById('minus');
minus.addEventListener("click", function se(){
    display.value += '-';
});

const  dot = document.getElementById('dot');
dot.addEventListener("click", function se(){
    display.value += '.';
});

const  zero = document.getElementById('zero');
zero.addEventListener("click", function se(){
    display.value += 0;
});

const equal = document.getElementById('equal');
equal.addEventListener('click', function equals(){
        display.value = eval(display.value);  
});


const  addd = document.getElementById('add');
addd.addEventListener("click", function se(){
    display.value += '+';
});

