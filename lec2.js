// map filter reduce

// map - creates a new array from an existing one by applying a function to each one of the elements

const nums = [1,2,3,4,5];
const multiplyByThree = nums.map((num, i, arr) => {
    return num*3;
})
console.log(multiplyByThree);
console.log(nums);


// polyfill for map

const numsForMapPolyfill = [1,2,3,4,5];
Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i =  0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}
const multiplyByThree1 = nums.myMap((num) => {
    return num*3;
})
console.log(multiplyByThree1);
console.log(numsForMapPolyfill);


let students = [
    {name: 'john', age: 20},
    {name: 'doe', age: 30},
    {name: 'jane', age: 25},
    {name: 'smith', age: 35}
]

let nameOfStudents = [];
for(let i=0; i<students.length; i++) {
    nameOfStudents.push(students[i].name.toUpperCase());
};


let nameOfStudents1 = students.map((student) => {
    return student.name.toUpperCase();
})
console.log(nameOfStudents1);



// filter - creates a new array from an existing one with all elements that pass the requirement of the provided function

const numsForFilter = [1,2,3,4,5];
const moreThanTwo = nums.filter((num, i, arr) => {
    return num > 2;
});
console.log(moreThanTwo);
console.log(numsForFilter);



// polyfill for filter

const numsForFilterPolyfill = [1,2,3,4,5];
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i =  0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}
const greaterByThree = nums.myFilter((num) => {
    return num > 3;
})
console.log(greaterByThree);
console.log(numsForFilterPolyfill);

let studentsForFilter = [
    {name: 'john', age: 20},
    {name: 'doe', age: 30},
    {name: 'jane', age: 25},
    {name: 'smith', age: 35}
]

let nameForFilterExample = studentsForFilter.filter((student) => {
    return student.age > 29;
})
console.log(nameForFilterExample);


let nameForFilterExample1 = students.filter((student) => {
    return student.age > 29 && student.age < 32;
})
console.log(nameForFilterExample1);




// reduce - applies a function to each element of the array to reduce it to a single value. it takes a callback function with two parameters, the accumulator and the current value

const numsForReduce = [1,2,3,4,5];
const sum = numsForReduce.reduce((acc, curr, index, nums) => {
    return acc + curr;
}, 0);
console.log(sum);
console.log(numsForReduce);




// polyfill for reduce

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    for(let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}

const numsForReducePolyfill = [1,2,3,4,5];
const sum1 = nums.myReduce((acc, curr, index, nums) => {
    return acc + curr;
}, 0);
console.log(sum1);
console.log(numsForReducePolyfill);


let studentsForReduce = [
    {name: 'john', marks: 20},
    {name: 'doe', marks: 30},
    {name: 'jane', marks: 25},
    {name: 'smith', marks: 35}
]

let nameForReduce = studentsForReduce.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0);
console.log(nameForReduceame);







let studentsExample = [
    {name: 'john', marks: 20},
    {name: 'doe', marks: 30},
    {name: 'jane', marks: 25},
    {name: 'smith', marks: 35}
]

let nameExample = studentsExample.filter((student) => {
    return student.marks > 29
}).map((student) => {
    return student.marks + 1;
});

console.log(nameExample);





let studentsForExample1 = [
    {name: 'john', marks: 70},
    {name: 'doe', marks: 50},
    {name: 'jane', marks: 85},
    {name: 'smith', marks: 55}
]


let nameForExample = studentsForExample1.map((student) => {
    if(student.marks < 60) {
        student.marks += 20;
    }
    return student;
}).filter((student) => {
    return student.marks > 74;
}).reduce((acc, curr) => {
    return acc + curr.marks;
}, 0)

console.log(nameForExample);