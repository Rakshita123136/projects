// Array
let stu = ["john", "reem", "resh" ,"jane"];
console.log(stu[0]) //index of the array
//modify
console.log("here the modification is done")
stu[0] = "orton"

//push or adding value
console.log("here is example of push")
stu.push("cena")
stu.push("zara")
//pop
console.log("here is example of pop")
stu.pop()

//shift
console.log("here is example of shift")
stu.shift("jane")

//unshift
console.log("Here is example of unshift")
stu.unshift("cena")
//index of method
console.log(stu.indexOf("jane"))
//include method
console.log(stu.includes("john"))
//slice
console.log(stu.slice(0,2))
//splice
console.log(stu.splice(1,1,"Sara","lily"))
//reverse
console.log(stu.reverse())
//map method
 let number = [1,2,3,4,5]
 let doubled = number.map(num => num*2)
 console.log(doubled)