// console.log(2 > 1);  //boolean answer
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true as js convert "2" to num
// console.log("02" > 1); //true

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
//equality check(==) and comparisons(<>>=,<=) works differently
//comparisons convert null to a num 0=>null>0 is false  and null>=0 is true

console.log(undefined == 0);  //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===  strict check =>check whether elements are of same datatype

console.log("2" === 2);//false