const name = "nik"
const repoCount = 50

//to concatenate strings
// console.log(name + repoCount + " Value"); //not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc') //String Object=>here typeof gameName is object

// console.log(gameName[0]);   
// console.log(gameName.__proto__); //we get {}=>obj


// console.log(gameName.length); //8
// console.log(gameName.toUpperCase()); //converts all char to uppercase
console.log(gameName.charAt(2));  //to get char at a particualr idx
console.log(gameName.indexOf('t')); //to get idx of a particular char

const newString = gameName.substring(0, 4) //no neg val in substring
console.log(newString);    //hite

const anotherString = gameName.slice(-8, 4) //start from last and 4 hars
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes starting and end spaces

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-")) //replaces %20 to - in url

console.log(url.includes('sundar')) //false//tells whether sundar is present in the url or not(boolean)

let randomname="js-by-nik"
console.log(randomname.split('-')); //returns an arr {"js","by",nik"} splits based on given argument