let student = {
    firstname : "mike" ,
    lastname : "ben" , 
    get fullname () {
        return `Fullanem is ${student.firstname} ${student.lastname}`
    },


    set fullname (value) {

        if (typeof value  != "string" ){
            const err = new Error("it is not a string ")
            throw err ;
            return;
            

        }

        
        if (value.length < 3 ) {
            throw new Error("length is not enough")  
        }

        let values = value.split(" ") ;

        this.firstname = values[0] ;
        this.lastname = values[1] ;

    }
}

console.log(student.fullname);

try{ 
    student.fullname = "al" ;

}catch(ex) {
alert(ex)
}

console.log(student.fullname);



