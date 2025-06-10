var a = document.querySelector('h1').innerText; //jo hidden hota h ya display none hota wo nhi dekhta
console.log(a)

var b = document.querySelector('h1').textContent; //jo hidden hota h wo display hota h
console.log(b)

var target = document.querySelector('.hero')
var newE = '<b>Drop X out </b>';
target.insertAdjacentHTML("afterbegin", newE)
target.insertAdjacentHTML("beforeend",newE);
//styling
document.body.style.backgroundColor = "red";
let a = document.querySelector("h1")
a.style.color = "red";

//get and set
let hero = document.querySelector('#hero')
//console.log(hero.getAttribute('about'))
hero.setAttribute("example" ,123);
//console.log(hero.outerHTML);

for(let att of hero.attributes){
    console.log(`${att.name} = ${att.value}`)
}


