// Promise -> 

// Synchronous vs Asynchronous -> Synchronous code then asynchronous code
// Synchronous -> line by line

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")


// Asynchronous -> which function is completed first
// console.log("1")
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// }, 5000)
// console.log("4")



// Event Loop -> It continuously checks the call stack and the task queue, executing tasks as they become available, which allows for non-blocking operations.

// console.log("start");
// function important(username, cb) {
//     setTimeout(() => {
//         cb(`Helloo ${username}`);
//     }, 1000);
// }

// const message = important("callback", function(message) {
//     console.log(message);
// });

// console.log("stop");


// ################ Nested callbacks === Callback hell  ##############################