// primitive datatypes
// 1.stack
// 2.null
// 3.Number
// 4.string
// 5.boolean
// 6.symbol
// 7.undefined

let marks=90;
console.log((typeof marks));

//Type converstion
marks=String(90);
marks=Number(90);//number converstion only number string or booleans
marks=parseInt(90.98)//convert into integer
marks=parseFloat(90.98)// convert into float value

console.log((typeof marks));
//string converstion convert all datatypes and object in string

let i=890.90;
console.log(i.toFixed(1));// show how much digit you want after decimal

i=70;
console.log(i.toString); //convert into string by thuis function



// non primitive
// 1.array
// 2.objects
// 3.functions
// 4.dates
let mrks=[1,32,4,2,"hello",true];
console.log((typeof mrks));

let obj={// it is declare in single and double quote 
    //or without qoutes
    name:"himanshu",
    "marks":78,
}
console.log(obj);
let date=new Date();// present date and time and zone 
console.log(date);

