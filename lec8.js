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

// Promises Chaining

// const firstPromise = new Promise((resolve, reject) => {
//     resolve('First!');
// });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secondPromise
//     .then(res => res)
//     .then(res => console.log(res));





    
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//               return response.json();
//             } else {
//               throw new Error(response.status);
//             }
//         }
//     );
// }

// loadJson('https://javascript.info/no-such-user.json').catch(alert); 




async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
}
  
loadJson('https://javascript.info/no-such-user.json').catch(alert); 