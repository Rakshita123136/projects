// Objects and methods
let person = {
    name: "john",
    age: 20,
    city: "Delhi", 
    greet: function() {
       console.log("This is function");
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