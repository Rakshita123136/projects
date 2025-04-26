// Array
let stu = ["john", "reem", "resh" ,"jane"];
console.log(stu[0]) // index of the array

// Modify
console.log("Here the modification is done");
stu[0] = "orton";

// Push or adding value
console.log("Here is example of push");
stu.push("cena");
stu.push("zara");

// Pop
console.log("Here is example of pop");
stu.pop();

// Shift
console.log("Here is example of shift");
stu.shift(); // Removed argument

// Unshift
console.log("Here is example of unshift");
stu.unshift("cena");

// indexOf method
console.log(stu.indexOf("jane"));

// includes method
console.log(stu.includes("john"));

// slice
console.log(stu.slice(0, 2));

// splice
console.log(stu.splice(1, 1, "Sara", "lily"));

// reverse
console.log(stu.reverse());

// map method
let number = [1, 2, 3, 4, 5];
let doubled = number.map(num => num * 2);
console.log(doubled);

// filter
console.log("Here is filter method");
let even = number.filter(num => num % 2 == 0);
console.log(even);

// reduce
console.log("Here is reduce method");
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, nums) => acc + nums, 0);
console.log(sum);

// find
let findnumbers = [2,4,5,7,8]
let firstEven = findnumbers.find(num => num % 2 == 0)
console.log(firstEven)
//find index
let findInd = findnumbers.findIndex(num => num % 2 == 0)
console.log(findInd)
let alleven = numbers.every(num => num % 2 == 0)
console.log(alleven) 
//some
let some = numbers.some(num => num % 2 == 0)
console.log(some) 
//sort
let num = [8,7,5,7,4,2,6,9]
num.sort((a,b)=> a-b)
console.log(num)


