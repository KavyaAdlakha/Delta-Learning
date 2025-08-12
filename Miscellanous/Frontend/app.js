//Factory Function Method------------>

// function PersonMaker(name, age) {
//     const person ={
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`)
//         }
//     }

//     return person
// }

// let p1 = PersonMaker("adam",23); //copy
// let p2 = PersonMaker("eve",20); //copy

// constructor method-----------> doesn't return anything and sttart with capital letter

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`)
// }

// let p1 = new Person("adam",23);
// let p2 = new Person("eve",23);

// Classes method----------------------->

// class Person {
//  constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }

//  talk() {
//     console.log(`Hi, my name is ${this.name}`)
// }
// }

// let p1 = new Person("adam",23);
// let p2 = new Person("eve",23);


// //Inheritance--------------------->
// class Person{
//  constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }
// talk() {
//         console.log(`hi, i am ${this.name}`)
//     }
// }

// class Student extends Person{
//     constructor(name,age,marks) {
//         super(name,age) //parent class constructor being called
//         this.marks= marks;
//     }
// }
// let stu1 = new Student("adam",25,89)

// class Teacher extends Person{
//     constructor(name,age,subject) {
//         super(name,age) //parent class constructor being called
//         this.subject= subject;
//     }
// }
// let tea1 = new Teacher("adam",25,"maths")

// inheritance one more example------------------>

class Mammal{ //base class/ parent class
   constructor(name) {
    this.name= name;
    this.type = "warm=blooded";
   }
   eat() {
    console.log("I am eating")
   }
}

class Dog extends Mammal{ //child class
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wooff..")
    }
} 

class Cat extends Mammal{  //child class
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow..")
    }
}