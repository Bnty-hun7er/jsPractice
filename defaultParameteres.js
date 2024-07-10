

function displayNum (num1 , num2 = 5) {

    return (num1 +num2 );

}

// if i  give a specific value for num2 as 6

let display = displayNum(5,6) ;
console.log(display);

//if i dont give a value for num2 it will take as 5 

let displayDefault = displayNum(5);

console.log(displayDefault);

