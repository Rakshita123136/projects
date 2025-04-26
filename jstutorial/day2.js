//objects
let person = {
     name: "john",
     age : 20,
     city:"Delhi"
}
console.log(person)
console.log(person.name)
console.log(person["age"])

person.gender = "Male";
console.log(person)
delete person.city
console.log("city" in person)