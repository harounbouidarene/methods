let fruits = ["aplle" , "banana" , "mango"]
let number =  [ 1, 2,3,4,5,6,7,8]

fruits[2] = "qiwi"//update

console.log(fruits[0]);//bch twsl
console.log(fruits);
console.log(fruits.length);//tall of arrays

//methods

let vegtibels = ["carot" , "tomato"]
vegtibels.push("potato")//add the last
console.log(vegtibels);

vegtibels.pop();//delete the last
console.log(vegtibels);


vegtibels.shift();
console.log(vegtibels);//delete first

vegtibels.unshift("brokoly");
console.log(vegtibels); // add the first 

console.log(vegtibels.length);//tall of array

let numbers = [1, 2, 3, 4, 5, 6]
let doubled = numbers.map(num=> num*2)

console.log(numbers);
console.log(doubled);

let users = ["haroun" , "bouidarene"]
let other = users.map(user=>(user+user +"dz" ).toUpperCase())

console.log(users);
console.log(other);
//map تاعطيلك ليست جديد 
//numbers تنجم دير +-*/
//touper case تكبر النص

//strings تنجم "string user"+"string user"  
// string.toupercase()ترعلك الخط كبير
//string+text +dz




//filter m3a numbers
var numberss = [12, 15, 18, 20, 22, 25]
let oldermore20= numberss.filter(num=>num>20)
 
console.log(numberss);
console.log(oldermore20);

//filter m3a strings

var phones = ["samsong", "apple" , "redmi"]
var bands = phones.filter(phone=>phone.startsWith("r"))
 
console.log(phones);
console.log(bands);


//slice

let vehicles = ["GMC", "honda", "kia"]
let cars = vehicles.slice(1,3)

console.log(vehicles);
console.log(cars);

//slice تقطعلك من , 
// |0 GMC 1| honda 2| kia |3


//concat

let arr1 = [1,2];
let arr2 = [3,4];

let add = arr1.concat(arr2)
console.log(add);

// join

let words = ["i", "love" , "js"];
let sentence = words.join("hello");

console.log(words);
console.log(sentence);

// join تزيدلك مابين وست 


let nuumberss = [10,20,30,40]

let sum = nuumberss.reduce((acc, current)=>acc + current,0 )

console.log(sum);


var ages = [1,4,6,10]

var numbs = ages.reduce((max, age) =>age >max? num: max,0 )
 // hadi fi numbers
 //max as bag
 //age as cashier
 //: hdi t9olk chkon kbir 5or6 tdi 6 as result kl ma dir kbir ydih


