// we use iife (immediate invoke function expression)  for call a function without a extra line of code

// for example 

let num1 = 100;
let num2 = 11;

// create a function to add

function addno () {

    result = num1 + num2 ;

console.log(result);
    
}

// we use this line for call
addno() ;

// but for for iife we use like this 

(function subno () {

    result = num1 - num2 ;

console.log(result);

})  () ;


