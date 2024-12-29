// Closure - A closure allows a function to access variables from its parent scope even after the parent function has finished executing.

// lexical scope - Lexical scope (also called static scope) means that the scope of a variable is determined by its position in the source code. JavaScript uses lexical scoping to resolve variable names in nested functions.


// closure vs scope
// function within an function, inner function is closure
// scope -> defines what variables are accessible


// global scope
let user = "John";

function local () {
    // local scope

    console.log(user);
}

local();


function example () {
    let name = "Dave";

    function innerExample() {
        console.log(name);
        let x = 10;
    }

    innerExample();
    // console.log(x);  // can't be accessible outside
}
example();



function makeFunc () {
    let name = "Damon";
    function displayName () {
        console.log(name);
    }
    return displayName;
}
const ans = makeFunc();
ans();




let count = 0;
(function printCount () {
    if(count === 0) {
        let count = 1; // shadowing
        console.log(count); // 1
    }
    console.log(count); // 0
})();





function add (num) {
    return function (innerNum) {
        console.log(num + innerNum);
    };
};

let ans1 = add(5);
ans1(6);
ans1(10);




function find (index) {
    let a = [];
    for(let i=0; i<1000000; i++) {
        a[i] = i * i;
    }
    console.log(a[index])
}

console.time('6');
find(6);
console.timeEnd('6');



function find () {
    let a = [];
    for(let i=0; i<1000000; i++) {
        a[i] = i * i;
    }
    return function (index) {
        console.log(a[index]) 
    }
}

const closure = find();
console.time('6');
closure(6);
console.timeEnd('6');




for(var i=0; i<3; i++) {            // var is function scoped
                                    // let is block scoped
    setTimeout(function log() {     // settimeout runs only after the code ran successfully
        console.log(i)
    }, i*1000);
}





for(var i=0; i<3; i++) {
    function inner(i) {
        setTimeout(function log() {
            console.log(i)
        }, i*1000);
    }
    inner(i);
}





function counter () {
    var _counter = 0;

    function add (increment) {
        _counter += increment;
    }

    function retrieve () {
        return "Counter -> " + _counter;
    }

    return {add, retrieve};
}

a = counter();
a.add(5);
a.add(9);
console.log(a.retrieve());





// make the code run once
let x;
function abc () {
    let called = 0;
    return function () {
        if(called > 0) {
            console.log("Already called");
        } else {
            x = "Calling x";
            console.log("x -> ", x);
            called++;
        }
    }
}

let a = abc();
a();  
a();
a();
a();