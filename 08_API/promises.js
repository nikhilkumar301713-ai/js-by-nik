// ================== PROMISES IN JAVASCRIPT ==================

/*
A Promise represents the eventual completion (or failure)
of an asynchronous operation and its result.

👉 Important:
Promise does NOT perform the task itself.
It only represents the result of an async operation.
*/

/*
Why do we need Promises?

Because some operations take time:
- API calls
- Database queries
- File reading
- setTimeout

👉 JavaScript does NOT wait (non-blocking).
👉 It continues execution and handles result later using Promises.
*/

/*
When to use Promises?

👉 When a task will NOT finish instantly (asynchronous task)
*/

/*
States of a Promise:

1. Pending   → initial state (waiting)
2. Fulfilled → operation successful (resolve)
3. Rejected  → operation failed (reject)
*/

// ============================================================
// 1. Creating a Promise
// ============================================================

const promiseOne = new Promise(function(resolve, reject) {
    // async task (e.g., API call)
    setTimeout(function() {
        console.log('Async task completed');
        resolve();  // marks promise as fulfilled
    }, 1000);
});

// ============================================================
// 2. Consuming a Promise
// ============================================================

promiseOne.then(function() {
    console.log('Promise consumed');
    // runs only after resolve()
});

// ============================================================
// Combining creation + consumption
// ============================================================

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function() {
    console.log('Async 2 resolved');
});

// ============================================================
// Passing data through resolve()
// ============================================================

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // data received from some async source (e.g., API)
        resolve({ username: "Nikhil", email: "nk@xyz.com" });
    }, 1000);
});

promiseTwo.then(function(user) {
    console.log(user);  // receives data from resolve()
});

// ============================================================
// Handling success + error + chaining
// ============================================================

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;

        if (!error) {
            resolve({ username: "nik", password: '123' });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseThree
.then((user) => {
    console.log(user);
    return user.username;   // passed to next .then()
})
.then((myusername) => {
    console.log(myusername);
})
.catch((error) => {
    console.log(error);  // runs if rejected
})
.finally(() => {
    console.log('Promise is either resolved or rejected');
});

// ============================================================
// async/await (modern syntax)
// ============================================================

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;

        if (!error) {
            resolve({ username: "js", password: '123' });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

/*
async/await:
- syntactic sugar over Promises
- makes async code look synchronous
- uses try-catch for error handling
*/

async function consumePromiseFour() {
    try {
        const response = await promiseFour; // waits for result
        console.log(response);
    } catch (error) {
        console.log(error); // handles rejection
    }
}

consumePromiseFour();