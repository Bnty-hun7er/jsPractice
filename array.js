//combining arrays   

console.log("hiii");


const num = [1,2,3,4] ;
const letter = ["a","b","c"] ;

let all = num.concat(letter) ;

console.log(all);


// also in es6 we use ... to merge 

let all2 = [...num , ...letter] ;
console.log(all2);


// iterate arrays 

// for-of loop 

const dailyRoutine = ["Wakeup" , "eat" ,"Code"] ;

for (let routine of dailyRoutine) {
    console.log(routine);
}

// also we can use for-in loop 

for (let routine in dailyRoutine) {
    console.log(routine , dailyRoutine[routine]);
}
// aslo their is a suer function tat called for-each


dailyRoutine.forEach(function(routine){
    console.log(routine);

}); 

//with arrow function 

dailyRoutine.forEach((routine) => {
    console.log(routine);

}); 

