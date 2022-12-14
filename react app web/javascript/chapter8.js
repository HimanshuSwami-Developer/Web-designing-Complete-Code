let e=document.getElementById('div1');
// console.log(e.childNodes); // its count commments lines and text or spaces
console.log(e.children); // its count elements only

let nodeName=e.childNodes[1].nodeName //access that element one
console.log(nodeName);

let nodeType=e.childNodes[1].nodeType //access that element one
console.log(nodeType);

// nodetypes
// 1.element
// 2.attribute
// 3.text node
// 8.commments
// 9.document
// 10.doctype

console.log(e.firstChild);//first child node
console.log(e.firstElementChild); //its element


console.log(e.lastChild);//last child node
console.log(e.lastElementChild); //first child node element

console.log(e.childElementCount); //count total child node

console.log(e.firstElementChild.nextSibling);//SECOND child node
console.log(e.firstElementChild.nextElementSibling); //second child node element
 //by siblings method
