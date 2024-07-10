const product = [
    {id: 1, name:"Mobile" , price: 5000} ,
    {id: 2, name:"Analog Clock" , price: 4000} ,
    {id: 3, name:"Bread Board" , price: 3000} ,
    {id: 4, name:"Car Charger" , price: 2000} ,
]

// sort by price 

let sortbyLowestPrice = product.sort((a , b) =>{
    return a.price - b.price // ascending 
})
console.log(sortbyLowestPrice);

//sort by name 

let sortybyName = sortbyLowestPrice.sort((a,b) =>{
    if( a.name < b.name ) return -1 ;
    if( b.name > a.name ) return 1 ;

})
console.log(sortybyName);

//filter product less than 4000

let filterdPrice = sortybyName.filter((val) =>{
    return val.price<4000 
})

console.log(filterdPrice);

// map the products like "Product Name - $price" 

let mappedList = filterdPrice.map((val) =>{
    return (val.name + " - $" + val.price)
})

console.log(mappedList);

//
//
//
//
//


//lets chain all functions


                let final = product.sort((a , b) =>{
                    return a.price - b.price // ascending 
                }).sort((a,b) =>{
                    if( a.name < b.name ) return -1 ;
                    if( b.name > a.name ) return 1 ;

                }).filter((val) =>{
                    return val.price<4000 
                }).map((val) =>{
                    return (val.name + " - $" + val.price)
                })

                console.log(final);






