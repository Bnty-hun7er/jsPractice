const Name = [
    {id:1 , first_name: "Mike" , last_name : "ben "},
    {id:2 , first_name: "Ajith" , last_name : "Kumar "},
    {id:3 , first_name: "Adhil" , last_name : "Marzook "}
]

let fullName = Name.map((val) =>{
    return val.first_name + val.last_name ; 
})

console.log(fullName);

let fullName_joined = Name.map((val) =>{
    return [val.first_name , val.last_name].join(" ") ; 
})

console.log(fullName_joined);

let fullName_array = Name.map((val) =>{

    let joined_name =[ val.first_name , val.last_name ].join("  ") ;
    let obj = {fid: val.id , fullname: joined_name}
    return obj ; 
})

console.log(fullName_array);



const num =[1,2,3,4,5] 
console.log(num);

let multy = num.map((value) =>{
    return value *2 ;
})

console.log(multy);