const users = [
    { id: 1, name: "adhil" },
    { id: 8, name: "mike" },
    { id: 2, name: "ben" },
    {id:3 , name :"yasuka" }
]



// sort with  name 
users.sort((a ,b) => {
    if (a.name<b.name) 
        return -1 ;

    if(a.name > a.name) 
        return 1;

    return 0 
})

console.log(users);



//sort with id 

users.sort((a ,b) => {
    if (a.id<b.id) 
        return -1 ;

    if(a.id > a.id) 
        return 1;

    return 0 
})

console.log(users);

