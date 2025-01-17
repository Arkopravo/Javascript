// Prototypes

// __proto__: It points to the prototype of an object and is used for inheritance and accessing the prototype chain.
// prototype: It exists on constructor functions to set up inheritance for objects created by that function, defining shared properties and methods for instances.

// setPrototypeOf is a method used to set the prototype (the object's internal [[Prototype]]) of a specified object to another object or null. It allows changing the prototype dynamically after an object has been created.

// instanceof is an operator that checks if an object is an instance of a specific constructor or its prototype chain. It returns true if the object is an instance of the constructor or a constructor's prototype chain.

// You can create an object without a prototype by using Object.create(null). This creates an object with no prototype chain, making it free from any inherited properties or methods.

// The deepClone function recursively creates a deep copy of an object, including nested objects and arrays, ensuring that the cloned object is completely independent of the original object.

// Everything in Javascript is an Object


let obj = {
    name: "Piyush Agarwal",
    age: 25,
};
console.log(obj.__proto__); // Object.prototype



// Prototype Chaining -> When we create an object, it inherits properties from its prototype. If the prototype doesn't have a property, it looks up the prototype chain until it finds the property or reaches the end of the chain.

let person = {
    name: "js",
    age: 25,
    //   toString: () => {
    //     console.log("converts to string");
    //   },
};

let additional = {
    name: "js1",
    username: "javascript",
    alias: function () {
        console.log(`${this.name} is also known as ${this.username}`);
    },
};

person.__proto__ = additional;
console.log(person.alias());



// Prototype Inheritance

// Defined a Constructor Function
function Animal(name) {
    this.name = name;
}

// Add a method to the prototype
Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

var animal1 = new Animal("Tiger");
console.log(animal1);




function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};

var dog1 = new Dog("Max", "Labrador");
console.log(dog1)