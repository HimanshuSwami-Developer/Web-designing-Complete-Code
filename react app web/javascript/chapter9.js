function myclick() {
let element=document.createElement('div')
element.className='child5'
element.id='child-div5'
element.setAttribute('title',"div-child")
element.innerText="hello boi";

let div=document.getElementById('div1')
div.appendChild(element);
console.log(element);
}