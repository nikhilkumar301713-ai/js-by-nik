const user = {   
    username: "nikhil",
    price: 999,
 
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this is used to refer current context(means to use var which are in {})
        console.log(this);  //prints this entire object(here "this" refers to current contex)
    } 

}  

// user.welcomeMessage()   //nikhil, welcome to website
// user.username = "sam"
// user.welcomeMessage()  //sam, welcome to website

// console.log(this);   //{} is printed becuase her current contex is global contex which is empty


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //this will give undefined because "this" is working only for object and not function
// }
     
// chai() //after calling this function undefined will be given

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }                               //this also gives undefined

//ARROW FUNCTION
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()  //in this also undefined is printed


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//another way of writing the same thing
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  //while using {}we have to use return but in using () we do not use return

const addTwo = (num1, num2) => ({username: "hitesh"}) 
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()