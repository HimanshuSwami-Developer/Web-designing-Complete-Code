let a=window;// window is global object (scope)
 //document is part of window object

a=window.document;// give complete html file document

a=innerHeight; //browser current height 
console.log(a);


a=innerWidth;//browser current width

console.log(a);

// a=scrollX or scrollY for how much distance you scroll in x and y axis

a=location; //give location of site
console.log(a);
// a=location.href="https://www.google.com" //path to another site
// a=location.reload();// for reloading the page

// history.length // it is for how much go next pages in one tabes 
// a=history.go(-1); //privous page like (<-)  <- -> in browser

// alert("hello harry"); for any pop 


a=prompt("this will destory your computer"); //this is for take input in pop
document.body.innerHTML=a;


//a=confirm("are you human?");// for questioning and give boolean answer
console.log(a);
