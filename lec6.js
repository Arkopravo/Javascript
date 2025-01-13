// OBJECTS

const user = {
    name: "Javascript",
    age: 20,
    "i am doing javascript": true
};

user.name = "React.js";
delete user.age;

console.log(user)
console.log(user["i am doing javascript"])

delete user["i am doing javascript"]
console.log(user)




const property = "firstName";
const name = "Javascript";

const user1 = {
    [property] : name,
}

console.log(user1.firstName)





const user2 = {
    name: "Javascript",
    age: 20,
    isGood: true
}

for(key in user2) {
    console.log(key)
    console.log(user2[key])
}





let nums = {
    a: 100,
    b: 200,
    title: "numbers"
}

multiplyByTwo(nums)

function multiplyByTwo (obj) {
    for(key in nums) {
        if(obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}


console.log(nums)







const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;     // a["[object object]"] = 123
a[c] = 456;     // a["[object object]"] = 456

console.log(a[b])






// JSON.stringify vs JSON.parse

const user3 = {
    name: "John",
    age: 30
}

console.log(user3);

const strObj = JSON.stringify(user3);
console.log(strObj);

const strParse = JSON.parse(strObj);
console.log(strParse);





console.log([..."hello"]);
output = 'h', 'e', 'l', 'l', 'o' 




const settings = {
    username: "John",
    age: 52,
    height: 175
}

const data = JSON.stringify(settings, ["age", "height"]);
console.log(data);






const shape = {
    radius: 10,
    diameter (){
        return this.radius * 2;         // in normal function, this represent local
    },
    perimeter: () => 2 * Math.PI * this.radius,     // in arrow function, this represent global 
}

console.log(shape.diameter());      // 20
console.log(shape.perimeter());     // NaN




// Destructuring
const user4 = {
    name: "John",
    age: 52,
}

const name1 = "Javascript";

const {name: myName} = user4;
console.log(myName); // John
console.log(name1);







let e = {gretting: "Hey"};
let d = e;  // passing reference of c to d

e.gretting = "Hello";
console.log(d.gretting)     // Hello





let person = {name: "John"};
const members = [person];
person = null;

console.log(members);   // john





// Deep copy / Shallow copy
let user = {
    name: "John",
    age: 50
}

const objClone = Object.assign({}, user);
objClone.name = "SRK"

const objClone1 = JSON.parse(JSON.stringify(user))
objClone1.name = "SRK"

const objClone2 = {...user}
objClone2.name = "SRK"

console.log(user, objClone);
console.log(user, objClone1);
console.log(user, objClone2);