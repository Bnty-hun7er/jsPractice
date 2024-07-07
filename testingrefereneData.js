const items = [
    {id:1, name: "Mobile" , isDeleverable: true},
    {id:2, name: "TV" , isDeleverable: true},
    {id:3, name: "Bike" , isDeleverable: false},
    {id:4, name: "car" , isDeleverable: true},
]


let isDeleverable = items.every(element => {
    
});((value) =>{
    return (value.isDeleverable == true) ;
}); 

console.log(isDeleverable);


let isNotDeleverable = items.some((value) =>{
    return (value.isDeleverable == false) ;
}); 

console.log(isNotDeleverable);


// instead o using every and some  we can  also use filter function 


const age = [23,15,25] 

let adult = age.filter((value) =>{
    return value>=18 ;
})

console.log("adults :" , adult);