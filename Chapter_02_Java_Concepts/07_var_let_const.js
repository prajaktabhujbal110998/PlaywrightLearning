//Var, Let, Const

//Var - function scoped

//  var a = 10; //Global scope

//  console.log(a);

// //Defination of the function 
//  function printHello() {

//     console.log("Hello World!");
//     var a = 20; //Local scope
//     console.log(a);
//     if(true) {
//         var a = 30;
//         console.log(a); //30
//     }
//     console.log("F-->",a);
    
// }

// //Calling of the function
// printHello();

// //var also allows redeclaration and reassignment
// var a = 40; //Redeclaration
// var a = 50; //Redeclaration
// console.log(a); //50 - No error, var allows redeclaration

//Let - Block Scoped
let b = 20; //Global scope
console.log(b);

//Defination of the function 
 function printHello() {

    console.log("Hello World!");
    let b = 30; //Local scope
    console.log(b);
    if(true) {
        let b = 5;
        console.log(b); //5
    }
    console.log("F-->",b);
    
}

//Calling of the function
printHello();

var nn = "Prajakta";
let nn = "Prajakta"; //Error: Identifier 'nn' has already been declared

const pi = 3.14; //Constant variable
console.log(pi);
pi = 3.14159; //Error: Assignment to constant variable.
