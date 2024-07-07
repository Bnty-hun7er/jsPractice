// function  Person (name) {

//     this.name = name ;

//     this.greeting = function () {

//         console.log(`my name is ${name} `)

//     }

// }

// let person = new Person("mike") ;
// Person.greeting;

// const details = {
//     name :  "mike" ,
//     age : 24 ,

// }

// details.money = 500 ;
// details.greetingg = function() {}

// delete details.greetingg ;


// console.log(details) ;

function person (name) {
    this.name = name  ;
    this.greeting = function () {
        console.log (`my name is ${name}`) ;
    }
}

const person1 = new person("mike") ;



console.log(person1.constructor );
