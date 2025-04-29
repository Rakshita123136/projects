// Objects and methods
let person = {
    name: "john",
    age: 20,
    city: "Delhi", 
    greet: function() {
       console.log("This is function");
    },
    subject :{
        math :34,
        science:45
    }
};

console.log(person.greet()); // calls the greet method
console.log(person); // prints full object
console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation

// Add a new property
person.gender = "Male";
console.log(person);

// Delete a property
delete person.city;

// Check if a property exists
console.log("city" in person);
 let keys = Object.keys(person)
 console.log(keys)
 let values = Object.values(person)
 console.log(values)
 //frezing the object
 person.num =22;
 console.log(person)
 Object.freeze(person)
 //object inside object
 console.log(person.subject)
 console.log(person.subject.math)
 //set:doesnot take repeated value onlly take unique value
 let number = new Set([1,2,3,4,5,6,7,8])
 console.log(number)
 //adding new value
Set.add(33)
//has method
console.log(Set.has("2"))
//size method
console.log(Set.size)
//delete method
console.log(Set.delete(4))
//clear
Set.clear(5)
//foreach
Set.forEach(color => console.log(color))
//maps
let userMap = new Map();
userMap.set("name","Alice")
userMap.set("age" , 20)
userMap.set("city" , "new york")
console.log(userMap)
//get value
console.log(userMap.get("age"))
console.log(userMap.has("city"))
//delete
console.log("deleting the age")
userMap.delete("age")
console.log(userMap)

//second way to make map
let uMap = new Map([
    ["fname" , "Alice"],
    ["city" , "new york"]
])
console.log(uMap)
//iteration
for(let[key,value] of  uMap ){
    console.log(`${key}:${value}`)
}
// for in 
let fruits = ["apple" , "Banana" ,"Mango"]
 for(let index in fruits){
    console.log(fruits[index])
 }
//  for of 
for (let value of fruits){
    console.log(value)
}
//lexcial scoe : lexical scope determines how variables are 
// accessed in nested functions. It's called "lexical" because 
// it's based on where variables and functions are written in the code,
//  not how they are called

function outerFunction() {
    let outerVar = "I'm outside!";
    
    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); // ✅ Allowed! Can access parent variable
    }
    
    innerFunction();
    
    console.log(innerVar); // ❌ Error! outerFunction cannot access innerVar
}

outerFunction();

// A **closure** in JavaScript is a function that "remembers" 
// the variables from its parent scope, even after the parent function has finished executing.
//  Closures allow functions to maintain access to variables they were originally created with,
//  making them very useful for data privacy and maintaining state.


function outerFunction() {
    let counter = 0; // This variable belongs to outerFunction
    
    return function innerFunction() {
        counter++; // innerFunction can access counter even after outerFunction finishes
        console.log(`Counter: ${counter}`);
    };
}

const increment = outerFunction(); // outerFunction runs and returns innerFunction
increment(); // Output: Counter: 1
increment(); // Output: Counter: 2
increment(); // Output: Counter: 3

//destructuring
const num = [1,2,3]
let [a,b,c]= num
console.log(c)
//spread
const arr =[1,2,44,56]
const arr2 =[...arr]
console.log(arr2)
// merging 2 array
const m1 = [1,2,3]
const m2 = [4,5,6]
const merging = [...m2,...m1]
console.log(merging)
// chaining is a technique where multiple methods are called on the same object in a single line,
class Person {
    constructor(name) {
        this.name = name;
    }
    
    setAge(age) {
        this.age = age;
        return this; // Returning `this` allows chaining
    }
    
    setCity(city) {
        this.city = city;
        return this; // Returning `this` allows chaining
    }

    getInfo() {
        return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
}

const person = new Person("Rakshita")
    .setAge(25)
    .setCity("Mumbai");

console.log(person.getInfo()); // Output: Rakshita is 25 years old and lives in Mumbai.

// nullish coalescing operator (??) helps provide default values only when the left-hand side is null or undefined.
//  This makes it more predictable than using ||, which treats all falsy values ("", 0, false) as missing.
let userInput = null; // Simulating an empty input
let defaultName = "Guest";

let username = userInput ?? defaultName; 
console.log(username); // Output: Guest
// Difference Between ?? and ||

console.log("" || "Default");  // Output: Default (because empty string `""` is falsy)
console.log("" ?? "Default");  // Output: "" (empty string is valid for `??`)

//debugger
function fun(){
    debugger;
    for (let i =0; i<5;i++){
        console.log(i);
    }
}
//this :it's used to refer to the context in which a function is executed.
//  Its value depends on how the function is called
var obj={
    fname : "john",
    age :8,
    fun: function (){
        console.log(this.fname);
    }
}
//constructor
function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name=name;
}
let person =  User("jack") 
console.log(person.name)
//symbol
let sym = Symbol("id");
let sym1 = sSymbol("id");
console.log(sym.toString());
console.log(sym.description);
console.log(sym === sym1);

// In JavaScript, `Symbol` is a unique and immutable primitive type introduced in ES6.
//  It is often used to create property keys that won’t collide with other property keys, especially in objects.

const mySymbol = Symbol("description");
console.log(mySymbol); // Symbol(description)

const id = Symbol("id");
const user = {
  name: "Rakshita",
  [id]: 1234
};
console.log(user[id]); // 1234

// This prevents accidental overwriting of the property because symbols are hidden from `Object.keys()`.

// ### Global Symbol Registry
// You can store and retrieve symbols using `Symbol.for()`, ensuring shared access:
const globalSymbol = Symbol.for("shared");
console.log(Symbol.for("shared") === globalSymbol); // true

