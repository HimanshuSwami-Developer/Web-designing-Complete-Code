let a=document.body;//carry complete body tag
a=document.forms[0];// selecting forms used in html document
a=document.all; // it show all elements in html document
// console.log(a);
// let b=document.links[0];// collection of all links
// Array.from(a).forEach(element => {
//     console.log(element); // all element form in array formation and traverse also
// });


// a=document.scripts[0]; //for scripts collection
// a=document.images[0];//for image collecrtion
// console.log(a);


//document selector
element=document.getElementById('child-div1')
element=element.className
// element=element.parentNode;
// element=element.childNodes;
// element.style.color="red"// for css
// element.innerText="hello bro kya haal"
// element.innerHTML="<i>hello bro kya haal</i>"



// console.log(element.innerText);
// let sel=document.querySelector('div');//first div only select
// sel=document.querySelector('.child1');// select class first element only
// sel=document.querySelector('#child-div1');// select id
// sel.style.color="green"
// console.log(sel);

// ///multi-lvl selectors

// sel=document.getElementsByClassName('child1') //collection of classes
// sel=document.getElementsByTagName('div') //collection of tags
// console.log(sel);
// Array.from(sel).forEach(element => {
//     console.log(element);  //traverse array
//     element.style.color="blue";
// });
