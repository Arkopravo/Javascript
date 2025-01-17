// Class and Contructors

class sample {
    constructor(name, channel, like=0) {
        this.name = name;
        this.channel = channel;
        this.videoLike = like;
    }

    introduction () {
        return `Hey its ${this.name}`
    }

    like() {
        this.videoLike++;
        return `Liked this video! Current likes = ${this.videoLike}`;
    }
}


// const ans = new sample("Arko", "yt");
console.log(new sample("Arko", "yt"));



// converting to function constructors
function sample1 (name, channel, like=0) {
    this.name = name;
    this.channel = channel;
    this.videoLike = like;
}

sample1.prototype.introduction1 = function () {
    return `Hey its ${this.name}`
}

sample1.prototype.like1 = function () {
    this.videoLike++;
    return `Liked this video! Current likes = ${this.videoLike}`;
}



console.log(new sample1("Ratul", "yt"));










// Inheritance
class youtube extends sample1{
    constructor(name, channel, like, subscribe) {
        super(name, channel, like);
        this.subscribe = subscribe;
    }

    subscribersCount () {
        return `${this.channel} has ${this.subscribe} subscribers`;
    }
}

console.log(new youtube("Ratul", "yt", 8, "7"));



// class vs object
// class -> defines the structure and the behaviour of the object
// object -> instance of a class that possess properties and methods defined by the class


class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }

    area() {
        return this.width * this.heigth;
    }
}

const square = new Rectangle(5, 5);
const rect = new Rectangle(4, 6);

console.log(square.area());     // 25
console.log(rect.area());       // 24





// inheritence -> Inheritance in JavaScript classes is achieved using the `extends` keyword.
//                It allows a subclass (child class) to inherit properties and methods from a superclass (parent class).




class Employee {
    constructor() {         // class can only have 1 contructor
        this.name = "javascript"
    }
    constructor () {
        this.age = 25
    }
}

var employeeObject = new Employee();
console.log(employeeObject.name)    // error -> // class can only have 1 contructor






class Calculator {
    constructor() {
        this.result = 0
    }

    add (num) {
        this.result = this.result + num;
        return this;
    }

    subtract (num) {
        this.result = this.result - num;
        return this;
    }

    multiply (num) {
        this.result = this.result * num;
        return this;
    }

    divide (num) {
        if(num != 0) {
            this.result = this.result / num;
        } else {
            console.log("cannot divide");
        }
        return this;
    }

    getResult () {
        return this.result;
    }
}

const Calc = new Calculator();

const result = Calc.add(10).subtract(5).multiply(2).divide(4).getResult();
console.log(result);






class Shape {
    area () {
        return 0;
    }
}


class Circle extends Shape {
    constructor (radius) {
        super();
        this.radius = radius;
    }

    area () {
        return Math.PI * this.radius ** 2;
    }
}


class Sqaure extends Shape {
    constructor (side) {
        super();
        this.side = side;
    }

    area () {
        return Math.PI * this.side ** 2;
    }
}

const circle = new Circle(5);
const square1 = new Sqaure(4);

console.log(circle.area());
console.log(square.area());





// getter and setters
// Getters and setters are methods used to control access to the properties of a class.
// They allow for more controlled modification and retrieval of property values, such as incrementing likes in a video or ensuring certain conditions are met before setting a property value.

class Teacher1 {
    constructor(name, channel, likes = 0) {
      this.name = name;
      this.channel = channel;
      this._videoLikes = 0;
    }
  
    intro() {
      return `Hey, it's ${this.name}! Welcome to ${this.channel}!`;
    }
  
    like() {
      this._videoLikes++;
      return `Like this video! Current likes: ${this._videoLikes}`;
    }
  
    get videoLikes() {
      return this._videoLikes;
    }
  
    set videoLikes(likes) {
      if (likes < 0) throw new Error("Must be more than 0");
      else this._videoLikes = likes;
    }
  }
  
  const coder = new Teacher1("javascript", "yt");
  console.log(coder.videoLikes)