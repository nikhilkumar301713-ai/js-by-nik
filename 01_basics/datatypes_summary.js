//datatypes are classified on basis of how data is stored in memory and how it is accessed
// 1. Primitive-call by value(copied val of original ,all changes occur in copy not in original data)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100  //score is number
const scoreValue = 100.3  //NO float =>only number
//JavaScript is a dynamically typed language=>The type of a variable is determined at runtime

const isLoggedIn = false
const outsideTemp = null   //typeof nul=object
let userEmail;

//to define symbol
const id = Symbol('123') //retrun type is also a symbol
const anotherId = Symbol('123')  //this symbol is different from id as symbol=>uniquness

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



//Non primitive(Reference type)=>if we change something from it in a function then there is change in original also

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //arr
let myObj = {     //obj
    name: "hitesh",
    age: 22,
}
//function=>we can store function in a var also
const myFunction = function(){   
    console.log("Hello world");
}
myFunction()
console.log(typeof score); //num
console.log(typeof scoreValue); //num
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); //symbol
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction);//function


// https://262.ecma-international.org/5.1/#sec-11.4.3




//**************  MEMORY **************//
//two types of memory=>1.stack(in all primitive datatypes stack memory is used)
//2.Heap(non-primitive)
//in stack memory we get only copied value but in heap we get reference

//in stack
let myname="nikhil"
let othername=myname  //othername gets a copied value from myname
othername="nik"

console.log(myname)
console.log(othername)

//in heap
let userone={
    email:"abc.com",
    upi:"user@ybl"
}
let usertwo=userone //usertwo gets reference from userone
usertwo.email="xyz.com"  //userone email also changes
console.log(userone.email) 
console.log(usertwo.email)