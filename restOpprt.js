function sumNo (...expens) {

  return  expens.reduce((a,b) => a+b)



}

let result = sumNo(1,2,3,4,5,6,7,8,9) ;

console.log(result);