// if


if(2=="2"){
    console.log("execute")  //this will print execute because js convert "2" to num
}
//but is we want to match datatype also then
if(2==="2"){
    console.log("execute")//this will not be executed
}
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //power is not defined outside the scope
//but if we used var power then it will be executed outside the scope also


// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

//********************************/

//SWITCH statements
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}


//**********TRUTHY VALUES **********//


const userEmail ="abc"

if (userEmail) { //userEmail is a truthy val 
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


//falsy values:false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values:"0", 'false'," ",[],{},function(){},


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null ,undefined

let val1;
// val1 = 5 ?? 10   //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 20    //10
console.log(val1);


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


