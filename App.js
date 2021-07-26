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
