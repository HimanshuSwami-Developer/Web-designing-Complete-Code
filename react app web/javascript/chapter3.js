let html="the fox is jump over the ";
html=html.concat('tree');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.indexOf("fox"));//search
console.log(html[4]);//slicing
console.log(html.lastIndexOf("tree"));//search from last
console.log(html.charAt(4));//find at 4 index what character
console.log(html.includes(" ")); // check this string exist
console.log(html.substring(1,8));// required string given in only positive
console.log(html.slice(-6,-1));// required string given in positive and -ve also
console.log(html.split(" "));// divide into component and convert in array
console.log(html.replace("the","it"));// replace first appearence only 

// templetes
let frut1="himanshu";
let frut2="swami";
html=`hello i am ${frut1 + " "+ frut2} & 
                <h1>${html}</h1>`;
document.body.innerHTML=html;

// ${} with `` blocktapes we use variables in string and html tags  also


//Array and Objects
let arr=["hello",89,200,'hello kya'];
console.log(arr.length)//length
console.log(arr[2])//slicing
arr.push(100);//add element in last
arr.unshift(120);//add element in starting
console.log(arr);

arr.pop();//remove element in last
arr.shift();//remove element in starting
console.log(arr);

arr.splice(1,2) // first arg is start and second arg is how many elment remove
console.log(arr);

arr.reverse() //reverse
console.log(arr);

let a=[6,474,90];
arr=arr.concat(a);
console.log(arr);//expend the array





