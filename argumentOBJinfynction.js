function sumNums () {

    let total = 0 ;

        for (let value of arguments) { //this is the arugument object    it save all the arguments of thhe function in to  an object
            total += value ; 
        }

    return total ; 

}


let result = sumNums(10,20,30,40,50,60,70) ;
console.log(result);