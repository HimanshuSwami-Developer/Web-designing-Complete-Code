console.log("module for test export....");
let sum=0;
function add(arr) {
   return sum+=arr;   
}
module.exports={   //as an object pass  METHOD 2 
    ad : add,
    name : "himanshu",
    roll : 100,
}
module.exports.surname="hello there"; //method 1