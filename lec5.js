// currying -> Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.
// takes 1 argument at a time


function f(a) {
    return function(b) {
        return `${a}  ${b}`;
    }
}

console.log(f(5)(6));




sum(2)(3)(5)
function f(a) {
    return function f(b) {
        return function f(c) {
            return a + b + c;
        }
    }
}


console.log(f(2)(3)(5));





// evaluate ("sum")(4)(2) => 6
// evaluate ("multiply")(4)(2) => 8
// evaluate ("divide")(4)(2) => 2
// evaluate ("substract")(4)(2) => 2


function evaluate(operation) {
    return function(a) {
        return function(b) {
            if(operation === "sum") return a+b;
            else if(operation === "multiply") return a*b;
            else if(operation === "divide") return a/b;
            else if(operation === "substract") return a-b;
            else return "Invalid operation";
        }
    }
}

const ans = evaluate("multiply")
console.log(ans(4)(2))






// infinite currying -> sum(1)(2)(3)...(n)

function add(a) {
    return function (b) {
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(5)(6)(4)(3)(2)())





// currying vs partial application

// // partial application
function sum(a) {
    return function(b, c) {
        return a+b+c;
    };
};

// // currying
function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+cp;
        };
    };
};





// currying -> manipulating dom
function updateElementText(id) {
    return function(content) {
        document.querySelector("#" + id).textContent = content;
    }
}
const updateText = updateElementText("heading");
updateText("Hello Guys")




