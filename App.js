const makeElementParent = document.createElement("div");
makeElementParent.className = "div1";
makeElementParent.id = "2";

const makeElement = document.createElement("span");
makeElement.className = "span1";
makeElement.id = "1";

makeElement.appendChild(
  document.createTextNode("I am created through pure JS")
);

//appendChild is used to insert anything
makeElementParent.appendChild(makeElement);

document.body.appendChild(makeElementParent);


// If you want to place Element in any perticular div or ul or any Element than first select that than add it to it.

// document.querySelector('#1').appendChild(makeElement)

// Replace item

const newSpan = document.createElement("span");
const newText = newSpan.appendChild(
  document.createTextNode("I am overWriting previous line")
);

const parentDiv = document.querySelector(".div1");
const oldText = document.querySelector(".span1");

parentDiv.replaceChild(newText, oldText);

// set Attribute

const btn = document.createElement("button");
btn.id = "3";
btn.appendChild(document.createTextNode("button"));
document.getElementById("2").appendChild(btn);

//set Attribute

btn.setAttribute("type", "submit");
const check = btn.getAttribute("type");

// Add Event Listner like onclick, onSubmit etc

document.getElementById("3").addEventListener("click", onClick);

function onClick(e) {
  //e.toElement.autofocus = true;
}

//////
document.addEventListener("mousemove", function (e) {
  document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} , 40 )`;
});

// Event Delgation
// We donot select item directly by Id or class, instead  parent Element
// than apply condition on it

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("submit")) {
    //  e.target.parentElement.parentElement.remove();

    let input = document.querySelector(".email").value;
    let inputArr;

    localStorage.getItem("inputArr") === null
      ? (inputArr = [])
      : (inputArr = JSON.parse(localStorage.getItem("inputArr")));

    inputArr.push(input);

    // we have to store setItem as a string , so json.stringify
    localStorage.setItem("inputArr", JSON.stringify(inputArr));
    e.preventDefault();
  }
});


//////////////////////////////////////////////////////////

//     Working with constructors

// ES6
const Person ={
  name : 'saud',
  age: 30,
  designation : 'software developer'
}

console.log(Person);

function Constructor(a, b, c){
  this.name = a,
  this.age = b,
  this.designation = c;
  this.calculate = function(){
    return this.age + this.name + this.designation
  }
  console.log(this.calculate())
}

const secondName = new Constructor('saud', 30, "Software Developer")


/////////////////////////////////////////
// constructor prototypes

// greet is prototype
const greet = {
  greeting: function(){
    return `thanks Mr. ${this.name} for visiting our store`
  }
}

// Now create object and take prototype as parameter
const obj = Object.create(greet,{
  firstGreet : {value :'you are wellcome'},
  name : {value : 'saud'},
})
console.log(obj.greeting());


////////////////////////////////////////////

function workPrototype(a, b){
  this.firstName = a,
  this.lastName = b;
}

workPrototype.prototype.fn = function(){
  return    `Thanks for visisting our store ${this.firstName} ${this.lastName}`
}

workPrototype.prototype.changeName = function(newName){
  this.firstName = newName
}

const display = new workPrototype('saud', 'malik')

display.changeName('mahaz')

console.log(display.fn())

/////////////////////////////////////////////////////

//             JS classes

class Person2{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
  }

  // method
  welcome(){
    return `Welcome ${this.firstName} ${this.lastName}`
  }

  changeName(newName){
    this.firstName = newName
  }

  //    Static methods, we dont need to call static method through Object
  //    Static  method is independent of 'this' keyword

  static add(x,y){
    return x + y;
  }

}

const call = new Person2('saud', 'malik')

console.log(call.welcome())
call.changeName('qasim')
console.log(call.welcome())

console.log(Person2.add(3,5))


/////////////////////////////////////////////////////

//            Inheritance Or Sub-classes in JS

// Child class has access of parent-class through 'super()'

class Parent{
  constructor(a, b){
    this.firstName = a;
    this.lastName = b;
  }

  greeting(){
    return  `Hello ${this.firstName} ${this.lastName}`
  }
}

class Child extends Parent{
  constructor(a, b, c, d){
    super(a, b)
    this.age = c;
    this.grade = d;
  }

  static directCall(){
    return  ` Your password is wrong`
  }
}

const saud = new Child('saad', 'saud', 'maaz', 'mohaviz')
console.log(saud)

console.log(Child.directCall())