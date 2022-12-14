// control statement
// if (condition) {
// }
// else{
// }


// tenary operator
// let age=12;
// console.log((age<18)?"vot invaild" : "valid");


// switch (age) {
//     case 19:
//         console.log("age is 19");
//         break;
//     case 12:
//         console.log("age is 12");
//             break;
//     case 29:
//         console.log("age is 29");
//                 break;
            
//     default:
//         console.log("age is not found");
//         break;
// }

//foreach loop for array 

let arr=[1,2,3,"hll",4,5];
arr.forEach(function(element,index) {
   console.log(element,index); 
});


let obj={
    name:"himan",
    roll:389,
    id:"nice",
}

for (let key in obj) {
    console.log(key+" "+obj[key]);
    
}