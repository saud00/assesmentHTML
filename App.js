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

console.log(makeElement.parentElement);

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
console.log(btn);
btn.appendChild(document.createTextNode("button"));
document.getElementById("2").appendChild(btn);

//set Attribute

btn.setAttribute("type", "submit");
const check = btn.getAttribute("type");
console.log(check);

// Add Event Listner like onclick, onSubmit etc

document.getElementById("3").addEventListener("click", onClick);

function onClick(e) {
  //e.toElement.autofocus = true;
  console.log(e);
}

//////
document.addEventListener("mousemove", function (e) {
  document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} , 40 )`;
});

// Event Delgation
// We donot select item directly by Id or class, instead  parent Element
// than apply condition on it

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("email")) {
    console.log(e.className);
    e.target.parentElement.parentElement.remove();
  }
});
