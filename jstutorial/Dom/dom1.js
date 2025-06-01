//getelementsbytagname()
var a= document.getElementsByTagName('li')
console.log(a)
//getelementsbyclassname()
var b= document.getElementsByClassName('hero')
console.log(b)
//getElementbyid()
var c = document.getElementById('hero')
console.log(c)
//queryselector()
var d = document.querySelector('li')
console.log(d)
//queryselectorall()
var e = document.querySelectorAll('li')
console.log(e)

//parent elements
var parent = document.querySelector('ul')
var p = parent.parentElement;
console.log(p)

//childern elements
var child = document.querySelector('ul')
var p =child.children;
console.log(p)

//childernnode
var child = document.querySelector('ul')
console.log(child.children[0])
console.log(child.childNodes)

//siblings
//method-1
console.log(document.querySelector('.hero').previousElementSibling)
//method-2
var a = document.querySelector('.hero')
if(previousElementSibling == null){
    console.log("Siblings not present")
}else{
console.log(a.previousElementSibling)
}
//append
