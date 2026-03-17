//Comparison Operator (Will always result in the boolean , true or false)

//= , == , ===

//= is an assignment operator - It is used to assign the value to the variable
//== is a lose comparison operator - It is used to compare the value of the variable
//=== is a strict comparison operator - It is used to compare the value as well as the type of the variable 

// > , < , >= , <= , ! , != , !==

console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4);  //4 > 4 or 4 = 4  ---> if any condition is true , It will give the result true
console.log(3 <= 4); 

console.log(5 == "5") //Lose couple comparison
console.log(5 === "5") //Strict comparison - Not allowed

console.log(5!="5") //false - 5 = int, "5" = string - both are of different types so it is not equal - Lose couple comparison
console.log(5!=="5") //true
//console.log(5!==="5") //This does not exist

// === Strict - This will check the value as well as the type of the variable
// == Lose couple - This will check either value or the data type

// >== Not a valid operator