// singleton
// Object.create->singleton is formed

//methods to create objects
// object literals->no singleton

//to declare symbol
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //to use symbol as a key
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  //hitesh@google.com
// console.log(JsUser["email"]) //hitesh@google.com
// console.log(JsUser["full name"])  //cannot access by using dot
// console.log(JsUser[mySym])

//to change values
JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser) //freeze the change=>no change will occur
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());