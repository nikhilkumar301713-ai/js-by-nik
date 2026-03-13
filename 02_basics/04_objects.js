// const tinderUser = new Object() //singleton object
const tinderUser = {}  //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //{ id:'123', name:'Sammy',isLoggedIn:false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {   //object ke andar object
        userfullname: {   //again nested object
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //same problem as arr
// const obj3 = Object.assign({}, obj1, obj2, obj4) //the initial {} is not necessary but assures that target is {} and objects going in it as source are obj1,obj2,obj4


//SPREAD 
const obj3 = {...obj1, ...obj2}  //mostly used
// console.log(obj3);

//arr of objects
const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 2,
        email: "B@gmail.com"
    },
    {
        id: 3,
        email: "C@gmail.com"
    },
]

console.log(users[1].email)   //A@gmain.com
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //return keys of oobject in a arr ['id','name','isLoggedIn']
// console.log(Object.values(tinderUser));  //return values of oobject in a arr ['123abc','Sammy',false]
// console.log(Object.entries(tinderUser)); //key val in arr [[['id','123abc'],['name','Sammy'],['isLoggedIn',false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if object has any property with given name  


//destructuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //courseInstructor=>instructor

// console.log(courseInstructor);
console.log(instructor);


//JSON ->key and val both in string form
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]