
const Password = "mike123///"
const pwdToArray = Password.split("") ;

console.log(pwdToArray);

// declre the variables for letters,numbers and symboles seperately 

let hasLetter =false ;
let hasNumber =false ;
let hasSymbol =false ;


// what you have to test wich


const RegexLetter = /[a-zA-Z]/ ;
const RegexNumber = /[0-9]/ ;
const RegexSymbol = /[^a-zA-Z0-9]/ ;

let CheckStrong =pwdToArray.forEach(value => {

        if (RegexLetter.test(value) ) 
                hasLetter=true;

        if (RegexNumber.test(value))
                hasNumber=true;
        if(RegexSymbol.test(value))
                hasSymbol=true;



})

let isStrong = hasLetter && hasLetter && hasSymbol;

console.log(isStrong ? "Strong" : "Not Strong")





