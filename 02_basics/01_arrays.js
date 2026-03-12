// array=>we can put different datatype elements in arr
//js arr-copy-operations create shallow copy
//shallow copy- shallow copy of an objject is a copy which share the same reference as those of source=>changes in copy also makes changes in original arr

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //puts 9 at starting of arr by shifting all el of arr
// myArr.shift()   //removes 1st el

// console.log(myArr.includes(9));   //if arr includes 9 or not(bool)
// console.log(myArr.indexOf(3));  

// const newArr = myArr.join() //all values convert to string

// console.log(myArr);
// console.log( newArr); 


// slice, splice

console.log("A ", myArr);  //A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3) //slice arr from idx [1,3) 

console.log(myn1);  //[1,2]
console.log("B ", myArr); //B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3) //slice from idx[1,3]
console.log("C ", myArr); //C [0,4,5]
console.log(myn2);  //[1,2,3]

//slice do not affect original arr but splice do