// = , == , ===    ---> == (Loose Equality) , === (Strict Equality  )

let a = 5;

//console.log(5 = 5);  //This will cause an error because = is an assignment operator, not a comparison operator.
console.log(5 == 5)  //Correct , comparison operator, checks for value equality
console.log(5 === 5) //Correct, strict equality operator, checks for both value and type equality

console.log(5 == "5");  //Number , String ---> true, because == Compared based on value, and here the value is the same (5), so it returns true
console.log(5 === "5"); //Number , String ---> false, because === compared based on both value and type, and here the types are different (number vs string), so it returns false

console.log(null == undefined);  //true, because == considers null and undefined equal
console.log(null === undefined); //false, because === considers null and undefined different types

console.log(5 == 5.0);  //true, because == considers 5 and 5.0 equal based on value
console.log(5 === 5.0); //true, because === considers 5 (number) and 5.0 (number) equal based on both value and type
console.log(5 === 5.1); //false, because === considers 5 (number) and 5.1 (number) different based on value