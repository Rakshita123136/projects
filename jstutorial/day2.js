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
//lexcial scoe 
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