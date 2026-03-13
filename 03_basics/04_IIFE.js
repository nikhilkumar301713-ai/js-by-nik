// Immediately Invoked Function Expressions (IIFE)
//just wrap the functiion in a parentheses()
//IIFE=>functions which execute immediately
//use of iife=>to remove pollution(global scope variable/declaration) of global scope

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();     // ; is used to stop the current invoked function


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')