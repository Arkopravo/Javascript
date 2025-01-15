// Compose and Pipe
// Compose -> right to left
// Pipe -> left to right


const addFive = (num) => {
    return num + 5;
}

const substractTwo = (num) => {
    return num - 2;
}

const multiplyFour = (num) => {
    return num * 4;
}



const evaluate = compose1(addFive, substractTwo, multiplyFour);
console.log(evaluate(5));   // 23




function compose (...fns) {
    return function(init) {
        let result = init;
        for(let i = fns.length-1; i >= 0; i--) {
            result = fns[i](result)
        }
        return result;
    }
}



function compose1 (...fns) {
    return function (init) {
        return fns.reduceRight((acc, curr) => {
            return curr(acc);
        }, init)
    }
}



function pipe (...fns) {
    return function(init) {
        let result = init;
        for(let i = 0; i <= fns.length-1; i++) {
            result = fns[i](result)
        }
        return result;
    }
}



function pipe1 (...fns) {
    return function (init) {
        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, init)
    }
}



const evaluate1 = pipe1(addFive, substractTwo, multiplyFour);
console.log(evaluate1(5));   // 23