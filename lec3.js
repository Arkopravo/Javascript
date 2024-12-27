// Functions in Javascript


// Function Declaration
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(2, 5));


// Function Expression - storing function in a variable
// const multipleOfTwoNumber = function multiply(a, b) {
//     return a * b;
// }
// console.log(multipleOfTwoNumber(2, 5));


// Anonymous Function - Function Expression storing function in a variable with no function name
// const multiply = function (a, b) {
//     return a * b;
// }
// console.log(multiply(2, 5));



// First Class Functions - Functions treated as a variable and can be passed as an argument to another function
// function sqaure (num) {
//     return num * num;
// }

// function displaySqaure(fn) {
//     console.log("Square is " + fn(5));
// }

// displaySqaure(sqaure);




// IIFE - Immediately Invoked Function Expression -> Function that is executed immediately after it is created
// (function square(num) {
//     console.log(num*num);
// })(6);

// Example : IIFE
// ############### Inner functions can access the outer function's variables ###############
// (function (x) {
//     return (function (y) {
//         console.log(x)  // output: 1
//     })(2);
// })(1);







// Example 
// for(let i=0; i<=5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i*1000);
// }



// Hoisting - in case of function, function is hoisted completed at the top
// hello();
// function hello() {
//     console.log("hello")
// };


// Example
// var x = 20;
// var fnc = function() {
//     console.log(x)  // output = undefined
//     var x = 30; 
// }

// fnc();




// Params and arguments: 
// function add (parameters){
//     console.log(parameters);
// }

// add("arguments");




// Spread operator vs rest operator
// function add(...nums) { // rest operator
//     console.log(nums[0] + nums[1]);
// }

// var arr = [5, 6];
// add(...arr);  // spread operator


// Example
// const fn = (a, x, y, ...nums) => {
//     console.log(a, y, nums)
// }
// let a = [1,2,3,4,5,6,7]
// fn(...a)



// callback function -> function that is passed as an argument to another function
// document.addEventListener("click", function(params) {
//     console.log("clicked");
// })




// Arrow function
// const add = (a, b) => {
//     return a + b;
// }
// let ans = add(2, 3);
// console.log(ans);




// Example using "this" keyword
let user = {
    username: "john",
    rc1: () => {
        console.log("hello " + this.username);  // in arrow function, "this" keyword refers to the global object
    },
    rc2() {
        console.log("hello " + this.username);
    },
};

user.rc1();
user.rc2();
