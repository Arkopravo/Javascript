// Call, Apply, and Bind

// Call -> set the value of this keyword

function user() {
    console.log(this)
}

var obj = {age: 30};
user.call(obj)



var obj1 = {name: "John"};

function hello (age, profession) {
    return "hello " + this.name + " is " + age + " and a " + profession + ".";
}

console.log(hello.call(obj1, 25, "Software Developer"));




// Apply -> take arguments in form of an array

var obj2 = {name: "John"};

function hello1 (age, profession) {
    return "hello " + this.name + " is " + age + " and a " + profession + ".";
}

console.log(hello1.apply(obj2, [25, "Software Developer"]));





// Bind -> creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method

var obj3 = {name: "John"};

function hello2 (age, profession) {
    return "hello " + this.name + " is " + age + " and a " + profession + ".";
}

const bindFnc = hello2.bind(obj3);

console.log(bindFnc(25, "Software Developer"));
console.log(bindFnc(35, "Software Developer"));






const person = {name: "John"};

function sayHello (age) {
    return `${this.name} is ${age}`;
}

console.log(sayHello.call(person, 24));     // instant output
console.log(sayHello.bind(person, 24));     // returns a function






const age = 16;

let person1 = {
    name: "John",
    age: 23,
    getAge: function () {
        return this.age;
    }
}


var person2 = {age: 30};
let ans = person1.getAge.call(person2);

console.log(ans);   // 30






const animals = [
    {species: "Lion", name: "King"},
    {species: "Whale", name: "Queen"},
]

function printAnimals (i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + " " + this.name)
    }
    this.print();
}

for(let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}






const array = ['a', 'b'];
const array1 = [1, 2, 3];

array.push.apply(array, array1);
console.log(array)      // [ 'a', 'b', 1, 2, 3 ]





// max in an array
const array2 = [1,2,3,4,9,5];

console.log(Math.max.apply(null, array2));      // 9
console.log(Math.min.apply(null, array2));      // 1





function f() {
    console.log(this)
}

let user = {
    g: f.bind(null)
}

user.g();       // window object





// #############################  BIND CHAINING DOES NOT EXIST    #################