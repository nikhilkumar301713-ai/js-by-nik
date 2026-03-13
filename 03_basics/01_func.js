function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwonums(a,b)){  //a and b are parameters
//     console.log(a+b);
// }
//addTwonums(3,4) //7  (3 and 4 are arguments)
//addTwonums(3,"4") //34
//addTwonums(3,"a") //3a

// const result = addTwonums(3, 5)  //8
// console.log("Result: ", result);  //undefined given funct is not returning any val instead it is just printing 

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    //OR
    return number1 + number2
}
const result = addTwoNumbers(3, 5)  //funct return a num
// console.log("Result: ", result);  //Result: 8


function loginUserMessage(username = "sam"){
    if(!username){  //or if(username===undefined) when you don not give any argument
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ //val1=200,val2=400,...num1={500,2000}
    return num1
} 
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));