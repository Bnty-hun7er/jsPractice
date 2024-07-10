function sumNums () {

    let total = 0 ;

        for (let value of arguments) {
            total += value ; 
        }

    return total ; 

}


let result = sumNums(10,20,30,40,50,60,70) ;
console.log(result);