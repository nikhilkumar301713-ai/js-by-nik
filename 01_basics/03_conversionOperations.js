let score = "nik"

//console.log(typeof score);  //string
console.log(typeof(score));   //string

let valueInNumber = Number(score) //to convert score to number
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);   //NaN=>not a number if score="nik" or "33abc"  else output =33 if score="33"


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null=>0
// undefined=>NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)  //convert to boolean=>if isLoggedIn=1=>true 0=>false
console.log(booleanIsLoggedIn);  

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string

// // *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);  //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
    
// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  //1
// console.log(true+);  //error
// console.log(+"");    //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //101

// link to study prefix and postfix
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
