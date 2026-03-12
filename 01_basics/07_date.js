// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)  //mon jan 23 2023 =>months start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //1/23/2023,, 5:03:00AM
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //gives time in milisec from 1st jan 1970 till now

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000)); to get in sec

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})