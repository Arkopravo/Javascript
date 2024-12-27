// var let and const

// var = global scoped
// let = block scoped
// const = block scoped


// Variable Shadowing
var a = 10;
function abc () {
    let a = 20;
    console.log(a);
}
abc();
console.log(a);

// Variable Shadowing: In JavaScript, variable shadowing occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.


// illegal Shadowing
function test() {
    var a = "hey";
    let b = "hello";

    if(true) {
        var a = "hi";
        let b = "bye";  // illegal Shadowing
        console.log(a);
        console.log(b);
    }
}
test();

// illegal Shadowing: This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.
// In example, var b = "20"; is illegal shadowing because b is already declared using let in the same scope.


// hoisting - In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
//  However, only the declarations are hoisted, not the initializations or assignments.


function xyz () {
    console.log(a);

    var a = 10;
    let b = 20;    // Temporal Dead Zone (TDZ)
    const c = 30;   // Temporal Dead Zone (TDZ)
}
xyz();

//  In example, console.log(a); will result in undefined because the variable a is hoisted to the top but not initialized until later in the code (var a = 10;).

// Temporal Dead Zone (TDZ):
// TDZ is a specific behavior related to variables declared using let and const. It refers to the period between the start of the block scope and the actual declaration of the variable.
// During the TDZ, accessing the variable will result in a ReferenceError.
// In example, trying to log b, and c before their respective declarations will result in ReferenceError because they are in the TDZ until they are declared.
