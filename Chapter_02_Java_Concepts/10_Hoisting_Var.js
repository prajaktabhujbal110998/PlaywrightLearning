console.log(greeting);  //Output: undefined
var greeting = "Hello!";
console.log(greeting);  //Output: Hello!

//Behind the scenes:
//var greeting;      //Hoisted with undefined
//console.log(greeting);  //Output: undefined
//greeting = "Hello!";  //Assignment happens at the original place in code
//console.log(greeting);  //Output: Hello!