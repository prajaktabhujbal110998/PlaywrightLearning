let Amul = null;
let val = Amul ?? "Govind Milk"; 
let val2 = null ?? "default"; // "default" ?? Nullish Coalescing(Optional Value of Null) Operator (??) - It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.

//Modern js - Typescript - Nullish Coalescing Operator

val = "Which Milk? ---> " + val;
console.log(val);
//Very useful in test data handling

