// //  console.log("hello world")

// //  let name = "hi iam adhil" 

// // //console.log(name)

// // let age = 22 ;


// // console.log(typeof name )




// // object 


// let person = {

//     name : "mike" ,
//     age : 22 ,
//     gender : "male" ,

//     skills : {

//         eudcation : "it" ,
//         hacking : "black"

//     }


// }

// console.log(person.skills.hacking) ;
// console.log(person.name) ;

// console.log();


// //for-in 


// const  student = {
//     name : "mike" , 
//     age : 22,
//     school : "kcc"

// }

// console.log(student);

// for (let key in student) {
//     console.log(key + " : " + student[key]);
// }


// let numbers = [1 ,2, 3,4 ,5,6,7] ;

// for (let key in numbers) {
//     console.log(numbers[key])
// }


// //for- of
// console.log(" ");

// let numbers1 = [1 ,2, 3,4 ,5,6,7] ;

// for (let num of numbers1) {
//     console.log(num) ;
// }
// I


// let name = "mike";

// let age = 24;

// console.log(`My name is ${name} , and my age is ${age}`)




let person = {

    name: "mike",
    age: 23,
    skills: ["code", "ff"],

    message: function () {
        let msg = `my name is ${this.name} , and im ${this.age} years old and iam intrested in ${this.skills}`;

        console.log(msg)
    }


}

person.message();



