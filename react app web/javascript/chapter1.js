console.time("your code took");
console.log("hello bro"); //print anything in console 
//print but not return anything so it show undefined 
console.log([1,2,3,4]); //array in console
console.table({"name":"himanshu","roll no":199}); 
// if we want print table with object
console.warn("this is warning");
//show any warning

// console.clear();
//clear console

console.timeEnd("your code took"); 
// it is for how much code time took for execute
//same string pass in time 

console.assert(777<190,"age doesnot exist");
//showing error when condition is false 
/*
multiline comment
 */

// VARIABLES LET ,VAR , CONST
var a="hello",co; //var use for old js
console.log(a,co=67);
var _car,$bike; //both are valid but in object oreiented
console.log(_car=56,$bike=90);
const name="himanshu";
console.log(name);// for making constant variable dont change
let roll=90;
console.log(roll)// it is for local scope or block level variable
const arr=[2,3,4,5];
arr.push(12);
console.log(arr);
/*
four types of case:
1.camelCase
2.khabab-case
3.snake_case
4.PascalCase

*/
