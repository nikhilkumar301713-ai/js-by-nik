//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//A Promise is just:“I will give you the result later”
/* Why do we need Promise?Because things like API calls take time.
👉 Instead of stopping the whole program, JS says:
“You continue… I’ll handle result later”*/

/*Promise is NOT something you randomly use=>You use it when:
"Task will NOT finish instantly*/

/* 3 States of promise
1.Pending → waiting
2.Resolved → success
3.Rejected → failed  */

//“Promises don’t perform the task themselves; they handle the result of asynchronous operations and notify us when the task is completed.”

//1.creation of promises:
const promiseOne=new Promise(function(resolve,reject){
    //do async tasks eg DB calls,cryptography
    setTimeout(function(){
        console.log('Async task completed');
        resolve();  //to connect resolve and .then
    },1000)
})

//2.consumption of promise
promiseOne.then(function(){   //.then is directly related ot resolve
    console.log('promise consumed')  //this will be printed only when resolve() is called
})

//combining 1 and 2 in a single one
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){  //directly connecting resolve and then in single function
    console.log('async 2 resolved');
})

//to pass the data recieved from network
const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Nikhil",email:"nk@xyz.com"}) //we get username and email from some website  
        //whichever parameter is passed in resolve is recieved in .then mostly obj is passed
    },1000)
})
//suppose we created a promise and an api is called =>we get data from website stored in resolve 
//then to consume the promise we have to pass the recieved data to .then
promiseTwo.then(function(user){
    console.log(user);
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){     //if error do not occur get value using promiseThree.then()
            resolve({username:"nik",password:'123'})
        }else{          // if error get value using promiseThree.catch()
            reject('ERROR:Something went wrong');
        }
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
    return user.username;
}).then((myusername)=>{   //chaining:uper wale then se jo value return hogi wo iss then me ayegi as myusername
    console.log(myusername);
}).catch(function(error){  //if error true=>all above it will not be printed(for this promiseThree only)
    console.log(error);
}).finally(()=>console.log('the promise is either resolved or rejected')) //always executed to tell whether resolved or rejected


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"js",password:'123'})
        }else{
            reject('ERROR:js went wrong');
        }
    },1000)
})
//another syntax :- same as .then and .catch :it waits for work ,if work done return value else return error 
// async function consumePromiseFive({
//     await promiseFour
// })