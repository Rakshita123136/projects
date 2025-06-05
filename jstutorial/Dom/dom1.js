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
const ul = document.querySelector('ul');
const newE = document.createElement('li');
newE.textContent = 'gigi hadid';
ul.appendChild(newE)
//remove
const ul2 = document.querySelector('li')
ul.remove();
//replace child
const list = document.querySelector('ul');
const childToChange = list.childern[1]
const newli =document.createElement('li')
newli.textContent = 'giga hadid'
list.replaceChild(newli,childToChange)

//parent node
var parent2 = document.querySelector('html')
var p = parent2.parentElement;
console.log(p)
console.log("-------")
var parent2 = document.querySelector('html')
var q = parent2.parentNode;
console.log(q)

//previous sibling
var presib = document.querySelector('.hero');
console.log(presib.previousSibling);

//next sibling
var nextsib = document.querySelector('.hero')
console.log(nextsib.nextSibling);
console.log(nextsib.nextElementSibling);

//first child
var fchild = document.querySelector('ul')
console.log(fchild.firstChild)
console.log(fchild.firstElementChild)

//last child
var lchild = document.querySelector('ul')
console.log(lchild.lastChild)
console.log(lchild.lastElementChild)

//inner html
let a = document.querySelector('.hero')
a.innerHTML = <b>Giga chad</b>
a.innerHTML += <b>Giga chad</b>
console.log(a.innerHTML)

//outer html
let out = document.querySelector('.hero')
out.outerHTML = '<li><b>giga chad </b> </li>'
console.log(out.outerHTML)
