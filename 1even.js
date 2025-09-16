let numbers = [1,2,3,4,5,6,7,8]

let y = numbers.filter(num=>num % 2===0)

var pairs = y.reduce((acc,current)=> acc+current,0 )
console.log(y);

 console.log(pairs);
 
