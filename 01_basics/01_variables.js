//in js you can ignore ; at end of each line (for safety use ; always)
const accountId = 144553;  //const-its value cannot be changed 
//variables are assigned using "let" and "var"=>variables can be changed later but const cannot
let accountEmail = "hitesh@google.com"; 
var accountPassword = "12345";
accountCity = "Jaipur"  //in js we can use variables without datatype
let accountState;    //no val assigned=>output=undefined

// accountId = 2 // not allowed (cannot change const values)

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

    scope=>{}
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])   //to print all ouput in a table