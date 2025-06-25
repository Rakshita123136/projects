//print all number from 1 to 5 to the console using a loop
console.log("using a for loop")
for(let i = 1; i<= 5; i++){
    console.log(i)
}
console.log("using a while loop")
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
console.log("using a do while loop")
let j = 1;
do{
    console.log(j);
    j++;
} while(j <= 5)

//ading two number and return
console.log("add two number and return")
function addNumber(a,b){
    return a + b;

}
let sum = addNumber(5,10);
console.log(sum)

//function to calculate the area of rectangle
console.log("function to calculate the area of rectangle")
let calculateAreaOfRectangle = (width , height) => {
    return width * height;
}
let area = calculateAreaOfRectangle(5,8)
console.log("area of rectangle is", +area)

//string manupulation
let str = "hello world";

function reverseString(str){
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString(str))

//even or odd
console.log("Even or Odd")
function CheckEvenOrOdd(num){
    if(num % 2 === 0 ) {
        return "even"
    } else{
        return "Odd"
    }
}
console.log(CheckEvenOrOdd(12))
//leap year
console.log( "Leap year")
let isleapyear = (year)=>{
    if((year % 4 === 0 && year % 100 != 0) || year %  400 === 0){
        return true;

    }else {
        return false;
    }
} 
console.log(isleapyear(2029))