//SCOPE{}
if (true) {  //block scope
    let a = 10
    const b = 20
    var c=30
    console.log("INNER: ", a);
}

// console.log(a);//error because scope of a is within the conditional loop only
// console.log(b);//error :same as a
// console.log(c);//c will get printed as 30 (that is why var is not used because if someone used c before then it will gwt overwritten by  new c)
 

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username); //child funct can access parent variables(parent=one and child=two)
    }
    // console.log(website); //this will give error as scope of 'website' is within func two only
    two()  //but this will print "hitesh" as it can get username from func one
}
// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error=>cannot access child's variable
}
// console.log(username); //error=>inside scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //return 6
function addone(num){
    return num + 1
}



addTwo(5) //error->we cannot call a function before defining it if it is stored in a variable
const addTwo = function(num){
    return num + 2
}